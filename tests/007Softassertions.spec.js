import {test, expect} from "@playwright/test";

test("softassertiontest", async ({page})=>{

    await page.goto("https://demoblaze.com/index.html");

    /*//Hard Assetions
    await expect(page).toHaveTitle("STORE123");
    await expect(page).toHaveURL("https://demoblaze.com/index.html");
    await expect(page.locator(".navbar-brand")).toBeVisible(); */

    //Soft Assetions
    await expect.soft(page).toHaveTitle("STORE123");
    await expect.soft(page).toHaveURL("https://demoblaze.com/index.html");
    await expect.soft(page.locator(".navbar-brand")).toBeVisible();

})