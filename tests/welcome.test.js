// Super test package to mock the request
const request = require("supertest");

// Without start the server fully configured app was used for testing
const app = require("../app");

// Single test to verify our /welcome url is working
test("Should send welcome text", async () => {

    // It will mock the request and give response
    const response = await request(app).get("/welcome");

    // Check(validate) the response
    expect(response.status).toBe(200);
    expect(response.text).toBe("Welcome to mern stack");
});