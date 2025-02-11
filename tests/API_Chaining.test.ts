import { test, expect} from "@playwright/test"
import { log } from "console"
import * as allure from "allure-js-commons"

test("API Chaining Test", async({request})=>{

    // Get All Posts
   const postResponse = await request.get("https://jsonplaceholder.typicode.com/posts")

   const postResponseBody = await postResponse.json()
   expect(postResponse.status()).toBe(200)
   console.log(await postResponseBody)


   const firstPost = await postResponseBody[0]
   //console.log(firstPost)

   const commentsResponse= await request.get("https://jsonplaceholder.typicode.com/posts/1/comments")
   expect(commentsResponse.status()).toBe(200)
   const commentsResponseBody =  await commentsResponse.json()

   expect(commentsResponseBody.length).toBeGreaterThanOrEqual(0)
   expect(commentsResponseBody[0].postId).toBe(firstPost.id)
   console.log(commentsResponseBody[0])



})