const response = require('../../utils/response')

function register(ctx, next) {
  const { username, email, password } = ctx.request.body;
  console.log('注册账号：',  email,'；y用户名：', username, '；密码：', password);
  response.success(ctx)
  next();
}

module.exports = register