import {test,expect} from "@playwright/test";

test("Handle Radio Button", async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    //Handle male radio button
    //check male radio button
    await page.locator("//input[@id='male']").check();

    //verify male radio button is checked or not-assertion
    expect(await page.locator("//input[@id='male']")).toBeChecked();

    //isChecked method returns true or false 
    // if it returns true then checked with actual value(means radio button is selected)
    expect(await page.locator("//input[@id='male']").isChecked()).toBeTruthy();

    //verify female radio button should not be selected 
    expect(await page.locator("//input[@id='female']").isChecked()).toBeFalsy();

    await page.waitForTimeout(5000);

})