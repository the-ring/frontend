'use strict';

const path = require('path');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: [
    'babel-polyfill',
    './src/js/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new LodashModuleReplacementPlugin,
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        screw_ie8: true,
        warnings: false
      }
    }),
  ],
  module: {
    loaders: [
      {
        loader: 'babel',
        include: [
          path.dirname(require.resolve('the-ring-main-react-components')),
          path.resolve(__dirname, 'src'),
        ],
        test: /\.js$/,
        plugins: ['lodash', 'transform-runtime'],
      }
    ]
  }
};
