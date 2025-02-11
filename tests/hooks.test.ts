import { test, expect}  from "@playwright/test"
import { log } from "console"
import * as allure from "allure-js-commons"

test.beforeAll("Test Before All", async()=>{

    console.log('Before ALL')
})

test.beforeEach("Test Before Each", async()=>{

    console.log('Before Each')
})

test.afterAll("Test After All",async()=>{
    console.log("After All")
})

test.afterEach("Test After Each", async()=>{

    console.log("After Each")
})

test("Fisrt Test",async()=>{

    console.log('This is first test block')


})

test("Second Test", async()=>{

    console.log('This is Second test block')
})