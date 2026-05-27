import {test, expect} from "@playwright/test";

test("Inputboxtest", async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    //Inputbox Name
    //check inputbox is visible
    await expect(page.locator("//input[@id='name']")).toBeVisible();

    //check inputbox is empty or not
    await expect(page.locator("//input[@id='name']")).toBeEmpty();

    //check inputbox is editable
    await expect(page.locator("//input[@id='name']")).toBeEditable();

    //check the inputbox is enabled
    await expect(page.locator("//input[@id='name']")).toBeEnabled();
    
    //pass the value into inputbox
    await page.locator("//input[@id='name']").fill("Pankaj");

    await page.waitForTimeout(5000);
})