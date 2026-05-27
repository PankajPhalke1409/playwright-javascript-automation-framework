import {test, expect} from "@playwright/test";

let page;

test.beforeAll(async ({browser})=>{
    page=await browser.newPage();

    await page.goto("https://demoblaze.com/index.html");
    //Login
    await page.locator("#login2").click();
    await page.locator("#loginusername").fill("pavanol");
    await page.locator("#loginpassword").fill("test@123");
    await page.locator("//button[normalize-space()='Log in']").click();
    await page.waitForTimeout(3000);
});

test.afterAll(async ()=>{
 //Logout
    await page.locator("#logout2").click();
});

test("Home Page Test", async ()=>{

    //Home page test - find total number of products display in home screen
    const products = await page.$$(".hrefch");
    expect(products).toHaveLength(9);

})

test("Add product to cart test", async ()=>{

    //Add product to cart test
    await page.locator("//a[normalize-space()='Samsung galaxy s6']").click();
    await page.locator("//a[normalize-space()='Add to cart']").click();
 
    page.on("dialog", async dialog=>{
        expect(dialog.message()).toContain("Product added.");
        await dialog.accept();
    })

})