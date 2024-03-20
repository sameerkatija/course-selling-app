const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const admin = require("../../models/admin");

router.get("/", (req, res) => {
  return res.send("Kamal ho gaya");
});

router.post("/", (req, res) => {
  const { email, password } = req.body;
  return res.json({
    email,
    password,
  });
});

module.exports = router;
