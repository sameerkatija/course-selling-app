require("dotenv").config();
const express = require("express");
const admin = require("./routes/admin");
const users = require("./routes/users");
const mongoose = require("mongoose");
const app = express();

// Connecting Databases
mongoose.connect("mongodb://localhost:27017/courseapp");
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", () => {
  console.log("Database Connected");
});
// important for body parsing
// apps middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  return res.send("Hello Worlds");
});

// Routes
app.use("/admin", admin);
app.use("/user", users);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is listening on http://127.0.0.1:${PORT}`);
});
