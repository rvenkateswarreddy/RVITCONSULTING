import { chromium } from "playwright-core";
import { mkdir } from "node:fs/promises";

const base = process.env.AUDIT_BASE_URL || "http://localhost:3100";
await mkdir("artifacts/genai-promotion", { recursive: true });
const browser = await chromium.launch({ executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe", headless: true });
try {
  const page = await browser.newPage();
  const errors = [];
  page.on("pageerror", error => errors.push(error.message));
  await page.addInitScript(() => localStorage.setItem("rvit-cookie-preference", "essential"));
  for (const width of [1440, 390, 320]) {
    await page.setViewportSize({ width, height: 1000 });
    for (const route of ["/", "/corporate-trainings"]) {
      await page.goto(base + route, { waitUntil: "networkidle", timeout: 120000 });
      const section = page.locator(route === "/" ? ".ai-training-banner" : "#generative-ai");
      await section.scrollIntoViewIfNeeded();
      if (await page.evaluate(() => document.documentElement.scrollWidth > innerWidth)) throw new Error(`Overflow: ${route} at ${width}`);
      if (route !== "/" && await section.locator("h2").count() !== 1) throw new Error("Missing campaign heading");
      if (route === "/" && await section.locator('a[href="/generative-ai-training"]').count() !== 1) throw new Error("Missing poster details link");
      await section.screenshot({ path: `artifacts/genai-promotion/${route === "/" ? "home" : "training"}-${width}.png` });
    }
  }
  await page.locator(".genai-primary").click();
  await page.waitForURL("**/generative-ai-training");
  for (const width of [1440, 390, 320]) {
    await page.setViewportSize({ width, height: 1000 });
    if (await page.evaluate(() => document.documentElement.scrollWidth > innerWidth)) throw new Error(`Training details overflow at ${width}`);
  }
  await page.locator('.ai-course-faq summary').first().click();
  if (!await page.locator('.ai-course-faq details').first().getAttribute('open').then(value => value !== null)) throw new Error('FAQ did not open');
  await page.locator('.ai-course-hero .ai-course-button').click();
  await page.waitForURL("**/contactus?service=generative-ai-training");
  await page.waitForFunction(() => document.querySelector('select[name="service"]')?.value === "Generative AI training");
  if (errors.length) throw new Error(errors.join("\n"));
  console.log("PASS: Homepage and training section at 1440, 390, and 320px; no horizontal overflow or runtime errors; training CTA preselects the correct enquiry service.");
} finally {
  await browser.close();
}
