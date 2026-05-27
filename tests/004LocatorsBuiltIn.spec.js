//const {test, expect} = require('@playwright/test');
import{ test, expect } from '@playwright/test';

test('BuiltInLocators', async({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    //page.getByAltText() to locate an element, usually image, by its text alternative.
    const logo = await page.getByAltText("company-branding");
    //verify this logo present or not- use assertion
    await expect(logo).toBeVisible();

    //page.getByPlaceholder() to locate an input by placeholder.
    await page.getByPlaceholder("Username").fill("Admin");
    await page.getByPlaceholder("Password").fill("admin123");

    //page.getByRole() to locate by explicit and implicit accessibility attributes.
    await page.getByRole("button", { type: "submit"}).click();

    //page.getByText() to locate by text content.
    //After login we capture text of account name display and verify text is visible or not
    //Pass actual text and check it is visible or not
    //await expect(await page.getByText("RAKSHA Prohaska")).toBeVisible();

    const name = await page.locator("//p[@class='oxd-userdropdown-name']").textContent();
    await expect(await page.getByText(name)).toBeVisible();

})