import {test, expect} from "@playwright/test";

test("Test1", async ({page})=>{

    await page.goto("https://demoblaze.com/index.html");
    await expect(page).toHaveTitle("STORE");
})

test("Test2", async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    await expect(page).toHaveTitle("Automation Testing Practice");
})

test("Test3", async ({page})=>{

    await page.goto("https://demo.nopcommerce.com/");
    await expect(page).toHaveTitle("nopCommerce demo store. Home page title");
})