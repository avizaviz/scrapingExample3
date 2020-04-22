// import { google } from 'googleapis'
const puppeteer = require('puppeteer');

const PUPPETEER_OPTIONS = {
  headless: true,
  args: [
  ],
};
exports.scrapingExample3 = async (req, res) => {
  const browser = await puppeteer.launch({ headless: true});
  const page = await browser.newPage();

  await page.goto('https://en.wikipedia.org/wiki/%22Hello,_World!%22_program');

  const firstPar = await page.$eval('#mw-content-text p', el => el.innerText);

  console.log(firstPar); // A "Hello, World!" program is a computer program that outputs ...

  await browser.close();
      res.status(200).send("Done");

}
