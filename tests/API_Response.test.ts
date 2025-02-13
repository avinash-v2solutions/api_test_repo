import { test, expect} from "@playwright/test"
import{ log } from "console"
import * as allure from "allure-js-commons"

test( 'Request / Response', async({request})=>{

   const response  = await request.get("https://api.github.com/")

    console.log(response.ok())
    console.log(response.headers())
    console.log(response.headersArray())
    console.log(response.statusText())

   console.log(response.body())
   console.log(response.status())
   console.log(await response.json())
})

test('Monitoring HTTP Tariff', async({page})=>{

    page.on('request', request=> console.log('>> ${request.method()} ${request.url()}'))

    page.on('response', response=> console.log('<< ${response.status()} ${response.url()}'))

    await page.goto('')


})