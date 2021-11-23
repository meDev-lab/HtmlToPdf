const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  //   await page.setContent(contentHtml);
  await page.goto(`file://${__dirname}/index.html`, {
    //   waitUntil: "networkidle2",
  });
  await page.pdf({
    path: "hn.pdf",
    format: "a4",
    margin: { top: 30, left: 0, right: 0, bottom: 30 },
  });

  await browser.close();
})();
