const Koa = require('koa')

const middleware = require('./middleware/index');
const router = require('./route/index');

const app = new Koa();

// 中间件
middleware(app);
app.use(router.routes())
app.use(router.allowedMethods())


// 在端口3000监听:
app.listen(3000,()=>{
  console.log('koa start')
});