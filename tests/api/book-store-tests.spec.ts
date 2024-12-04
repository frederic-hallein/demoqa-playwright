import { test, expect } from "@playwright/test";

import { user } from "../../data/user-credentials.json";

function randomNumber(min: number, max: number) { return Math.floor(Math.random() * (max - min) + min); }

test.use({ storageState: "./tests/.auth/user-auth.json" });
test.describe("Tests of the 'Book Store Application - Book Store API'", () => {
  test("POST Authorized User - Post a user with authorization", async ({ request }) => {
    // POST user
    const userNumber = randomNumber(1, 10000);
    const postUserResponse = await request.post("/Account/v1/User", {
      data: {
        userName: user.userName + userNumber,
        password: user.password
      }
    });
    const postUserResponseJSON = await postUserResponse.json(); 
    await expect(postUserResponse).toBeOK();

    // Generate token for authorization
    const postTokenResponse = await request.post("/Account/v1/GenerateToken", {
      data: {
        userName: user.userName + userNumber,
        password: user.password
      }
    });
    const postTokenResponseJSON = await postTokenResponse.json(); 
    await expect(postTokenResponse).toBeOK();

    // Check if authorized
    const postAuthorizationResponse = await request.post("/Account/v1/Authorized", {
      data: {
        userName: user.userName + userNumber,
        password: user.password
      }
    });
    const postAuthorizationResponseJSON = await postAuthorizationResponse.json(); 
    await expect(postAuthorizationResponse).toBeOK();
  });

  test("GET Book(s) - Get all and a single book", async ({ request }) => {
    // GET all books
    const getBooksResponse = await request.get("/Bookstore/v1/Books");
    const getBooksResponseJSON = await getBooksResponse.json();
    await expect(getBooksResponse).toBeOK();

    // GET first book
    const ISBN = await getBooksResponseJSON.books[0].isbn
    const getBookResponse = await request.get(`/Bookstore/v1/Book?ISBN=${ISBN}`);
    const getBookResponseJSON = await getBookResponse.json();
    await expect(getBookResponse).toBeOK();
  });



});
 