import { chromium } from "playwright-core";
import { mkdir, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const baseUrl = process.env.AUDIT_BASE_URL || "https://www.rvit.co.in";
const outputDir = new URL("../artifacts/live-mobile-audit/", import.meta.url);
const routes = [
  ["home", "/"],
  ["services", "/services"],
  ["marketing", "/marketing"],
  ["project-support", "/project-support"],
  ["corporate-trainings", "/corporate-trainings"],
  ["industries", "/industries"],
  ["careers", "/careers"],
  ["about", "/about"],
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

const report = { baseUrl, generatedAt: new Date().toISOString(), viewport: "390x844", pages: [] };

for (const [name, path] of routes) {
  const page = await browser.newPage({ viewport: { width: 390, height: 844 }, isMobile: true });
  const errors = [];
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });
  page.on("pageerror", (error) => errors.push(error.message));
  await page.addInitScript(() => localStorage.setItem("rvit-cookie-preference", "essential"));

  const response = await page.goto(`${baseUrl}${path}`, { waitUntil: "domcontentloaded", timeout: 30000 });
  await page.waitForTimeout(900);
  await page.evaluate(async () => {
    const pause = (time) => new Promise((resolve) => setTimeout(resolve, time));
    for (let y = 0; y < document.documentElement.scrollHeight; y += 540) {
      window.scrollTo(0, y);
      await pause(80);
    }
    window.scrollTo(0, 0);
    await pause(150);
  });

  const diagnostics = await page.evaluate(() => {
    const revealNodes = [...document.querySelectorAll("[data-reveal]")];
    const hiddenRevealNodes = revealNodes.filter((node) => {
      const style = getComputedStyle(node);
      return style.display === "none" || style.visibility === "hidden" || Number(style.opacity) < 0.1;
    });
    return {
      title: document.title,
      bodyHeight: document.documentElement.scrollHeight,
      bodyWidth: document.documentElement.scrollWidth,
      viewportWidth: window.innerWidth,
      horizontalOverflow: document.documentElement.scrollWidth > window.innerWidth + 1,
      mainTextLength: document.querySelector("main")?.innerText.trim().length ?? 0,
      revealCount: revealNodes.length,
      hiddenRevealCount: hiddenRevealNodes.length,
      videos: [...document.querySelectorAll("video")].map((video) => ({
        source: video.currentSrc.split("/").pop(),
        paused: video.paused,
        currentTime: Number(video.currentTime.toFixed(2)),
        readyState: video.readyState,
        display: getComputedStyle(video).display,
      })),
    };
  });

  await page.screenshot({
    path: fileURLToPath(new URL(`${name}.png`, outputDir)),
    fullPage: true,
  });
  report.pages.push({ name, path, status: response?.status(), errors, ...diagnostics });
  await page.close();
}

await browser.close();
await writeFile(new URL("report.json", outputDir), JSON.stringify(report, null, 2));
console.log(JSON.stringify(report, null, 2));
