import{ test, expect} from "@playwright/test"
import { log } from "console"
import * as allure from "allure-js-commons"

import { Browser } from 'playwright';

let browser: Browser;

export default async function globalTeardown() {
  console.log('Global teardown: Browser will remain open.');
  // Do not close the browser to keep it open
};

test(" Mocking an API", async({page})=>{

    //mocking an api

    await page.route('https://demo.playwright.dev/api-mocking/api/v1/fruits', async route =>{

        const json = [{name : "Testing"}, {id:45}]
        await route.fulfill({json})
    })

    await page.goto("https://demo.playwright.dev/api-mocking/")
    await expect(page.getByText('Testing')).toBeVisible()

    
})