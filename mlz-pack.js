const config = require('./config/index');
const path = require('path');
module.exports = {
  webpack: {
    htmlPlugin: {
      filename: 'index.html',
      template: path.resolve(__dirname, './src/index.ejs'),
      front_config: `<script>window.CODEMAOCONFIG = ${JSON.stringify(config.runtime)}</script>`,
    }
  }
}