import { test , expect} from "@playwright/test"
import{ log } from "console"
import * as allure from "allure-js-commons"
import { Route, Request, Response } from 'playwright';
import { STATUS_CODES } from "http";

test("Find Broken Images", async({page})=>{

    //to Store broken Image url
    const brokenImages: string[] = [];

    // Intercept network responses for images
    page.on('response', async(response)=>{

        if(response.request().resourceType() == 'image'){

           const status= response.status()
        

        // Check the status code indicates a broke image
        if(status>=400){

            console.log('Broken Image :'+ response.url() +'returned status code :'+ status)
            brokenImages.push(response.url())
        }
    }
    })

    await page.goto("https://the-internet.herokuapp.com/broken_images")
    await page.waitForLoadState('networkidle')

    expect(brokenImages.length).toBe(2)
})