import {test, expect} from "@playwright/test";

test("Page Screenshot", async ({page})=>{

    //Page Screenshot-> Capture screenshot whichever display on screen
    await page.goto("https://www.opencart.com/");

    //Bydefault it save in PLAYWRIGHTS folder
    await page.screenshot({path:"HomePage.png"});

    //Specific path
    await page.screenshot({path:"tests/Screenshots/"+"HomePage.png"});

    //But every time run the test HomePage.png is replace, because same name
    //If you want to save screenshot for every time then use timestramp ->Date.now() function
    await page.screenshot({path:"tests/Screenshots/"+Date.now()+"HomePage.png"});
})

test("Full Page Screenshot", async ({page})=>{

    await page.goto("https://www.opencart.com/");

    await page.screenshot({path:"tests/Screenshots/"+Date.now()+"FullHomePage.png",fullPage:true});
})

//If you want to screenshot for particular element or specific area
test.only("Element Screenshot", async ({page})=>{

    await page.goto("https://www.opencart.com/index.php?route=cms/feature");

    await page.locator("//img[@title='Options, attributes']").screenshot({path:"tests/Screenshots/"+Date.now()+"MacBook.png"});
})