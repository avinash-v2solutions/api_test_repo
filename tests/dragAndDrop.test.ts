import { test , expect} from "@playwright/test"
import{ log } from "console"
import * as allure from "allure-js-commons"

test("Drag And Drop", async({page})=>{

    await page.goto("https://drag-and-drop-tricks.webflow.io/")
     const source = await page.locator("//p[text()='Javascript']")
     const target = await page.locator("//p[text()='Drop Answer']")

     await source.dragTo(target)

     await page.waitForLoadState('networkidle')

})