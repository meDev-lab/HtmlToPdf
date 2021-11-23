const Koa = require("koa");
const render = require("koa-ejs");
const path = require("path");
const serve = require("koa-static");
const Router = require("@koa/router");
const puppeteer = require("puppeteer");

const app = new Koa();
const router = new Router();
app.use(serve(path.join(__dirname, "/")));
app.use(serve(path.join(__dirname, "/pdf"), "/pdf"));

render(app, {
  root: path.join(__dirname, "view"),
  layout: "template",
  viewExt: "html",
  cache: false,
  debug: false,
});

// app.use(function (ctx, next) {
//   ctx.state = ctx.state || {};
//   ctx.state.now = new Date();
//   ctx.state.ip = ctx.ip;
//   ctx.state.version = "2.0.0";
//   return next();
// });

router.get("/", async (ctx, next) => {
  const data = {
    fio: 'иванов иван петрович',
    arr: [1, 1, 5, 3, 2, 4, 2]
  };
  await ctx.render("content", {
    hello: "world",
    data: JSON.stringify(data),
  });
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(3001, () => console.log("open http://localhost:3001"));
