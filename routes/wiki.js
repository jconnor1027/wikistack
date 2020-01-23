const express = require("express");
const router = express.Router();
const { addPage, wikiPage } = require("../views");
const { Page } = require("../models/index");
// const Wiki = require("")

router.get("/", async (req, res, next) => {
  res.redirect("/wiki");
});

router.post("/", async (req, res, next) => {
  const page = new Page({
    title: req.body.title,
    content: req.body.content,
    author: req.body.author,
    email: req.body.authorEmail,
    status: req.body.status
  });
  try {
    await page.save();
    res.redirect("/");
  } catch (error) {
    next(error);
  }
});

router.get("/add", (req, res, next) => {
  res.send(addPage());
});

router.get('/:slug', async (req, res, next) => {
  try {
    const singlePage = await Page.findOne({
      where: {slug: req.params.slug}
    });
    console.log(singlePage);
  } catch (error) {next(error)}
  res.send(wikiPage(singlePage));
});

module.exports = router;
