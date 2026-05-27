import {test, expect} from "@playwright/test";

test("Drag and Drop", async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    const box1 = await page.locator("#draggable");
    const box2 = await page.locator("#droppable");

    //Approach 1
    /*await box1.hover();
    await page.mouse.down();

    await box2.hover();
    await page.mouse.up();
    */

    //Approach 2
    await box1.dragTo(box2);

    await page.waitForTimeout(5000);
})