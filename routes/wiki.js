const express = require("express");
const router = express.Router();
// const Wiki = require("")

router.get("/", async (req, res, next) => {
  res.send("Hello! This is your router!");
});

router.post("/", async (req, res, next) => {
  res.send("Hello! This is your post route!");
});

router.get("/add", async (req, res, next) => {
  res.send("Hello! This is your add route!");
});

module.exports = router;
