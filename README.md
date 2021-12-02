# tech-interview-test-order-manager

## The goal
While developing functionalities for the warehouse or the operations department, we need to create lots of new Shopify orders just for the sake of testing. However, the shopify Admin UI requires a lot of information to create a test order resulting in a quite long process for always entering the same testing information.
The goal of this project is to build a simple app that allows you to:
- Create a Shopify order by just clicking on a button.
- Retrieve a list of all the test-orders you create.

## Specs
The app must have:

- Allow the user to create an Order in the Shopify store by only clicking on a button.
  - The order should be created with the following data:
    - Buyer info: 
      - Name of the client: Umamitest Client
      - last_name: "Testingson"
      - address1: "20 W 34th St"
      - phone: "777-777-7777"
      - city: "New York"
      - province: "New York"
      - country: "United States"
      - zip: "10001"
    - Product info:
      - Name: Vermicelli rice
      - variant_id: 41128163147931
    - Tagged as "test-order-interview1"


- Retrieve a list of all the *open orders* you have just created.
  - We should be able to see the following fields: `tags`, `id`, `created_at`, `fulfillment_status`

It would be *nice* to have:
- Show the JSON of the order returned by Shopify after the order creation, formatted.
- A test made with JEST or any other testing library for the order creation.

## Design
The design is free, but if you need some guidance, here's an example you can follow along.  Feel free to create a new one:

![image](https://user-images.githubusercontent.com/47493473/144288977-64fbb8b3-335c-4938-ab62-06bbb788ebaa.png)

## Stack 
Our preferred stack at Umamicart is ReactJs and NextJs. However, feel free to use the language in which you feel more comfortable.

## The result
- We expect a Git repo with the source code (this one).
- We need semantic and small commits along the process. Please, don’t make a single huge commit at the end.
- Deploy your app in a deployment platform such as Vercel or Netlify. Mind the env variables.


## An example
This is quick example of what our current app is working like, and more or less what we would expect out of this exercise.
![Test-Gif](https://user-images.githubusercontent.com/47493473/144290866-9a873f3d-b13b-444f-a7c2-dce967321960.gif)


## Hints
- In order to achieve this challenge, you need to interact with the [Shopify API](https://shopify.dev/api/admin-rest/2021-10/resources/order#[post]/admin/api/2021-10/orders.json). However you don't need to access the Shopify Admin.
- To tackle this task, you can go with a Basic HTTP authentication (check the Shopify DOCs). We'll provide you with the API key.
- Whenever you create an order, Shopify answers with the full order or a descriptive error.

