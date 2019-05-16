var createError = require("http-errors"); // 用来做异常处理
var express = require("express"); // web开发框架
var path = require("path"); // path模块 用来解析路径
var cookieParser = require("cookie-parser"); // 用来格式化cookies数据,把传递过来的数据格式化为对象
var logger = require("morgan"); // 用来在终端输出请求日志

// 在js中引入的文件是js文件的时候 可以不加.js后缀
//  默认会引入文件夹下的index文件

// 此种写法属于路由拆分(项目工程化管理)
var indexRouter = require("./routes/index"); // 引入路由模块
var usersRouter = require("./routes/users");

var app = express();

// 设置模板引擎
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// 在express中通过use方法使用一个第三方插件

app.use(logger("dev")); // 设置输出的日志

// 格式化服务器端提交的数据
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// 设置路由地址
//  参数一 表示浏览器中访问的地址 可以随便写但是不能重复
//  参数二 表示访问这个地址时的处理函数
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/p/a", require("./routes/products"));

app.get("/admin001/main", (req, res) => {
  // console.log(req.cookies);
  res.render("admin/main");
});

app.use("/admin001/a_t", require("./routes/admin/article_types"));
app.use("/admin001/a", require("./routes/admin/articles"));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error"); // 使用render渲染一个模板页面
});

module.exports = app;
