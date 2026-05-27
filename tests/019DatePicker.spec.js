import {test, expect} from "@playwright/test";

test("Date Picker", async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    //await page.locator("#datepicker").fill("11/25/2026");
    //await page.fill('#txtDate', '25/12/2025');

    //DatePicker
    const year = "2026";
    const month = "April";
    const date = "20";

    await page.locator("#txtDate").click();   //open the calender\

    while(true)
    {
        const currentMonth = await page.locator(".ui-datepicker-month").textContent();
        const currentYear = await page.locator(".ui-datepicker-year").textContent(); 
        
        if(currentMonth == month && currentYear == year)
        {
            break;
        }

        await page.locator("//a[@title='Next']").click();
    
    }

    const dates = page.$$(".ui-state-default");

    //date selecting using loop
    /*or(const dt of dates)
    {
        if(await dt.textContent()==date)
        {
            await dt.click();
            break;
        }
    }*/

    //date selection without loop
    await page.locator(`.//a[@class='ui-state-default'][text()='${date}']`);
    
    await page.waitForTimeout(3000);
})