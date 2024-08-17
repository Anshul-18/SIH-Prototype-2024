const express = require('express');
const path = require('path');
const ejs = require('ejs');

const app = express();
const port = 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Define the root route
app.get('/', (req, res) => {
  res.send("Hi, I'm Root");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
