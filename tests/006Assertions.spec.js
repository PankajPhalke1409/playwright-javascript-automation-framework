import {test, expect} from "@playwright/test";

test ("assertionstest", async ({page})=>{

    await page.goto("https://demo.nopcommerce.com/register");

    //1) await expect(page).toHaveURL()  -  Page has a URL
    await expect(page).toHaveURL("https://demo.nopcommerce.com/register");

    //2) await expect(page).toHaveTitle() - Page has a title
    await expect(page).toHaveTitle("nopCommerce demo store. Register");

    //3) await expect(locator).toBeVisible() - Element is visible
    const logoelement = await page.locator(".header-logo");
    await expect(logoelement).toBeVisible();

    //4) await expect(locator).toBeEnabled() - Element is enabled
    const SearchStoreBox = await page.locator("#small-searchterms");
    await expect(SearchStoreBox).toBeEnabled();

    //5) await expect(locator).toBeChecked() - Radio/Checkbox is checked
    //For Radio Button
    const MaleRadioButton = await page.locator("#gender-male");
    await MaleRadioButton.click();  //Select radio button
    await expect(MaleRadioButton).toBeChecked();

    //For checkbox
    const NewsletterCheckbox = await page.locator("#Newsletter");
    await expect(NewsletterCheckbox).toBeChecked();

    //6) await expect(locator).toHaveAttribute() - Element has a DOM attribute
    const RegButton = await page.locator("#register-button");
    await expect(RegButton).toHaveAttribute("type", "submit");

    //7) await expect(locator).toHaveText() - Element matches text
    const registerText = await page.locator(".page-title h1");
    await expect(registerText).toHaveText("Register");   //pass full text value

    //8) await expect(locator).toContainText() - Element contains text
    const registerText1 = await page.locator(".page-title h1");
    await expect(registerText1).toContainText("Reg");    //pass partial text value

    //9) await expect(locator).toHaveValue(value) - Input has a value
    const emailInputBox = await page.locator("#Email");
    await emailInputBox.fill("test@demo.com");
    await expect(emailInputBox).toHaveValue("test@demo.com");

    //10) await expect(locator).toHaveCount()	- List has exact number of children
})