import {test, expect} from "@playwright/test";

test("keyboard action", async ({page})=>{

    await page.goto("https://gotranscript.com/text-compare");

    //await page.locator("[name='text1']").fill("Welcome to automation");
    await page.type("[name='text1']","Welcome to automation");

    //Control+A --> Select the text
    await page.keyboard.press("Control+A");

    //Control+C --> Copy the text
    await page.keyboard.press("Control+C");

    //Tab
    await page.keyboard.down("Tab"); //press the key
    await page.keyboard.up("Tab");  //release the key

    //Control+V  --> Paste the text
    await page.keyboard.press("Control+V");

    await page.waitForTimeout(5000);
})