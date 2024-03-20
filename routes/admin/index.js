const express = require("express");
const router = express.Router();
const adminAuth = require("./authentication");
router.use("/auth", adminAuth);

module.exports = router;
