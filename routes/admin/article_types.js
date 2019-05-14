var express = require('express');
var router = express.Router();
const fs = require('fs');

// restful
/* GET users listing. */
router.get('/', function(req, res, next) {
  var strFile = './data/article_types.json';
  var arrAT = []; // 获取到的所有数据
  if (fs.existsSync(strFile)) {
    arrAT = JSON.parse(fs.readFileSync(strFile));
  }
  res.render('admin/article_types/index', {
    arrAT,
  });
});

router.get('/new', (req, res) => {
  res.render('admin/article_types/new');
});

router.get('/edit', (req, res) => {
  console.log(req.query); // 通过query获取url中传递的参数 ?传参
  var strFile = './data/article_types.json';
  var arrAT = []; // 获取到的所有数据
  if (fs.existsSync(strFile)) {
    arrAT = JSON.parse(fs.readFileSync(strFile));
  }
  const currentData = arrAT.find(item => item.id == req.query.id);

  res.render('admin/article_types/edit', {
    currentData,
  });
});

router.post('/create', (req, res) => {
  var strFile = './data/article_types.json';
  var arrAT = []; // 获取到的所有数据
  if (fs.existsSync(strFile)) {
    arrAT = JSON.parse(fs.readFileSync(strFile));
  }
  // console.log(req.body); // 获取请求体中的数据
  var data = req.body;
  data.id = Date.now();
  arrAT.push(data);
  fs.writeFileSync(strFile, JSON.stringify(arrAT));
  // res.send('创建数据');
  res.redirect('/admin001/a_t'); // 表示重定向
});

// 通过params传参
router.post('/update/:id', (req, res) => {
  const id = req.params.id;
  var strFile = './data/article_types.json';
  var arrAT = []; // 获取到的所有数据
  if (fs.existsSync(strFile)) {
    arrAT = JSON.parse(fs.readFileSync(strFile));
  }
  const index = arrAT.findIndex(item => item.id == req.params.id);
  arrAT[index].name = req.body.name;
  arrAT[index].descriptions = req.body.descriptions;
  fs.writeFileSync(strFile, JSON.stringify(arrAT));
  // res.send('修改数据');
  res.redirect('/admin001/a_t'); // 表示重定向
});

router.post('/del/:id', (req, res) => {
  const id = req.params.id;
  var strFile = './data/article_types.json';
  var arrAT = []; // 获取到的所有数据
  if (fs.existsSync(strFile)) {
    arrAT = JSON.parse(fs.readFileSync(strFile));
  }
  const index = arrAT.findIndex(item => item.id == req.params.id);
  arrAT.splice(index, 1);
  fs.writeFileSync(strFile, JSON.stringify(arrAT));
  // res.send('修改数据');
  res.redirect('/admin001/a_t'); // 表示重定向
  // res.send('删除数据');
});
module.exports = router;
