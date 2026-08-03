import { chromium } from "playwright-core";
import { mkdir, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const baseUrl = process.env.AUDIT_BASE_URL || "http://127.0.0.1:3100";
const outputDir = new URL("../artifacts/project-support-audit/", import.meta.url);
await mkdir(outputDir, { recursive: true });

const browser = await chromium.launch({
  executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
  headless: true,
});
const report = { baseUrl, pages: [] };

for (const mode of [
  { name: "desktop", viewport: { width: 1440, height: 1000 } },
  { name: "mobile", viewport: { width: 390, height: 844 } },
]) {
  const page = await browser.newPage({ viewport: mode.viewport, isMobile: mode.name === "mobile" });
  const errors = [];
  page.on("console", (message) => { if (message.type() === "error") errors.push(message.text()); });
  page.on("pageerror", (error) => errors.push(error.message));
  await page.addInitScript(() => localStorage.setItem("rvit-cookie-preference", "essential"));
  const response = await page.goto(`${baseUrl}/project-support`, { waitUntil: "networkidle" });
  await page.evaluate(async () => {
    const wait = (duration) => new Promise((resolve) => setTimeout(resolve, duration));
    for (let y = 0; y < document.documentElement.scrollHeight; y += 560) {
      window.scrollTo(0, y);
      await wait(60);
    }
    window.scrollTo(0, 0);
    await wait(1700);
  });
  const diagnostics = await page.evaluate(() => ({
    height: document.documentElement.scrollHeight,
    horizontalOverflow: document.documentElement.scrollWidth > window.innerWidth + 1,
    hiddenReveals: [...document.querySelectorAll("[data-reveal]")].filter((node) => Number(getComputedStyle(node).opacity) < .1).length,
    supportRows: document.querySelectorAll(".support-model-row").length,
  }));
  await page.screenshot({ path: fileURLToPath(new URL(`${mode.name}.png`, outputDir)), fullPage: true });
  report.pages.push({ mode: mode.name, status: response?.status(), errors, ...diagnostics });
  await page.close();
}

await writeFile(new URL("report.json", outputDir), JSON.stringify(report, null, 2));
console.log(JSON.stringify(report, null, 2));
await browser.close();
