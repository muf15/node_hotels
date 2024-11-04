const express = require("express");
const app = express();
const db = require("./4db");

// jo bhi data aa raha hai body ke through hame nahi pata kis format me hai (form/ url/json etc...)
// bodyParser data ko uthayega aur object me convert karega aur request.body me store kar dega
const bodyParser = require("body-parser");
app.use(bodyParser.json()); // .json() ki jagah jis format me hoga data wo likhenge

const Person = require("./models/Person");
const MenuItem = require("./models/MenuItem");

app.get("/", function (req, res) {
  res.send("Welcome to hotel. We have list of menus");
});

app.post("/person", async (req, res) => {
  try {
    const data = req.body; // Assuming request body contains person data

    // Create a new Person document using Mongoose model
    const newPerson = new Person(data);

    // Save the new Person to the database
    const response = await newPerson.save(); // wait here till the task completes
    console.log("data saved");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// GET method to get the person
app.get("/person", async (req, res) => {
  try {
    const data = await Person.find();
    console.log("data fetched");
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// CRUD Operations vs HTTP requests
// Create       =>        POST
// Read         =>        GET
// Update       =>        PUT/PATCH
// Delete       =>        DELETE

app.post("/menu", async(req, res) =>{
    try {
        const data = req.body;
        const newMenuItem = new MenuItem(data);
        const response = await newMenuItem.save();
        console.log("data saved");
        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({error: "Internal Server Error"});
    }
})

app.get("/menu", async(req, res) => {
    try {
        const data = await MenuItem.find();
        console.log("data fetched");
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
})

app.listen(3000, () => {
  console.log("listening on port 3000");
});
