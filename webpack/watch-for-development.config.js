const webpack = require('webpack');

const {baseWebpackConfig} = require('./shared');

module.exports = {
  mode: 'none',
  watch: true,
  entry: baseWebpackConfig.entry,
  output: baseWebpackConfig.output,
  module: {
    rules: baseWebpackConfig.module.rules,
  },
  resolve: {
    extensions: baseWebpackConfig.resolve.extensions,
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
  ],
};
