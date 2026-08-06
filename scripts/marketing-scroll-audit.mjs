import { chromium } from "playwright-core";
import { mkdir, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const baseUrl = process.env.AUDIT_BASE_URL || "http://127.0.0.1:3100";
const outputDir = new URL("../artifacts/marketing-scroll-audit/", import.meta.url);
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
  const response = await page.goto(`${baseUrl}/marketing`, { waitUntil: "networkidle" });
  await page.waitForTimeout(900);
  await page.screenshot({ path: fileURLToPath(new URL(`${mode.name}-hero.png`, outputDir)), fullPage: false });

  let mobileMenuMarketingVisible = null;
  if (mode.name === "mobile") {
    const menuButton = page.locator('[data-testid="menu-toggle"]');
    if (await menuButton.count() !== 1) throw new Error("Mobile menu button missing");
    await menuButton.click();
    await page.waitForTimeout(250);
    mobileMenuMarketingVisible = await page.locator('#mobile-navigation a[href="/marketing"]').isVisible();
    await page.screenshot({ path: fileURLToPath(new URL("mobile-menu.png", outputDir)), fullPage: false });
    await menuButton.click();
    await page.waitForTimeout(180);
  }

  const stage = await page.locator(".marketing-scroll-stage").evaluate((node) => ({
    top: node.getBoundingClientRect().top + window.scrollY,
    height: node.getBoundingClientRect().height,
  }));

  for (const [label, ratio] of [["start", .08], ["middle", .46], ["end", .78]]) {
    await page.evaluate(({ top, height, ratio }) => window.scrollTo(0, top + height * ratio), { ...stage, ratio });
    await page.waitForTimeout(350);
    await page.screenshot({ path: fileURLToPath(new URL(`${mode.name}-${label}.png`, outputDir)), fullPage: false });
  }

  const diagnostics = await page.evaluate(() => {
    const media = document.querySelector(".marketing-scroll-media");
    const video = document.querySelector(".marketing-hero video");
    return {
      height: document.documentElement.scrollHeight,
      horizontalOverflow: document.documentElement.scrollWidth > window.innerWidth + 1,
      storyPanels: document.querySelectorAll(".marketing-story-panel").length,
      marketingNavLinks: document.querySelectorAll('a[href="/marketing"]').length,
      stickyMediaPosition: media ? getComputedStyle(media).position : null,
      video: video ? { paused: video.paused, readyState: video.readyState, currentTime: Number(video.currentTime.toFixed(2)) } : null,
    };
  });

  report.pages.push({ mode: mode.name, status: response?.status(), errors, mobileMenuMarketingVisible, ...diagnostics });
  await page.close();
}

await writeFile(new URL("report.json", outputDir), JSON.stringify(report, null, 2));
console.log(JSON.stringify(report, null, 2));
await browser.close();
