import express from "express";
import dotenv from "dotenv";
import Connection from "./database/db.js";
import DefaultData from "./default.js";

const app = express(); // initialises express app

dotenv.config();
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

// to make express server
// added "start": "nodemon index.js" in package.json to run server using npm start
// npm i nodemon - changes being saved without restarting
// npm i mongoose

const PORT = 8000;

Connection(USERNAME, PASSWORD);

app.listen(PORT, () =>
  console.log(`Server running successfully on PORT ${PORT}`)
);

DefaultData();
