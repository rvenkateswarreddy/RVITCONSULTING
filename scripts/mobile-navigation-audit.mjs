import { chromium } from "playwright-core";
import { mkdir, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const baseUrl = process.env.AUDIT_BASE_URL || "http://127.0.0.1:3100";
const outputDir = new URL("../artifacts/mobile-navigation-audit/", import.meta.url);
const routes = [
  ["home", "/"],
  ["services", "/services"],
  ["project-support", "/project-support"],
  ["industries", "/industries"],
  ["corporate-trainings", "/corporate-trainings"],
  ["careers", "/careers"],
  ["about", "/about"],
  ["marketing", "/marketing"],
  ["contact", "/contactus"],
];

const primaryPaths = new Set(["/services", "/project-support", "/industries", "/corporate-trainings", "/careers", "/about"]);

await mkdir(outputDir, { recursive: true });
const browser = await chromium.launch({ executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe", headless: true });
const page = await browser.newPage({ viewport: { width: 390, height: 844 }, isMobile: true });
const errors = [];
page.on("console", (message) => {
  if (message.type() === "error") errors.push(message.text());
});
page.on("pageerror", (error) => errors.push(error.message));
await page.addInitScript(() => localStorage.setItem("rvit-cookie-preference", "essential"));
await page.goto(baseUrl, { waitUntil: "domcontentloaded" });
await page.waitForTimeout(700);

const report = { baseUrl, generatedAt: new Date().toISOString(), pages: [], errors };

for (const [name, path] of routes) {
  if (path !== "/") {
    if (primaryPaths.has(path)) {
      const menuButton = page.locator('[data-testid="menu-toggle"]');
      if ((await menuButton.count()) !== 1) throw new Error(`Missing menu button before ${path}`);
      await menuButton.click();
      await page.waitForTimeout(320);
      const routeLink = page.locator(`#mobile-navigation a[href="${path}"]`);
      if ((await routeLink.count()) !== 1) throw new Error(`Missing unique mobile link for ${path}`);
      await routeLink.click();
      await page.waitForURL(`${baseUrl}${path}`, { timeout: 15000 });
    } else {
      await page.goto(`${baseUrl}${path}`, { waitUntil: "domcontentloaded" });
    }
    await page.waitForTimeout(650);
  }

  const diagnostics = await page.evaluate(() => ({
    path: location.pathname,
    bodyHeight: document.documentElement.scrollHeight,
    mainTextLength: document.querySelector("main")?.innerText.trim().length ?? 0,
    revealCount: document.querySelectorAll("[data-reveal]").length,
    hiddenRevealCount: [...document.querySelectorAll("[data-reveal]")].filter((node) => Number(getComputedStyle(node).opacity) < 0.1).length,
    horizontalOverflow: document.documentElement.scrollWidth > window.innerWidth + 1,
    video: (() => {
      const video = document.querySelector("video");
      return video ? { paused: video.paused, currentTime: Number(video.currentTime.toFixed(2)), readyState: video.readyState } : null;
    })(),
  }));

  await page.evaluate(async () => {
    const pause = (time) => new Promise((resolve) => setTimeout(resolve, time));
    for (let y = 0; y < document.documentElement.scrollHeight; y += 560) {
      window.scrollTo(0, y);
      await pause(70);
    }
    window.scrollTo(0, 0);
    await pause(160);
  });

  await page.screenshot({ path: fileURLToPath(new URL(`${name}.png`, outputDir)), fullPage: true });
  report.pages.push({ name, ...diagnostics });
}

await browser.close();
await writeFile(new URL("report.json", outputDir), JSON.stringify(report, null, 2));
console.log(JSON.stringify(report, null, 2));
