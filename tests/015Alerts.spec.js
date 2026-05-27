import {test, expect} from "@playwright/test";

test("Alert with ok", async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    //Enabling Dialog window handler
    //Automatically will trigger whenever any alert get open
    page.on("dialog", async dialog=>{
        expect(dialog.type()).toContain("alert");  //returns what type of dialog it is
        expect(dialog.message()).toContain("I am an alert box!");
        await dialog.accept();
    })

    await page.locator("//button[@id='alertBtn']").click();
    await page.waitForTimeout(5000);
})

test("Confirmation dialog alert with ok and cancel", async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    //Dialog window handler
    page.on("dialog", async dialog=>{

        expect(dialog.type()).toContain("confirm");

        expect(dialog.message()).toContain("Press a button!");
        
        await dialog.accept();  //close by using OK button
        //await dialog.dismiss(); //close by using Cancel button
    })

    await page.locator("//button[@id='confirmBtn']").click();

    await expect(page.locator("//p[@id='demo']")).toHaveText("You pressed OK!");

    await page.waitForTimeout(5000);
})

test("Prompt Dialog", async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    //Enabling dialog window handler
    page.on("dialog", async dialog=>{

        expect(dialog.type()).toContain("prompt");

        expect(dialog.message()).toContain("Please enter your name:");

        expect(dialog.defaultValue()).toContain("Harry Potter");

        await dialog.accept("Pankaj");
    })

    await page.locator("//button[@id='promptBtn']").click();

    await expect(page.locator("//p[@id='demo']")).toHaveText("Hello Pankaj! How are you today?");

    await page.waitForTimeout(5000);
})