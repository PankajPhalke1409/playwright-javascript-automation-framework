import {test, expect} from "@playwright/test";

test("Handle DropDowns", async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    //Multiple ways to select dropdow
    //1.By using label
    //await page.locator("#country").selectOption({label:"India"});
    //2.Directly pass visible text
    //await page.locator("#country").selectOption("India");
    //3.By passing value
    //await page.locator("#country").selectOption({value:"uk"});
    //4.By using index
    //await page.locator("#country").selectOption({index: 1});
    //5.selectOption directly - using visibletext
    //await page.selectOption("#country", "India");

    //Assertion
    //1.1 check number of options in dropdown - Approach1
    //capture all the options in dropdown into variable
    //const options = await page.locator("#country option");
    //await expect(options).toHaveCount(10);

    //1.2 check number of options in dropdown - Approach2
    //use $$-->returns elements in array format
    //const options = await page.$$("#country option");
    //console.log("Number of options:", options.length);
    //await expect(options.length).toBe(10);

    //2.1 check presence of value in the dropdown - Approach1
    //const content = await page.locator("#country").textContent();
    //await expect(content.includes("India")).toBeTruthy();

    /*//2.2 check presence of value in the dropdown - Approach2 - using looping
    const options = await page.$$("#country option");
    
    let status = false;
    for(const option of options)
    {
        //console.log(await option.textContent());
        const value = await option.textContent();
        if(value.includes("India"))
        {
            status=true;
            break;
        }
    }
    expect(status).toBeTruthy();*/

    //3.Select option from dropdown using loop
    const options = await page.$$("#country option");
    for(const option of options)
    {
        const value = await option.textContent();
        if(value.includes("France"))
        {
            await page.selectOption("#country", value);
            break;
        }
    }

    await page.waitForTimeout(5000);

})