const path = require('path');
module.exports = {
  outputDir: path.resolve(__dirname, '../../FileShare SERVER/public'),
  devServer: {
    proxy: 'http://127.0.0.1:3000',
  },
};
