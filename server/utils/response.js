const response = {};

response.success = function(ctx, data = {}, msg = 'success'){
  ctx.response.type = 'application/json'
  ctx.status = 200;
  ctx.response.body = JSON.stringify({ code: 0, data, msg })
}

response.fail = function(ctx, code, data = {}, msg = 'fail'){
  ctx.response.type = 'application/json'
  ctx.status = 200;
  ctx.response.body = JSON.stringify({ code, data, msg })
}

module.exports = response;