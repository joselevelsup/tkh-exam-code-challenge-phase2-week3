//Require express to be used
const express = require("express");
//Create an instance of an express application
const app = express();

//In memory database. Just an array of objects
/**
 * @type {Array<{username: String, password: String}>}
 */
const db = [];

//This is the protected middleware to make sure that non logged in users can't access logged in routes
//TODO: Create a middleware that checks the headers of the request for the key: token.
//If it exists, pass the next function
//If it doesn't exist, send a response back to the client with a status code of unauthorized
//The actual token can just be a random string. For example: "token123"
const protectedMiddleware = function (req, res, next) {
  next();
};

//Using the middleware for a specific route and any other routes under this prefix
app.use("/protected", protectedMiddleware);

//Users should be able to login here
//TODO: Create the logic that checks the database if a user exists and the passwords match.
//If the user exists and passwords match, send a new token back to the client using JSON
//If either the user doesn't exist or the password does not match or both, send a status code of unauthorized back to the client
app.post("/login", function (req, res) {});

//Users should be able to signup here
//TODO: Create the logic that adds a new user to the database. Both username and password. Before adding the user, check if the user already exists.
//If the user already exists, send a status code of a bad request.
app.post("/signup", function (req, res) {});

//Logged in users should be able to access the routes here
//TODO: Send back to the client JSON with a success property and value of true
app.get("/protected", function (req, res) {});

module.exports = app;
