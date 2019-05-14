var express = require('express'); // 引入express模块
var router = express.Router(); // 设置路由变量

/**
 * 通过res.render渲染一个模板页
 *  参数一表示 模板的地址(是在模板文件夹中直接查找,写文件名即可)
 *  参数二表示 传递到页面的参数
 *
 * 模板注释
      <% 这里面写的是js代码 %>
      <%=  %> 可以直接在页面上输出内容
      <%- html代码 %>
 *
 */

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Express',
    descriptions: '最好的朋友住在隔壁',
    c: `<h3>诺兰来了。。。</h3>`,
    people: [
      {
        name: '小贤',
        age: 33,
      },
      {
        name: '张益达',
        age: 32,
      },
      {
        name: '一菲',
        age: 33,
      },
    ],
  });
});

module.exports = router;
