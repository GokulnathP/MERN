// Express package used to configure server with route
const express = require("express");

// It used to decode the input from request
const bodyParser = require("body-parser");

// The core file contain all route configuration
const routes = require("./routes/routes");

// Create app from the express package
const app = express();

// Register a body parser
app.use(bodyParser.json());

// Register views folder as public to everyone
app.use(express.static("views"));

// Connect routes with app
app.use("/", routes);

// Export the app for start server
module.exports = app;