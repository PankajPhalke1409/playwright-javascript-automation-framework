//Whenever we us beforeEch, afterEach, beforeAll and afterAll that will not accept page fixture directly.
//But if you want to create a page instance we have to first get the browser fixture and from that browser we have to create new page.
//Before using Hooks we need to do certain configurations
//By default parallel mode is enabled, so we need to disable that. fullyParallel: false,

import {test, expect} from "@playwright/test";

let page;

test.beforeEach(async ({browser})=>{
    page=await browser.newPage();

    await page.goto("https://demoblaze.com/index.html");
    //Login
    await page.locator("#login2").click();
    await page.locator("#loginusername").fill("pavanol");
    await page.locator("#loginpassword").fill("test@123");
    await page.locator("//button[normalize-space()='Log in']").click();
    await page.waitForTimeout(3000);
});

//No need to pass browser fixture again, we have already created page instance
test.afterEach(async ()=>{
 //Logout
    await page.locator("#logout2").click();
});

//we have already created to page, we have to use same page in every test.
//no need to create page fixture in every test
//Otherwise it will created multiple instances of page
test("Home Page Test", async ()=>{

    //Home page test - find total number of products display in home screen
    //$$ used - returns multiple products of an array
    const products = await page.$$(".hrefch");
    expect(products).toHaveLength(9);

})

test("Add product to cart test", async ()=>{

    //Add product to cart test
    await page.locator("//a[normalize-space()='Samsung galaxy s6']").click();
    await page.locator("//a[normalize-space()='Add to cart']").click();
    //handle dialog box
    page.on("dialog", async dialog=>{
        expect(dialog.message()).toContain("Product added.");
        await dialog.accept();
    })

})