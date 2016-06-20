'use strict';

const path = require('path');
const webpack = require('webpack');
const config = require('./config');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    `webpack-hot-middleware/client?http://localhost:${config.react.frontend.port}`,
    'babel-polyfill',
    './src/js/index',
    './dist/main.min.css'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        loaders: ['react-hot', 'babel-loader'],
        include: [
          path.dirname(require.resolve('the-ring-main-react-components')),
          path.resolve(__dirname, 'src'),
        ],
        test: /\.js$/,
        plugins: ['transform-runtime'],
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  }
};
