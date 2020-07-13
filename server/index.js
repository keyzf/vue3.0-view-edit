const Koa = require('koa')
const fs = require('fs')

const resolve = require('../build/resolve');

const app = new Koa();

const { createBundleRenderer } = require('vue-server-renderer')
const renderer = createBundleRenderer(resolve('../dist/vue-ssr-server-bundle.json'), {
  runInNewContext: false,
  template: fs.readFileSync(resolve('../build/server.template.html'), 'utf8'),
  // 还要补一个客户端版本
})


const renderData = (ctx, renderer) => {
  const context = {
    url: ctx.request.url,
  }
  return new Promise((resolve, reject) => {
    renderer.renderToString(context, (err, html) => {
      if (err) {
        return reject(err)
      }
      resolve(html)
    })
  })
}

app.use(async (ctx, next) => {
  let html;
  try {
    html = await renderData(ctx, renderer)
  } catch (error) {
    html = '404 Page Not Found'
  }
  ctx.response.type = 'html';
  ctx.response.status = 200;
  ctx.response.body = html;
})
// 在端口3000监听:
app.listen(3000, () => {
  console.log('koa start')
});