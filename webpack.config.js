const path = require('path');

module.exports = {
  entry: ['./src/index.js','./src/methods.js'],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'entry',
  },
};