import { mkdir, writeFile } from "fs/promises"
import os from "os"
import path from "path"
import puppeteer from "puppeteer"

const DIR = path.join(os.tmpdir(), 'jest_puppeteer_global_setup')

let setup = async () => {
    const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox']});
    // store the browser instance so we can teardown it later
    // this global is only available in the teardown but not in TestEnvironments
    globalThis.__BROWSER_GLOBAL__ = browser;

    await mkdir(DIR, {recursive: true});
    await writeFile(path.join(DIR, 'wsEndpoint'), browser.wsEndpoint());
}

export default setup;