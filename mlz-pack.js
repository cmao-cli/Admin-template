/**
 * webpack配置文件
 * 具体详情请见：https://github.com/juicecube/mlz-pack
 */
const config = require('./config/index');
const path = require('path');
module.exports = {
  webpack: {
    htmlPlugin: {
      filename: 'index.html',
      front_config: `<script>window.CODEMAOCONFIG = ${JSON.stringify(config.runtime)}</script>`,
      template: path.resolve(__dirname, './src/index.ejs'),
    }
  }
}