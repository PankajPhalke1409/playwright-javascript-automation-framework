//const {test, expect} = require('@playwright/test');
import{ test, expect } from '@playwright/test';

test('locators', async ({page})=>{

    await page.goto("https://demoblaze.com/index.html");

    //click on login - using property(attribute) as a locator
    //await page.locator('id=login2').click();
    await page.click('id=login2');

    //provide username - using css
    //await page.locator('#loginusername').fill("pavanol");
    await page.fill('#loginusername','pavanol');
    //await page.type('#loginusername', 'pavanol');

    //provide password-using css
    await page.fill("input[id='loginpassword']", 'test@123');

    //click on login button using xpath
    await page.click("//button[normalize-space()='Log in']");

    //verify logout link presence - xpath
    const logoutlink = await page.locator("//a[normalize-space()='Log out']");

    await expect(logoutlink).toBeVisible();

    await page.close();

})



