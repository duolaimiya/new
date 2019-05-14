var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/list', function(req, res, next) {
  // res.send('respond with a resource');
  res.render('products/list');
});

module.exports = router;
