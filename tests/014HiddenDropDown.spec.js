import {test, expect} from "@playwright/test";

test("HandleHiddenDropdown", async ({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    await page.locator("[name='username']").fill("Admin");
    await page.locator("[name='password']").fill("admin123");
    await page.locator("[type='submit']").click();

    await page.locator("//span[normalize-space()='PIM']").click();
    await page.locator("//div[6]//div[1]//div[2]//div[1]//div[1]//div[2]//i[1]").click();

    //waiting for options
    await page.waitForTimeout(3000);

    const options = await page.$$("//div[@role='listbox']//span");

    for(let option of options)
    {
        const JobTitle = await option.textContent();
        //console.log(JobTitle);
        if(JobTitle.includes("QA Engineer"))
        {
            await option.click();
            break;
        }
    }
    await page.waitForTimeout(5000);
})