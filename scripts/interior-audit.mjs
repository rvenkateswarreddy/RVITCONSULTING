import { chromium } from "playwright-core";
const browser = await chromium.launch({ executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe", headless: true });
const report = [];
for (const width of [1440,390]) {
  for (const route of ["services","project-support","marketing","industries","corporate-trainings","careers","about","contactus","privacy-policy","terms-of-service","cookies"]) {
    const page = await browser.newPage({ viewport: { width, height: 900 } });
    const errors = [];
    page.on("pageerror", error => errors.push(error.message));
    await page.addInitScript(() => localStorage.setItem("rvit-cookie-preference","essential"));
    const response = await page.goto("http://localhost:3000/"+route,{ waitUntil:"networkidle" });
    await page.evaluate(async () => {
      for(let y=0; y<document.body.scrollHeight; y+=800) {
        window.scrollTo(0,y);
        await new Promise(r=>setTimeout(r,70));
      }
    });
    await page.waitForTimeout(250);
    const overflow = await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth);
    const broken = await page.locator("img").evaluateAll(imgs=>imgs.filter(i=>i.complete&&!i.naturalWidth).length);
    await page.evaluate(()=>window.scrollTo(0,0));
    await page.screenshot({path:`artifacts/interior-${route}-${width}.png`,fullPage:true});
    report.push({route,width,status:response.status(),overflow,broken,errors});
    await page.close();
  }
}
console.log(JSON.stringify(report,null,2));
await browser.close();
