const express = require("express");
const router = express.Router();
const { addPage } = require('../views')
// const Wiki = require("")

router.get("/", async (req, res, next) => {
  res.redirect('/wiki');
});

router.post("/", async (req, res, next) => {
  res.json(req.body);

});

router.get("/add", (req, res, next) => {
  res.send(addPage());
});

module.exports = router;
