import { chromium } from "playwright-core";
import { mkdir, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const baseUrl = process.env.AUDIT_BASE_URL || "http://127.0.0.1:3100";
const outputDir = new URL("../artifacts/visual-audit/", import.meta.url);
const routes = [
  ["home", "/"],
  ["about", "/about"],
  ["services", "/services"],
  ["industries", "/industries"],
  ["marketing", "/marketing"],
  ["project-support", "/project-support"],
  ["corporate-trainings", "/corporate-trainings"],
  ["careers", "/careers"],
  ["contact", "/contactus"],
  ["privacy", "/privacy-policy"],
  ["terms", "/terms-of-service"],
  ["cookies", "/cookies"],
];

await mkdir(outputDir, { recursive: true });

const browser = await chromium.launch({
  executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
  headless: true,
});

const report = { baseUrl, generatedAt: new Date().toISOString(), pages: [], mobileMenu: null };

for (const [name, path] of routes) {
  for (const mode of [
    { name: "desktop", viewport: { width: 1440, height: 1000 } },
    { name: "mobile", viewport: { width: 390, height: 844 } },
  ]) {
    const page = await browser.newPage({ viewport: mode.viewport, deviceScaleFactor: 1 });
    const errors = [];
    page.on("console", (message) => {
      if (message.type() === "error") errors.push(message.text());
    });
    page.on("pageerror", (error) => errors.push(error.message));
    await page.addInitScript(() => localStorage.setItem("rvit-cookie-preference", "essential"));
    await page.emulateMedia({ reducedMotion: "no-preference" });
    const response = await page.goto(`${baseUrl}${path}`, { waitUntil: "networkidle" });
    await page.evaluate(async () => {
      const pause = (time) => new Promise((resolve) => setTimeout(resolve, time));
      const height = document.documentElement.scrollHeight;
      for (let y = 0; y < height; y += Math.max(420, window.innerHeight * 0.7)) {
        window.scrollTo(0, y);
        await pause(70);
      }
      window.scrollTo(0, 0);
      await pause(120);
    });
    await page.screenshot({ path: fileURLToPath(new URL(`${name}-${mode.name}.png`, outputDir)), fullPage: true });
    const videos = await page.locator("video").evaluateAll((nodes) => nodes.map((video) => ({
      paused: video.paused,
      readyState: video.readyState,
      currentTime: video.currentTime,
    })));
    report.pages.push({ name, mode: mode.name, status: response?.status(), errors, videos });
    await page.close();
  }
}

const menuPage = await browser.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 1 });
await menuPage.addInitScript(() => localStorage.setItem("rvit-cookie-preference", "essential"));
await menuPage.goto(baseUrl, { waitUntil: "networkidle" });
const menuButton = menuPage.locator('[data-testid="menu-toggle"]');
await menuButton.click();
await menuPage.waitForTimeout(450);
const mobileNavigation = menuPage.locator("#mobile-navigation");
report.mobileMenu = {
  buttonCount: await menuButton.count(),
  buttonExpanded: await menuButton.getAttribute("aria-expanded"),
  visible: await mobileNavigation.isVisible(),
  servicesLinkVisible: await mobileNavigation.getByRole("link", { name: /Services/ }).isVisible(),
};
await menuPage.screenshot({ path: fileURLToPath(new URL("mobile-menu-open.png", outputDir)), fullPage: false });
await menuPage.close();

await browser.close();
await writeFile(new URL("report.json", outputDir), JSON.stringify(report, null, 2));
console.log(JSON.stringify(report, null, 2));
