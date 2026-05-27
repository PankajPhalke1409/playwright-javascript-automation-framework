import {test, expect} from "@playwright/test";

test("Mouse Hover", async ({page})=>{

    await page.goto("https://demo.nopcommerce.com/register");

    const computers = await page.locator("//ul[@class='top-menu notmobile']//a[normalize-space()='Computers']");
    const notebook = await page.locator("//ul[@class='top-menu notmobile']//a[normalize-space()='Notebooks']");

    //mouse hover
    await computers.hover();
    await notebook.hover();

    await page.waitForTimeout(5000);
})