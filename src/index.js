const puppeteer = require("puppeteer");
const cliProgress = require('cli-progress');
require('dotenv').config()

const {
  MAIN_URL,
  BASEURL,
  EMAILGOOGLE,
  PASSGOOGLE,
  SPREADSHEET_ID,
  CLIENT_EMAIL,
  PRIVATE_KEY,
} = process.env;

const datetimeUrl = require('../utils/datatime');
const jsonSave = require("../utils/json");
const report = require("../utils/report");
const googleLogin = require("../utils/gmail");
const saveDataSheet = require("../utils/sheet");

const WAIT_TIME = 3000;
const NUMBER_OF_DAYS = 2;

const createProgressBar = () => {
  const bar = new cliProgress.SingleBar(
    {},
    cliProgress.Presets.shades_classic
  );
  return bar;
};

const updateProgressBar = (bar, currentDay) => {
  bar.increment(1);
  bar.update(currentDay);
};

const generateReport = async () => {
  try {
    const browser = await puppeteer.launch({
      headless: false,
      defaultViewport: null,
      timeout: 0,
    });
    const page = await browser.newPage();

    await page.goto(MAIN_URL);

    await googleLogin(page, EMAILGOOGLE, PASSGOOGLE);

    await page.waitForTimeout(WAIT_TIME);

    let reportData = [];

    const currentDate = new Date();
    let date = currentDate;

    let currentDay = 0;

    const progressBar = createProgressBar();

    progressBar.start(NUMBER_OF_DAYS, currentDay);

    while (currentDay < NUMBER_OF_DAYS) {
      currentDay++;
      await page.waitForTimeout(WAIT_TIME);
      
      const dashboardUrl = await datetimeUrl(date.getDate() - 1, date, BASEURL, "PC");
      await page.goto(dashboardUrl);

      const data = [...(await report(page, date))];
      reportData.push(data[0]);
      date.setDate(date.getDate() - 1);

      updateProgressBar(progressBar, currentDay);
    }

    jsonSave(reportData, `${currentDate.toISOString().split(`T`)[0]}`);

    await saveDataSheet(reportData, SPREADSHEET_ID, CLIENT_EMAIL, PRIVATE_KEY);

    await browser.close();
    process.exit(1);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

generateReport();
