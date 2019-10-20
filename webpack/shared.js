const path = require('path');

const sourceRoot = path.join(__dirname, '../src');
const developmentTemporaryFilesRoot = path.join(__dirname, '../development/dist');

const baseWebpackConfig = {
  entry: {
    'index': path.join(sourceRoot, 'index.ts'),
  },
  output: {
    filename: '[name].js',
    path: developmentTemporaryFilesRoot,
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          {loader: 'ts-loader'},
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.ts'],
  },
};

module.exports = {
  baseWebpackConfig,
};
