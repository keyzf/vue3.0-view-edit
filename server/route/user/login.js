const response = require('../../utils/response')

function login(ctx, next) {
  const { username, password } = ctx.request.body;
  console.log('登录账号：', username, '；密码：', password);
  response.success(ctx, {id: 0})
  next();
}

module.exports = login