const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Admin = require("../../models/admin");
const bcrypt = require("bcrypt");

router.get("/", (req, res) => {
  return res.send("Kamal ho gaya");
});

router.post("/", async (req, res) => {
  const { email, password } = req.body;
  const salt = bcrypt.genSaltSync(Number(process.env.SALT_ROUNDS));
  const hash = bcrypt.hashSync(password, salt);
  const admin = new Admin({ email, password: hash });
  const token = jwt.sign({ email }, process.env.SECRET);
  admin.token = token;
  await admin.save();
  res.setHeader("Authorization", token);
  return res.json({
    token,
  });
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const admin = await Admin.findOne({ email });
  const authenticate = bcrypt.compareSync(password, admin.password);
  if (authenticate) {
    const token = jwt.sign({ email }, process.env.SECRET);
    admin.token = token;
    await admin.save();
    res.setHeader("Authorization", token);
    return res.status(200).json({ login: "success" });
  }
  return res
    .status(401)
    .json({ login: "failed", error: "Incorrect email or password." });
});

module.exports = router;
