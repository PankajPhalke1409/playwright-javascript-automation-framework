import {test, expect} from "@playwright/test";

test("Handleframes", async ({page})=>{

    await page.goto("https://ui.vision/demo/webtest/frames/");

    //find total number of frames
    const allframes = await page.frames();   //return all frames in array
    console.log("Number of frames:", allframes.length);

    //approach 1: frame name or url
    //const frame1 = await page.frame("name");
    const frame1 = await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_1.html"});
    await frame1.fill("input[name='mytext1']", "Hello");

    //approach 2: using frame locator
    /*const inputbox = await page.frameLocator("frame[src='frame_1.html']").locator("input[name='mytext1']");
    await inputbox.fill("Hello");*/

    await page.waitForTimeout(5000);

})