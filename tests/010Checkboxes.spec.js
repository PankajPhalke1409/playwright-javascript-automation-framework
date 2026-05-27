import {test, expect} from "@playwright/test";

test("Handle CheckBoxes", async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    /*//single / specific checkbox
    await page.locator("//input[@id='sunday']").check();
    //verify sundaycheckbox is checked or not
    await expect(page.locator("//input[@id='sunday']")).toBeChecked();
    ///isChecked method returns true or false 
    // if it returns true then checked with actual value(means CHECKBOX is selected)
    expect(await page.locator("//input[@id='sunday']").isChecked()).toBeTruthy();
    //verify monday checkbox should not be selected
    expect(await page.locator("//input[@id='monday']").isChecked()).toBeFalsy();*/

    //Handle multiple checkboxes(check saturday,sunday and monday)
    const CheckboxesLocators = ["//input[@id='saturday']",
                        "//input[@id='sunday']",
                        "//input[@id='monday']"
                       ]

    for(const locator123 of CheckboxesLocators)
    {
        await page.locator(locator123).check();
    }
    
    await page.waitForTimeout(5000);

    //Uncheck selected checkboxes
    //first verify checkbox is selected or not,if it is selected then I want to uncheck checkbox
    for(const locator456 of CheckboxesLocators)
    {
        if(await page.locator(locator456).isChecked())
        {
            await page.locator(locator456).uncheck();
        }
    }

    await page.waitForTimeout(5000);

})