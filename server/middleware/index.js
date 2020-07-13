const koaBody = require('koa-body');

function middleware(app) {
  // 跨域
  app.use(async (ctx, next) => {
    ctx.set("Access-Control-Allow-Origin", "http://localhost:8005");
    ctx.set('Access-Control-Allow-Methods', 'PUT,DELETE,POST,GET');
    ctx.set('Access-Control-Allow-Headers', 'Accept,Origin,XRequestedWith,Content-Type,LastModified');
    ctx.set('Access-Control-Allow-Credentials', true);
    await next();
  });
  // 解析 post 请求的 body
  app.use(koaBody());
}


module.exports = middleware;