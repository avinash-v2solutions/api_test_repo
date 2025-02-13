import { test, expect } from "@playwright/test";
import fs from "fs";
import * as allure from "allure-js-commons"; 

const testDataPath = "testData/data.json";
const testData = JSON.parse(fs.readFileSync(testDataPath, "utf8"));

testData.forEach((user, index) => {
  test(`Login with Different user ${user.username} - Test ${index + 1}`, async ({ page }) => {
    await page.goto("https://www.saucedemo.com/")
    await page.fill("#user-name", user.username)
    await page.fill("#password", user.password)
    await page.click("#login-button")
  })
})