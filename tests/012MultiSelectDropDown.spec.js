import {test, expect} from "@playwright/test";

test("HandleMultiDropDown", async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    //select multiple options from multiselect dropdown
    //await page.selectOption("#colors", ["Blue", "Green", "Yellow"]);

    //Assertions
    //1.Check number of options in dropdown
    //const options = await page.locator("#colors option");
    //await expect(options).toHaveCount(7);

    //2.Check number of options in dropdown using JS Array
    //const options = await page.$$("#colors option");
    //console.log("Number of option:", options.length);  //length of an array
    //await expect(options.length).toBe(7);

    //check presence of value in dropdown
    //Use textContent method - returns the all options text and that texts store in one variable
    const content = await page.locator("#colors").textContent();
    //await expect(content.includes("Blue")).toBeTruthy();
    await expect(content.includes("Black")).toBeFalsy();

    await page.waitForTimeout(5000);
})