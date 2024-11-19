import { test, expect } from '@playwright/test';



test.use({ storageState: "./tests/.auth/user-auth.json" });
test.describe("Tests of the 'Book Store Application - Book Store API'", () => {
  
  test('GET books', async ({ request }) => {
    const getBooksResponse = await request.get("/Bookstore/v1/Books");
    await expect(getBooksResponse).toBeOK();
    console.log(getBooksResponse.body());
  });

  test('POST a user', async ({ request }) => {
    const postUserResponse = await request.post("/Account/v1/User", 
      {data: {
          "userName": "string3",
          "password": "Password123#"
        }
      })
    await expect(postUserResponse).toBeOK();
    // TODO : assertion 
  });
    

  test('POST a book', async ({ request }) => {
    const postBookResponse = await request.post("/Bookstore/v1/Books", 
      {data: {
        "userId": "string",
        "collectionOfIsbns": [
          {
            "isbn": "string"
          }
        ]}
      })
    await expect(postBookResponse).toBeOK();
    expect(await postBookResponse.json()).toEqual(
      expect.objectContaining(
        {
          "userId": "string",
          "collectionOfIsbns": [
            {
              "isbn": "string"
            }]
        }
      )
    );
  });

  test('DELETE a user', async ({ request }) => {

    
  });



});
