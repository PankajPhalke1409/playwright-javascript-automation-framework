import {test, expect} from "@playwright/test";

test.beforeAll(async ()=>{

    console.log("This is BeforeAll Hook");
})

test.afterAll(async ()=>{

    console.log("This is AfterAll Hook");
})

test.beforeEach(async ()=>{

    console.log("This is BeforeEach Hook");
})

test.afterEach(async () => {

    console.log("This is AfterEach Hook");
})

test.describe.skip("Group1", ()=>{

    test("Test1", async ({page})=>{

    console.log("This is Test1......");
})

test("Test2", async ({page})=>{

    console.log("This is Test2......");
})
})

test.describe("Group2", ()=>{

    test("Test3", async ({page})=>{

    console.log("This is Test3......");
})

test("Test4", async ({page})=>{

    console.log("This is Test4......");
})
})
