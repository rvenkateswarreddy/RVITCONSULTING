import { chromium } from "playwright-core";
import { mkdir, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const baseUrl = process.env.AUDIT_BASE_URL || "http://127.0.0.1:3100";
const outputDir = new URL("../artifacts/careers-accordion-audit/", import.meta.url);

await mkdir(outputDir, { recursive: true });
const browser = await chromium.launch({
  executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
  headless: true,
});
const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
await page.addInitScript(() => localStorage.setItem("rvit-cookie-preference", "essential"));
await page.goto(`${baseUrl}/careers`, { waitUntil: "networkidle" });

const section = page.locator("#open-roles");
const boards = page.locator("details.role-board");
const summaries = page.locator("details.role-board > summary");
const summaryCount = await summaries.count();

if (summaryCount < 2) throw new Error("Expected at least two career role groups");

const measure = () => boards.evaluateAll((nodes) => nodes.map((node) => ({
  title: node.querySelector("h3")?.textContent?.trim(),
  open: node.open,
  height: Math.round(node.getBoundingClientRect().height),
})));

await section.screenshot({ path: fileURLToPath(new URL("first-group-open.png", outputDir)) });
const before = await measure();

await summaries.nth(1).click();
await page.waitForTimeout(250);
await section.screenshot({ path: fileURLToPath(new URL("second-group-open.png", outputDir)) });
const after = await measure();

const report = { baseUrl, summaryCount, before, after };
await writeFile(new URL("report.json", outputDir), JSON.stringify(report, null, 2));
console.log(JSON.stringify(report, null, 2));
await browser.close();
