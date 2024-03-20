const express = require("express");
const router = express.Router();
const userAuth = require("./authentication");

router.get("/", (req, res) => {
  return res.send("tu ny abhi jana kahan hy mujhy");
});

router.use("/auth", userAuth);

module.exports = router;
