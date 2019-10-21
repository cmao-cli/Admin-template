const express = require('express');
const app = express();
const historyApiFallback = require('connect-history-api-fallback');
const webpack = require('webpack');
const proxy = require('http-proxy-middleware');

const config = require('../config/index.js');
const webpackConfig = require("../webpack.config.js");
const _config = config();
const IP = _config.buildtime.origin_server.ip;
const PORT = _config.buildtime.origin_server.port;

compiler = webpack(webpackConfig);
const webpackDevServer = require("webpack-dev-middleware")(compiler, {
  noInfo: false,
  publicPath: webpackConfig.output.publicPath,
  // proxy: {
  //   '/': {
  //     target: 'https://dev-api-admin-transaction.codemao.cn',
  //     pathRewrite: { '^/api': '' },
  //     changeOrigin: true,
  //     secure: false,
  //     bypass: function (req, res, proxyOptions) {
  //       if (req.path == '/config') {
  //         return res.json(_config.runtime);
  //       }
  //     },
  //   }
  // }
});
app.use('/api', proxy({
  target: 'https://dev-api-admin-transaction.codemao.cn',
  changeOrigin: true,
}))
app.use(historyApiFallback({ verbose: false }));
app.use(webpackDevServer);
app.use(require("webpack-hot-middleware")(compiler));

app.listen(PORT, IP, function() {
  console.log('listening on ' + IP + ' : ' + PORT);
});