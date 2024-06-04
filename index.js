const express = require("express");  // Importing the Express module
const cors = require("cors");  // Importing the CORS module
const dotenv = require("dotenv");  // Importing the Dotenv module
const app = express();  // Initializing the Express app
const email = require("./routes/email");  // Importing the email route

// Setting up middleware for parsing JSON and CORS
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

dotenv.config();  // Configuring the Dotenv module

// Defining a GET route for the root URL ("/")
app.get("/", (req, res) => {
  res.status(200).send("Welcome");  // Sending a welcome message with a status code of 200
});

// Using the email route
app.use("/email", email);

// Starting the server and listening on the specified port
app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is up and running on port ${process.env.PORT || 3000}`);  // Logging the server start message
});