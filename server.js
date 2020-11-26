// Import app and db configuration files
const server = require('./app');
const db = require('./db');

/*
Selecting port 
process.env.PORT will give configured port as per hosting provider
else we configure 5000 as port
*/
const PORT = process.env.PORT || 5000;

// Start server at configured port
server.listen(PORT, () => {
    console.log("Server started at " + PORT + " port.");
});

// Connecting to database
db.connectDB()
    .then(() => {
        console.log("Mongo DB connected.");
    })
    .catch(err => {
        console.log("[Mongodb error] ", err);
    })