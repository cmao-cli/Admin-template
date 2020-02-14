/**
 * webpack配置文件
 * 具体详情请见：https://github.com/juicecube/mlz-pack
 */
const path = require('path');
const config = require('./config/index');
module.exports = {
  webpack: {
    analyzePlugin: true,
    htmlPlugin: {
      filename: 'index.html',
      favicon: 'favicon.ico',
      template: './src/index.ejs',
      front_config: `<script>window.CODEMAOCONFIG = ${JSON.stringify(config.runtime)}</script>`,
    },
    loaderOptions: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'sass-resources-loader',
            options: {
              resources: [
                path.resolve(__dirname, './src/commons/css/themes.scss'),
                path.resolve(__dirname, './src/commons/css/themify.scss'),
              ],
            },
          },
        ],
      },
      {
        test: /\.less$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          {
            loader: 'less-loader',
            options: { javascriptEnabled: true },
          },
        ],
      },
    ],
  },
};
