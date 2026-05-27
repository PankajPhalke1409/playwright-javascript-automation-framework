import {test, expect} from "@playwright/test";

/*test("Test1", async ({page, browserName})=>{

    if(browserName=="firefox")
    {
        test.skip();
    }

    console.log("This is Test1....");
})*/

/*test("Test2", async ({page})=>{

    test.fixme();

    console.log("This is Test2....");
})*/

/*test("Test3", async ({page})=>{

    test.fail(); //Expected

    console.log("This is Test3....");

    expect(1).toBe(2); //Actual(this assertion  fail)
})*/

/*test("Test4", async ({page,browserName})=>{

    console.log("This is Test4....");

    if(browserName=="firefox")
    {
         test.fail();
    }
    
})*/

test("Test5", async ({page})=>{

    //test.slow():

    test.setTimeout(5000);
    
    await page.goto("https://demoblaze.com/index.html");

    console.log("This is Test5...");
})