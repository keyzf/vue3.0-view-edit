const Koa = require('koa')
const fs = require('fs')

const resolve = require('../build/resolve');

const app = new Koa();

const { createBundleRenderer } = require('vue-server-renderer')
const renderer = createBundleRenderer(resolve('../dist/vue-ssr-server-bundle.json'), {
  runInNewContext: false,
  template: fs.readFileSync(resolve('../build/server.template.html'), 'utf8'),
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

  let html, status
  try {
    status = 200
    html = await renderData(ctx, renderer)
  } catch (e) {
    console.log('\ne', e)
    if (e.code === 404) {
      status = 404
      html = '404 | Not Found'
    } else {
      status = 500
      html = '500 | Internal Server Error'
    }
  }
  ctx.response.type = 'html'
  ctx.response.status = status ? status : ctx.status
  ctx.response.body = html;
})
// 在端口3000监听:
app.listen(3000, () => {
  console.log('koa start')
});