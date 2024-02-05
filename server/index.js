const express = require("express");
require("dotenv").config();
const cors = require("cors");
const dbConnection = require("./config/dbConfig");
const router = require("./modules/user/userRoutes");
const logger = require("morgan");

const app = express();

// database connection
dbConnection();

const port = process.env.PORT || 8081;

// for cors
app.use(cors());

// to read response body
app.use(express.json());

// logger
app.use(logger("dev"));

// test route
app.get("/api/v1", (req, res) => {
  res.status(200).json({ message: "ALL OK :) :)" });
});
app.use("/api/v1", router);

app.listen(port, () => {
  console.log(`App start on port http://localhost:${port} :)`);
});
