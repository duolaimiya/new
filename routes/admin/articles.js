var express = require("express");
var router = express.Router();

router.get("/", (req, res) => {
  res.render("admin/articles/index");
}); //列表页

router.get("/new", (req, res) => {
  res.render("admin/articles/new");
}); //新增页

module.exports = router;
