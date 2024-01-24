# Exam Code Challenge

## Github Repository Instructions
- **DO NOT SUBMIT THE EXAM BEFORE COMPLETING THIS CHALLENGE**
    - You must complete this challenge then submit the exam. We will not look at any code that is committed after you have submitted the exam.
- Make a new repository in github and make it private
- Clone this repo 
- Delete the .git folder in the cloned project
    - If you are using the terminal/command prompt, you can use the `rmdir` command
    - Example: `rmdir .git`
- Reinitialize the project as a git repo with the `git init` command
- Set the origin of the cloned repo to your that new repo you created in github
- West Coast Fellows Only: Make sure to invite Tea and Alexis
    - Tea's Github username: ControlAltTea
    - Alexis' Github username: Alex-is-Gonzalez
- East Coast Fellows Only: Make sure you invite Wren, Jose, and Rafael
    - Jose's Github username: joselevelsup
    - Wrens's Github username: wrenpurcell
    - Rafael's Github username: imkewlhuh

## Instructions
You are building a simple web application, and you need to implement user authentication using Express.js. Create the necessary routes and middleware functions for user registration, login, and authentication.

### User Registration
- Create a route for registering a new user with the following information: username and password.
- Store user information securely (you can use an in-memory store for simplicity).

### User Login
- Create a route for user login with the following information: username and password.
- Implement authentication to verify the entered username and password against the stored user information.
- Send back a "token" to the client

### Protected Route
- Create a protected route that requires authentication.
- Only authenticated users should be able to access this route.

#### Notes
- Ensure that your code is organized and follows best practices for Express.js applications.
- Feel free to structure your code as you see fit and include any additional features you think would enhance the authentication system. Good luck!
- You can run the server locally and test if needed
- Run the test suite using `npm run test`. **DO NOT ALTER ANY OF THE TESTS**
- You may also use the test suite as a reference

