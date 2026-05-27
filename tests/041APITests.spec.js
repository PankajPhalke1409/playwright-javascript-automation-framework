import{test, expect} from "@playwright/test";

var userid;

//GET Request
test("Get Users", async ({request})=>{

    const response = await request.get("https://reqres.in/api/users?page=2");
    console.log(await response.json()); //return response in json format
    expect(response.status()).toBe(200);
})

//POST Request-->Create User
test("Create User", async({request})=>{

    const response = await request.post("https://reqres.in/api/users",
                                        {
                                          headers:
                                         {
                                            "X-API-Key": "reqres-free-v1",
                                            "Accept":"application/json"
                                         },
                                         data:
                                          {
                                            "name":"Pankaj",
                                            "job": "trainer"
                                          }
                                         
                                        });
    console.log(await response.json());
    expect(response.status()).toBe(201);

    /*we are getting response, in that response id is received that id we need to other 
    request, for delete record or update record for that we stored respone in variable*/
    var res= await response.json();
    userid=res.id;
    
})

//PUT Request-->Update user
test("Update User", async({request})=>{

    const response = await request.put("https://reqres.in/api/users/"+userid,
                                        {
                                          headers:
                                         {
                                            "X-API-Key": "reqres-free-v1",
                                            "Accept":"application/json"
                                         },
                                         data:
                                          {
                                            "name":"Pankaj",
                                            "job": "Engineer"
                                          }
                                         
                                        });
    console.log(await response.json());
    expect(response.status()).toBe(200);

})

//DELETE Request-->Delete user
test("Delete User", async({request})=>{

    const response = await request.delete("https://reqres.in/api/users/"+userid,
                                        {
                                          headers:
                                         {
                                            "X-API-Key": "reqres-free-v1",
                                            "Accept":"application/json"
                                         }
                                        });
    expect(response.status()).toBe(204);
    })