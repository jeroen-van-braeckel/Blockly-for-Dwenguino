import {afterAll, expect, jest, describe, beforeAll} from '@jest/globals'
import puppeteer from 'puppeteer'
import { startServer, endServer } from "../../../../util/start_server.js"
import { runDEToolboxRecording } from "../../actions/toolbox_clicks_de"
import { runNLToolboxRecording } from "../../actions/toolbox_clicks_nl.js"
import { runENToolboxRecording } from "../../actions/toolbox_clicks_en.js"
import { runESToolboxRecording } from "../../actions/toolbox_clicks_es.js"
import { runMYToolboxRecording } from "../../actions/toolbox_clicks_my.js"
import { runPLToolboxRecording } from "../../actions/toolbox_clicks_pl.js"

const timeout = 5000;

jest.setTimeout(1000000) // 60s

describe(
  '/ (Home Page)',
  () => {
    let page;
    let browser;
    beforeAll(async () => {
        await startServer();
        // Set a definite size for the page viewport so view is consistent across browsers
        //page = await globalThis.__BROWSER_GLOBAL__.newPage();
        browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox']});
        page = await browser.newPage();    
        page.on("dialog", (d) => { d.accept(); }); // Accept all dialogs the page displays    
    }, timeout);


    // TODO: rerecord this
    /*let runFRToolboxRecordingWithoutErrors = "All toolbox menus in French open without errors";
    it(runFRToolboxRecordingWithoutErrors, async () => {
      console.info(runFRToolboxRecordingWithoutErrors)
      let pageErrors = 0;
      // Register error message event handler to detect console errors
      page.on('pageerror', error => {
        pageErrors += 1;
        console.log(`ERROR IN REPLAY (${runFRToolboxRecordingWithoutErrors}):\n${error}`)
       });
      await runFRToolboxRecording(browser, page) // run the recording and wait until finished.
      expect(pageErrors).toBe(0); // Assert that there will not be any errors
    })*/


    let runENToolboxRecordingWithoutErrors = "All toolbox menus in English open without errors";
    it(runENToolboxRecordingWithoutErrors, async () => {
      console.info(runENToolboxRecordingWithoutErrors)
      let pageErrors = 0;
      // Register error message event handler to detect console errors
      page.on('pageerror', error => {
        pageErrors += 1;
        console.log(`ERROR IN REPLAY (${runENToolboxRecordingWithoutErrors}):\n${error}`)
       });
      await runENToolboxRecording(browser, page) // run the recording and wait until finished.
      expect(pageErrors).toBe(0); // Assert that there will not be any errors
    });

    let runDEToolboxRecordingWithoutErrors = "All toolbox menus in German open without errors";
    it(runDEToolboxRecordingWithoutErrors, async () => {
      console.info(runDEToolboxRecordingWithoutErrors)
      let pageErrors = 0;
      // Register error message event handler to detect console errors
      page.on('pageerror', error => {
        pageErrors += 1;
        console.log(`ERROR IN REPLAY (${runDEToolboxRecordingWithoutErrors}):\n${error}`)
       });
      await runDEToolboxRecording(browser, page) // run the recording and wait until finished.
      expect(pageErrors).toBe(0); // Assert that there will not be any errors
    });

    let runNLToolboxRecordingWithoutErrors = "All toolbox menus in Dutch open without errors";
    it(runNLToolboxRecordingWithoutErrors, async () => {
      console.info(runNLToolboxRecordingWithoutErrors)
      let pageErrors = 0;
      // Register error message event handler to detect console errors
      page.on('pageerror', error => {
        pageErrors += 1;
        console.log(`ERROR IN REPLAY (${runNLToolboxRecordingWithoutErrors}):\n${error}`)
       });
      await runNLToolboxRecording(browser, page) // run the recording and wait until finished.
      expect(pageErrors).toBe(0); // Assert that there will not be any errors
    });

    let runESToolboxRecordingWithoutErrors = "All toolbox menus in Spanish open without errors";
    it(runESToolboxRecordingWithoutErrors, async () => {
      console.info(runESToolboxRecordingWithoutErrors)
      let pageErrors = 0;
      // Register error message event handler to detect console errors
      page.on('pageerror', error => {
        pageErrors += 1;
        console.log(`ERROR IN REPLAY (${runESToolboxRecordingWithoutErrors}):\n${error}`)
       });
      await runESToolboxRecording(browser, page) // run the recording and wait until finished.
      expect(pageErrors).toBe(0); // Assert that there will not be any errors
    });

    /*
    let runITToolboxRecordingWithoutErrors = "All toolbox menus in Italian open without errors";
    it(runITToolboxRecordingWithoutErrors, async () => {
      console.info(runITToolboxRecordingWithoutErrors)
      let pageErrors = 0;
      // Register error message event handler to detect console errors
      page.on('pageerror', error => {
        pageErrors += 1;
        console.log(`ERROR IN REPLAY (${runITToolboxRecordingWithoutErrors}):\n${error}`)
       });
      await runITToolboxRecording(browser, page) // run the recording and wait until finished.
      expect(pageErrors).toBe(0); // Assert that there will not be any errors
    });*/

    let runMYToolboxRecordingWithoutErrors = "All toolbox menus in Malay open without errors";
    it(runMYToolboxRecordingWithoutErrors, async () => {
      console.info(runMYToolboxRecordingWithoutErrors)
      let pageErrors = 0;
      // Register error message event handler to detect console errors
      page.on('pageerror', error => {
        pageErrors += 1;
        console.log(`ERROR IN REPLAY (${runMYToolboxRecordingWithoutErrors}):\n${error}`)
       });
      await runMYToolboxRecording(browser, page) // run the recording and wait until finished.
      expect(pageErrors).toBe(0); // Assert that there will not be any errors
    });

    let runPLToolboxRecordingWithoutErrors = "All toolbox menus in Polish open without errors";
    it(runPLToolboxRecordingWithoutErrors, async () => {
      console.info(runPLToolboxRecordingWithoutErrors)
      let pageErrors = 0;
      // Register error message event handler to detect console errors
      page.on('pageerror', error => {
        pageErrors += 1;
        console.log(`ERROR IN REPLAY (${runPLToolboxRecordingWithoutErrors}):\n${error}`)
       });
      await runPLToolboxRecording(browser, page) // run the recording and wait until finished.
      expect(pageErrors).toBe(0); // Assert that there will not be any errors
    });

    
    // TODO: rerecord this
    /*
    let runELToolboxRecordingWithoutErrors = "All toolbox menus in Greek open without errors";
    it(runELToolboxRecordingWithoutErrors, async () => {
      let pageErrors = 0;
      console.info(runELToolboxRecordingWithoutErrors)
      // Register error message event handler to detect console errors
      page.on('pageerror', error => {
        pageErrors += 1;
        console.log(`ERROR IN REPLAY (${runELToolboxRecordingWithoutErrors}):\n${error}`)
       });
      await runELToolboxRecording(browser, page) // run the recording and wait until finished.
      expect(pageErrors).toBe(0); // Assert that there will not be any errors
    });*/

    /*let runARToolboxRecordingWithoutErrors = "All toolbox menus in Arabic open without errors";
    it(runARToolboxRecordingWithoutErrors, async () => {
      console.info(runARToolboxRecordingWithoutErrors)
      let pageErrors = 0;
      // Register error message event handler to detect console errors
      page.on('pageerror', error => {
        pageErrors += 1;
        console.log(`ERROR IN REPLAY (${runARToolboxRecordingWithoutErrors}):\n${error}`)
       });
      await runARToolboxRecording(browser, page) // run the recording and wait until finished.
      expect(pageErrors).toBe(0); // Assert that there will not be any errors
    });*/

    afterAll(async () => {
      browser.close()
      await endServer();
    })
  },
  timeout,
);