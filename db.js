// The simplified mongodb queries using mongoose i.e ORM
const mongoose = require("mongoose");

// Function to connect to db
exports.connectDB = () => {
    return mongoose.connect("url", {
        useCreateIndex: true,
        useUnifiedTopology: true,
        useNewUrlParser: true
    });
}

// Function to disconnect from db
exports.disconnectDB = () => {
    return mongoose.disconnect();
}