import { test, expect } from '@playwright/test';

let user = { 
  userName: "Peter Griffin 22",
  password: "FamilyGuy123!"
};

let uuid: string;
let token: string;

test.describe('API tests', () => {
  
  
  test('Post a user', async ({ request }) => {
    const response = await request.post('/Account/v1/User', {
      data: user
    });

    const responseBody = await response.json();;
    console.log(responseBody);
    uuid = responseBody.userID;
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(201);
    
  });


  
  test('Post a token for user', async ({ request }) => {
    const response = await request.post('/Account/v1/GenerateToken', {
      data: user
    });

    const responseBody = await response.json();
    //token = responseBody.token;
    //console.log(responseBody);
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    
  }); 

  test('User authorized', async ({ request }) => {
    const response = await request.post('/Account/v1/Authorized', {
      data: user
    });
    console.log(await response.json());
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
  });


  test('Get a user', async ({ request }) => {
    const response = await request.get('/Account/v1/User/' + uuid, {
      params: {
        userId: uuid
      },
    });

    console.log('/Account/v1/User/' + uuid);
    console.log(await response.json());
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
  });


  test('Delete a user', async ({ request }) => {
    const response = await request.delete('/Account/v1/User/' + uuid , {
      params: {
        userId: uuid
      },
    });
    console.log(await response.json());
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
  });








//
//  test('Get a book', async ({ request }) => {
//    let ISBN: string = '9781449325862';
//    const response = await request.get('/BookStore/v1/Book', {
//      params: {
//        ISBN: ISBN
//      },
//    });
//    console.log(await response.json());
//    expect(response.ok()).toBeTruthy();
//    expect(response.status()).toBe(200);
//  });
//
//  
//
//  test('Get a user', async ({ request }) => {
//    const response = await request.get('/Account/v1/User', {
//      params: {
//        userId: "5ebbae32-1147-403f-86bc-5f98861e10c1"
//      },
//    });
//    console.log(await response.json());
//    expect(response.ok()).toBeTruthy();
//    expect(response.status()).toBe(200);
//  });
//





});
