import{test, expect} from "@playwright/test";

test("HandleAutoSuggestDropDown", async ({page})=>{

    await page.goto("https://www.redbus.in/information/government-bus-booking");

    await page.locator("#txtSource").fill("pune");
    await page.waitForSelector("//li");

    const fromcityoption = await page.$$("//li");

    for(let option of fromcityoption)
    {
        const value = await option.textContent();
        console.log(value);
    }

     await page.waitForTimeout(5000);
})