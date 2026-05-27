import {test, expect, chromium} from "@playwright/test";
import { createContext } from "vm";

test("Handling windows", async ()=>{

    //create a page first we need to lounch the browser
    const browser = await chromium.launch();

    //inside browser --> create context
    const context = await browser.newContext();

    //inside the context we can create the multiple pages
    const page1 = await context.newPage();
    const page2 = await context.newPage();

    //context.pages() returns the all pages present in context
    const allPages = context.pages();
    console.log("Number of pages:", allPages.length);

    //page 1 and page 2 launch 2 diffrent applications
    await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await expect(page1).toHaveTitle("OrangeHRM");
    await page1.waitForTimeout(5000);

    await page2.goto("https://www.orangehrm.com/");
    await expect(page2).toHaveTitle("Human Resources Management Software | HRMS | OrangeHRM");
    await page2.waitForTimeout(5000);

})

test.only("Handle multiple pages", async ()=>{

    const browser = await chromium.launch();

    const context = await browser.newContext();

    const page1 = await context.newPage();
    await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await expect(page1).toHaveTitle("OrangeHRM");

    const pagePromise = context.waitForEvent("page");  //this will open the new page with empty tab
    await page1.locator("//a[normalize-space()='OrangeHRM, Inc']").click();   //that link open in the empty tab

    const newPage = await pagePromise;
    await expect(newPage).toHaveTitle("Human Resources Management Software | HRMS | OrangeHRM");

    await page1.waitForTimeout(3000);
    await newPage.waitForTimeout(3000);

    await browser.close();
})