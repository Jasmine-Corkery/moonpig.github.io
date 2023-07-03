const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://moonpig.github.io/tech-test-frontend',
      changeOrigin: true,
      secure: false,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Origin': 'http://localhost:3005',
        'X-Requested-With': 'XMLHttpRequest',
        'Referer': 'http://localhost:3005',
      },
    })
  );
};