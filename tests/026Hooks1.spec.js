import {test, expect} from "@playwright/test"

test("Home Page Test", async ({page})=>{

    await page.goto("https://demoblaze.com/index.html");

    //Login
    await page.locator("#login2").click();
    await page.locator("#loginusername").fill("pavanol");
    await page.locator("#loginpassword").fill("test@123");
    await page.locator("//button[normalize-space()='Log in']").click();

    //Home page test - find total number of products display in home screen
    //$$ used - returns multiple products of an array
    const products = await page.$$(".hrefch");
    expect(products).toHaveLength(9);

    //Logout
    await page.locator("#logout2").click();

})

test("Add product to cart test", async ({page})=>{

    await page.goto("https://demoblaze.com/index.html");

    //Login
    await page.locator("#login2").click();
    await page.locator("#loginusername").fill("pavanol");
    await page.locator("#loginpassword").fill("test@123");
    await page.locator("//button[normalize-space()='Log in']").click();

    //Add product to cart test
    await page.locator("//a[normalize-space()='Samsung galaxy s6']").click();
    await page.locator("//a[normalize-space()='Add to cart']").click();
    //handle dialog box
    page.on("dialog", async dialog=>{
        expect(dialog.message()).toContain("Product added.");
        await dialog.accept();
    })

    //Logout
    await page.locator("#logout2").click();
})