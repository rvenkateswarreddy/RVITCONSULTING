import { chromium } from "playwright-core";

const browser = await chromium.launch({ executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe", headless: true });
const results = [];
for (const width of [1440, 768, 390]) {
  const page = await browser.newPage({ viewport: { width, height: 900 } });
  const errors = [];
  page.on("pageerror", error => errors.push(error.message));
  await page.addInitScript(() => localStorage.setItem("rvit-cookie-preference", "essential"));
  await page.goto("http://localhost:3000/", { waitUntil: "networkidle" });
  await page.getByRole("button", { name: "Cloud & data" }).click();
  const expanded = await page.getByRole("button", { name: "Cloud & data" }).getAttribute("aria-expanded");
  await page.getByRole("button", { name: "Digital engineering", exact: false }).click();
  for (let y = 0; y < await page.evaluate(() => document.body.scrollHeight); y += 650) {
    await page.evaluate(y => window.scrollTo(0, y), y);
    await page.waitForTimeout(100);
  }
  await page.waitForTimeout(600);
  const unloadedImages = await page.locator(".rv-home img").evaluateAll(imgs => imgs.filter(i => !i.complete || !i.naturalWidth).map(i => i.src));
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth > innerWidth);
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.screenshot({ path: `artifacts/remodel-${width}.png`, fullPage: true });
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.waitForTimeout(100);
  const reducedMotionPaused = await page.locator("video").evaluate(v => v.paused);
  results.push({ width, expanded, overflow, unloadedImages, reducedMotionPaused, errors });
  if (width === 390) {
    await page.getByRole("button", { name: "Open navigation" }).click();
    results.push({ mobileNavigation: await page.getByRole("button", { name: "Close navigation" }).getAttribute("aria-expanded") });
  }
  await page.close();
}
for (const route of ["/services", "/about", "/careers", "/contactus", "/marketing", "/industries", "/corporate-trainings", "/project-support"]) {
  const page = await browser.newPage();
  const response = await page.goto("http://localhost:3000" + route);
  results.push({ route, status: response.status() });
  await page.close();
}
console.log(JSON.stringify(results, null, 2));
await browser.close();
