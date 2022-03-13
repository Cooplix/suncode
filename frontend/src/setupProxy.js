const proxy = require('http-proxy-middleware');

const apiProxy = proxy('/api', {
  target: 'http://backend:5000',
  logLevel: 'debug',
  changeOrigin: true,
  pathRewrite: function (path, req) {
    return req.originalUrl.replace('/api/', '/');
  }
})

module.exports = function (app) {
  app.use(apiProxy);
};
