import {test, expect} from "@playwright/test";

test("Test1@Sanity", async ({page})=>{

    console.log("This is my Test1....");
})

test("Test2@Sanity", async ({page})=>{

    console.log("This is my Test2....");
})

test("Test3@Reg", async ({page})=>{

    console.log("This is my Test3....");
})

test("Test4@Reg", async ({page})=>{

    console.log("This is my Test4....");
})

test("Test5@Sanity@Reg", async ({page})=>{

    console.log("This is my Test5....");
})