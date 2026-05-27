//Using screenshot on in config file

import{test, expect} from "@playwright/test";

test("ScreenShot ON in Config", async ({page})=>{

    await page.goto("https://demoblaze.com/index.html");
    //Login
    await page.locator("#login2").click();
    await page.locator("#loginusername").fill("pavanol");
    await page.locator("#loginpassword").fill("test@123");
    await page.locator("//button[normalize-space()='Log in']").click();
})