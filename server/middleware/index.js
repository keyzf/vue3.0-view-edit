const koaBody = require('koa-body');」

const allowOrigin = []

function middleware(app) {
  // 跨域
  app.use(async (ctx, next) => {
    if(true || allowOrigin.indexOf(ctx.headers.origin) > -1){
      ctx.set("Access-Control-Allow-Origin", ctx.headers.origin);
      ctx.set('Access-Control-Allow-Methods', 'PUT,DELETE,POST,GET');
      ctx.set('Access-Control-Allow-Headers', 'Accept,Origin,XRequestedWith,Content-Type,LastModified');
      ctx.set('Access-Control-Allow-Credentials', true);
    }
    await next();
  });
  // 解析 post 请求的 body
  app.use(koaBody());
}


module.exports = middleware;