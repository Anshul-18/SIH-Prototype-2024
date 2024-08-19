const express = require('express');
const path = require('path');
const ejs = require('ejs');
const ejsMate = require("ejs-mate");

const app = express();
const port = 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', ejsMate); 

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));


// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get("/", (req, res) => {
    res.render("includes/home");
  });

app.get("/signup", (req, res) => {
    res.render("users/signup");
  });

app.get("/login", (req, res) => {
    res.render("users/login");
  });

app.get("/jobs", (req, res) => {
    res.render("jobs/listing");
});