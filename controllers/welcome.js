/* 
Controllers have a function to do task 
Take request and response as input 
tasks like operation with data base and sending response
*/
exports.welcome = (req, res) => {
    res.send("Welcome to mern stack");
}