//Reference - https://playwright.dev/docs/input#upload-files
import {test, expect} from "@playwright/test";

test("Upload single file", async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    await page.waitForSelector("//input[@id='singleFileInput']");
    await page.locator("//input[@id='singleFileInput']").setInputFiles("tests/UploadFiles/Resume_Pankaj.pdf");

    await page.waitForTimeout(5000);

})

//test.only-->only that test will be executing other testes are ignored
test.only("Upload multiple files", async ({page})=>{

    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php");

    //use array to attach multiple files
    await page.locator("#filesToUpload").setInputFiles(["tests/UploadFiles/Project.pdf",
                                                        "tests/UploadFiles/Resume.pdf"]);

    await page.waitForTimeout(3000);

    expect(await page.locator("#fileList li:nth-child(1)")).toHaveText("Project.pdf");
    expect(await page.locator("#fileList li:nth-child(2)")).toHaveText("Resume.pdf");

    await page.waitForTimeout(3000);

    //removing attached files- pass the empty array
    await page.locator("#filesToUpload").setInputFiles([]);

    //after removing verify the message
    expect(await page.locator("#fileList li:nth-child(1)")).toHaveText("No Files Selected");

    await page.waitForTimeout(3000);

})