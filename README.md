# e-commerce
Shopbae is an Ecommerce website developed by Julio Sabandar

Links:
* Client : https://shopbaee.web.app
* Server : https://shopbaee.herokuapp.com

## RESTful endpoints

### GET /product
> Get product item by id

_Request Header_
```
{
  "Content-Type": "application/json; charset=utf-8",
}
```

_Request Body_
```
not needed
```

_Response (200)_
```
{
    "products": [
        {
            "id": 1,
            "name": "Apple iPhone 11",
            "image_url": "https://ibox.co.id/media/catalog/product/cache/3/image/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone11-ungu_3.png",
            "price": 1000,
            "stock": 994,
            "createdAt": "2020-04-18T10:13:24.576Z",
            "updatedAt": "2020-04-23T03:17:54.238Z"
        },
        {
            "id": 5,
            "name": "Apple Airpods Pro",
            "image_url": "https://www.jakartanotebook.com/images/products/42/1020/45691/3/apple-airpods-pro-earphone-wireless-replika-11-white-4.jpg",
            "price": 230,
            "stock": 500,
            "createdAt": "2020-04-23T03:17:46.296Z",
            "updatedAt": "2020-04-23T03:17:46.296Z"
        },
        {
            "id": 6,
            "name": "Tesla Model S",
            "image_url": "https://img.futurecar.com/201909/06/l_5d732fda444cc.jpeg",
            "price": 60000,
            "stock": 300,
            "createdAt": "2020-04-23T03:21:43.606Z",
            "updatedAt": "2020-04-23T03:21:43.606Z"
        },
        {
            "id": 7,
            "name": "Sony Dualshock 4",
            "image_url": "https://i5.walmartimages.com/asr/9eb2220d-e891-485d-8fc1-a0fd74448e8b_1.846c96e04338015d9a27909c76fe7a02.jpeg",
            "price": 60,
            "stock": 10000,
            "createdAt": "2020-04-23T03:25:24.507Z",
            "updatedAt": "2020-04-23T03:25:24.507Z"
        }
    ]
}
```

_Response (500 - Internal Server Error)_
```
{
    "message": "<returned error message>"
}
```

---


### GET /product/cart
> Get product item by id

_Request Header_
```
{
    "Content-Type": "application/json; charset=utf-8",
    "accessToken": "<access_token>"
}
```

_Request Body_
```
not needed
```

_Response (200)_
```
{
    "orders": [
        {
            "id": 3,
            "CustomerId": 1,
            "ProductId": 1,
            "amount": 2,
            "createdAt": "2020-04-23T02:55:51.745Z",
            "updatedAt": "2020-04-23T03:27:13.569Z",
            "Product": {
                "id": 1,
                "name": "Apple iPhone 11",
                "image_url": "https://ibox.co.id/media/catalog/product/cache/3/image/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone11-ungu_3.png",
                "price": 1000,
                "stock": 994,
                "createdAt": "2020-04-18T10:13:24.576Z",
                "updatedAt": "2020-04-23T03:17:54.238Z"
            }
        },
        {
            "id": 4,
            "CustomerId": 1,
            "ProductId": 5,
            "amount": 1,
            "createdAt": "2020-04-23T03:27:16.797Z",
            "updatedAt": "2020-04-23T03:27:16.797Z",
            "Product": {
                "id": 5,
                "name": "Apple Airpods Pro",
                "image_url": "https://www.jakartanotebook.com/images/products/42/1020/45691/3/apple-airpods-pro-earphone-wireless-replika-11-white-4.jpg",
                "price": 230,
                "stock": 500,
                "createdAt": "2020-04-23T03:17:46.296Z",
                "updatedAt": "2020-04-23T03:17:46.296Z"
            }
        },
        {
            "id": 5,
            "CustomerId": 1,
            "ProductId": 6,
            "amount": 1,
            "createdAt": "2020-04-23T03:27:19.166Z",
            "updatedAt": "2020-04-23T03:27:19.166Z",
            "Product": {
                "id": 6,
                "name": "Tesla Model S",
                "image_url": "https://img.futurecar.com/201909/06/l_5d732fda444cc.jpeg",
                "price": 60000,
                "stock": 300,
                "createdAt": "2020-04-23T03:21:43.606Z",
                "updatedAt": "2020-04-23T03:21:43.606Z"
            }
        },
        {
            "id": 6,
            "CustomerId": 1,
            "ProductId": 7,
            "amount": 1,
            "createdAt": "2020-04-23T03:27:21.231Z",
            "updatedAt": "2020-04-23T03:27:21.231Z",
            "Product": {
                "id": 7,
                "name": "Sony Dualshock 4",
                "image_url": "https://i5.walmartimages.com/asr/9eb2220d-e891-485d-8fc1-a0fd74448e8b_1.846c96e04338015d9a27909c76fe7a02.jpeg",
                "price": 60,
                "stock": 10000,
                "createdAt": "2020-04-23T03:25:24.507Z",
                "updatedAt": "2020-04-23T03:25:24.507Z"
            }
        }
    ]
}
```

_Response (404 - Not Found)_
```
{
    "message": "token not not found"
}
```

_Response (500 - Internal Server Error)_
```
{
    "message": "<returned error message>"
}
```

---


### POST /product/cart
> Add product item to database

_Request Header_
```
{
    "Content-Type": "application/json; charset=utf-8",
    "accessToken": "<access_token>"
}
```
_Request Body_
```
{
    "ProductId": "1",
}
```
_Response (200 - OK)_
```
{
    "order": [
        1,
        [
            {
                "id": 3,
                "CustomerId": 1,
                "ProductId": 1,
                "amount": 3,
                "createdAt": "2020-04-23T02:55:51.745Z",
                "updatedAt": "2020-04-23T04:03:39.566Z"
            }
        ]
    ]
}
```

_Response (404 - Not Found)_
```
{
    "message": "token not not found"
}
```

_Response (500 - Internal Server Error)_
```
{
    "message": "<returned error message>"
}
```

---


### DELETE /product/cart
> Remove all products from user's cart

_Request Header_
```
{
    "Content-Type": "application/json; charset=utf-8",
    "accessToken": "<access_token>"
}
```
_Request Body_
```
not needed
}
```
_Response (200 - OK)_
```
{
    "message": "Your cart is empty"
}
```

_Response (404 - Not Found)_
```
{
    "message": "token not not found"
}
```

_Response (500 - Internal Server Error)_
```
{
    "message": "<returned error message>"
}
```


---


### PUT /product/cart/:id
> Edit Order Quantity of item in cart by id

_Request Header_
```
{
    "Content-Type": "application/json; charset=utf-8",
    "accessToken": "<access_token>"
}
```
_Request Body_
```
{
    "amount": "4",
}
```
_Response (200 - OK)_
```
{
    "order": [
        1,
        [
            {
                "id": 11,
                "CustomerId": 1,
                "ProductId": 1,
                "amount": 4,
                "createdAt": "2020-04-23T04:19:36.064Z",
                "updatedAt": "2020-04-23T04:20:20.028Z"
            }
        ]
    ]
}
```

_Response (401)_
> Validation Error (Fields are empty)
```
{
    "message": "Invalid Input"
}
```

_Response (403)_
>User is not Authorized
```
{
    "message": "Access Forbidden"
}
```


_Response (404 - Not Found)_
```
{
    "message": "token not not found"
}
```

_Response (404 - Not Found)_
```
{
    "message": "Order Not Found"
}
```

_Response (408 - Not Found)_
>Input a negative amount
```
{
    "message": "Quantity cannot be less than 0"
}
```


_Response (500 - Internal Server Error)_
```
{
    "message": "<returned error message>"
}
```



---

### DELETE /product/cart/:id
> Remove all products from user's cart

_Request Header_
```
{
    "Content-Type": "application/json; charset=utf-8",
    "accessToken": "<access_token>"
}
```
_Request Body_
```
not needed
}
```
_Response (200 - OK)_
```
{
    "message": "Product Successfully Deleted"
}
```

_Response (403)_
>User is not Authorized
```
{
    "message": "Access Forbidden"
}
```


_Response (404 - Not Found)_
```
{
    "message": "token not not found"
}
```

_Response (404 - Not Found)_
```
{
    "message": "Order Not Found"
}
```


_Response (500 - Internal Server Error)_
```
{
    "message": "<returned error message>"
}
```

---

### POST /product/checkout
> Purchase all items in the user's cart

_Request Header_
```
{
    "Content-Type": "application/json; charset=utf-8",
    "accessToken": "<access_token>"
}
```

_Request Body_
```
not needed
```

_Response (200 - OK)_
```
{
    "message": "Checkout Success"
}
```

_Response (404 - Not Found)_
```
{
    "message": "token not not found"
}
```

_Response (405)_
>User's credits is not enough to make purchase after checkout
```
{
    "message": "You do not have enough credits"
}
```

_Response (500 - Internal Server Error)_
```
{
    "message": "<returned error message>"
}
```

---

### Post /register
> Login User to Website

_Request Header_
```
{
  "Content-Type": "application/json; charset=utf-8",
}
```

_Request Body_
```
{
   "email": "user@gmail.com",
   "username": "user",
   "password": "password",
}
```

_Response (201 - Created)_
```
{
    "user": {
        "id": 4,
        "email": "user@gmail.com",
        "username": "user",
        "password": "$2a$10$Qrxd6dNt0fCqkDYQ8P6Yge47ArKLHqSr8LIW2A6tOyVaYhuKpHKdS",
        "updatedAt": "2020-04-23T04:31:50.919Z",
        "createdAt": "2020-04-23T04:31:50.919Z",
        "credit": 1000000
    }
}
```

_Response (400)_
>user registers with empty fields
```
{
    "message": "Invalid Input"
}
```

_Response (401)_
>user registers with an email that is already registered in database
```
{
    "message": "Email is taken"
}
```


_Response (500 - Internal Server Error)_
```
{
  "message": "<returned error message>"
}
```

---

### Post /login
> Login User to Website

_Request Header_
```
{
  "Content-Type": "application/json; charset=utf-8",
}
```

_Request Body_
```
{
   "email": "user@gmail.com",
   "username": "user",
   "password": "password",
}
```

_Response (200 - OK)_
```
{
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQsImVtYWlsIjoidXNlckBnbWFpbC5jb20iLCJ1c2VybmFtZSI6InVzZXIiLCJpYXQiOjE1ODc2MTY1MTV9.ZmaukdF1KFYxLhY4lLFa7ctmtV2lk6If2nHh_h10Ers",
    "customer": {
        "id": 4,
        "email": "user@gmail.com",
        "password": "$2a$10$Qrxd6dNt0fCqkDYQ8P6Yge47ArKLHqSr8LIW2A6tOyVaYhuKpHKdS",
        "username": "user",
        "credit": 1000000,
        "createdAt": "2020-04-23T04:31:50.919Z",
        "updatedAt": "2020-04-23T04:31:50.919Z"
    }
}
```

_Response (400)_
>Validation Errors
```
{
    "message": "Incorrect Email/Password"
}
```

_Response (500 - Internal Server Error)_
```
{
  "message": "<returned error message>"
}
```

---

### GET /user
> Get data of the current user

_Request Header_
```
{
    "Content-Type": "application/json; charset=utf-8",
    "accessToken": "<access_token>"
}
```

_Request Body_
```
not needed
```

_Response (200)_
```
{
    "customer": {
        "id": 4,
        "email": "user@gmail.com",
        "password": "$2a$10$Qrxd6dNt0fCqkDYQ8P6Yge47ArKLHqSr8LIW2A6tOyVaYhuKpHKdS",
        "username": "user",
        "credit": 1000000,
        "createdAt": "2020-04-23T04:31:50.919Z",
        "updatedAt": "2020-04-23T04:31:50.919Z"
    }
}
```

_Response (404 - Not Found)_
```
{
    "message": "token not not found"
}
```



_Response (500 - Internal Server Error)_
```
{
    "message": "<returned error message>"
}
```

---


### POST /topUp
> Add the user's credit by top-up

_Request Header_
```
{
    "Content-Type": "application/json; charset=utf-8",
    "accessToken": "<access_token>"
}
```
_Request Body_
```
{
    "topUp": "30000",
}
```

_Response (200 - OK)_
```
{
    "message": "You have successfuly topped up your credits"
}
```

_Response (404 - Not Found)_
```
{
    "message": "token not not found"
}
```

_Response (408 - Not Found)_
>Input is a negative input, resulting in a negative balance
```
{
    "message": "Your credits cannot be less than 0"
}
```

_Response (500 - Internal Server Error)_
```
{
    "message": "<returned error message>"
}
```

---
