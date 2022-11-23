const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();

router.use(bodyParser.urlencoded({ extended: true })); // use bodyParser 먼저진행!!

router.get("/", (req, res) => {
  res.render("index");
});

router.post("/login", (req, res) => {
  // let id = req.body.id
  // let pw = req.body.pw
  if (req.body.pw == 12345) {
    res.render("loginSuccess", { id: req.body.id });
  } else {
    res.render("loginFail");
  }
});

module.exports = router;
