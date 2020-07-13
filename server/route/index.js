const KoaRouter = require('koa-router');

const user = require('./user/index');

const router = new KoaRouter();

user(router);

module.exports = router;