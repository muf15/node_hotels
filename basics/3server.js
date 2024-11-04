// Server- waiter
// Waiter resides in our pc (localhost) in a room no. (port no.)
// API - menu cards
// End point - food items listed in menu cards

const express = require("express");
const app = express(); // blueprint, instance of express.js module

// Methods to share data: GET, POST, PATCH, DELETE
// GET is used when we only want to read data from the server, not modifying or anything else
app.get("/", function (req, res) {
  //'/' is address
  // req-> request, res->response
  res.send("Welcome to hotel. We have list of menus");
  // if someone goes to '/' then waiter responds Welcome to my hotel
});

app.get("/chicken", (req, res) => {
  res.send("Sure sir I would love to serve chicken...");
});

app.get("/idli", (req, res) => {
  var customize_idli = {
    name: "rava idli",
    size: "large",
    is_sambar: true,
    is_chatni: false,
  };
  res.send(customize_idli);
});

app.listen(3000, () => {
  console.log("listening on port 3000");
}); // listen on port 3000 (room no.=>port no.)

// DataBase - chef
// DB ka bhi khudka server hota hai jo hamare server ki requests ko db se retrieve kar ke complete karta hai
// MongoDB query tutorial here

// POSTMAN API
// {
//     "name": "Alice",
//     "age": 28,
//     "work": "chef",
//     "mobile": "123-456-7890",
//     "email": "alice@example.com",
//     "address": "123 Main St, City",
//     "salary": 60000
// }

// {
//     "name": "Mango Smoothie",
//     "price": 4.99,
//     "taste": "sweet",
//     "is_drink": true,
//     "ingredients": [
//         "mango",
//         "yogurt",
//         "honey"
//     ],
//     "num_sales": 45
// }
app.post("/items", (req, res) => {
  res.send("Data saved!");
});

// Mongoose (odm library) vs mongodb native driver