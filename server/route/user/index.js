const login = require('./login');

function userRoute(router){

  // 登陆
  router.post('/api/user/login', login)
}


module.exports = userRoute;