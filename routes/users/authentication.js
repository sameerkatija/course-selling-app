const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  return res.send("Kamal kar diya pandy g");
});

module.exports = router;
