import { test , expect} from "@playwright/test"
import{ log } from "console"
import * as allure from "allure-js-commons"
import { Route, Request, Response } from 'playwright';
import { STATUS_CODES } from "http";


test('find broken links on the page', async ({ page }) => {
  // Array to store broken links
  const brokenLinks: string[] = [];

  // Go to the page you want to test
  await page.goto('https://tutorialsninja.com/demo/');  // Replace with the URL of your choice

  // Get all anchor elements (<a>) and extract the href (URL) attribute
  const links = await page.$$eval('a', (anchors) =>
    anchors.map((anchor) => anchor.href)  // Return an array of hrefs (URLs)
  );

  // Check the status of each link
  for (const url of links) {
    
    // Catch network errors (like invalid URLs that fail to load)
    const response = await page.goto(url, { waitUntil: 'load' }).catch(() => null);

    // Check if the response is valid (status 200-299)
    if (response && response.status() >= 400) {
        console.log('Broken URL :'+ response.url() +'returned status code :'+ response.status())
      brokenLinks.push(url); // Store broken URL
    
  }

 //  Log the broken links
  if (brokenLinks.length > 0) {
    console.log('Broken Links:', brokenLinks);
  } else {
    console.log('No broken links found');
  }
}

  
});
