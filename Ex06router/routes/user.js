const express = require("express");
const router = express.Router();

router.get("/hello", (req, res) => {
  res.send("USER ROUTER!!");
});

module.exports = router;
