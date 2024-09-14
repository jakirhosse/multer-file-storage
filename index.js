const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");
const router = require("./src/routes/router");
const path = require("path");

// Middlewares
app.use(cors());
app.use(express.json());
app.use(router);
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("File Storage Service is running");
});

app.use("/uploads", express.static(path.join(__dirname, "./uploads")));

app.use((error, req, res, next) => {
  res.status(500).json({ status_code: 500, message: "Internal server error" });
});

// mongoose connection
main().catch((err) => console.log(err));

async function main() {
  // connection string
  const uri = process.env.DB_URI;
  await mongoose.connect(uri);
  console.log("mongodb connected");
}

app.listen(port, () => {
  console.log(`File storage app listening on port ${port}`);
});
