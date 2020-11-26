// setup express router
const express = require("express");
const router = express.Router();

// Importing controllers
const { welcome } = require("../controllers/welcome");

/*
Every routes need to register here
No need to register every thing under signle file 
create file for every request per your need
*/
router.get("/welcome", welcome);

// Exporting all routes to connect with app
module.exports = router;