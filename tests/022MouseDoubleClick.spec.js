import {test, expect} from "@playwright/test";

test("Mouse Double Click", async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    const copybutton = await page.locator("//button[normalize-space()='Copy Text']");

    //double click
    await copybutton.dblclick();

    //verify text
    const f2 = await page.locator("//input[@id='field2']");

    await expect(f2).toHaveValue("Hello World!");

    await page.waitForTimeout(5000);

})