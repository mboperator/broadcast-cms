const path = require('path');
const webpack = require('webpack');
const publicPath = 'http://localhost:4001';

const env = process.env.MIX_ENV || 'dev';
const prod = env === 'prod';

const entry = './web/static/js/index.js';
const hot = `'webpack-hot-middleware/client?path='${publicPath}__webpack_hmr`;

const plugins = [
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.NoErrorsPlugin(),
  new webpack.DefinePlugin({
    ENV: env,
  }),
];

if (env === 'dev') {
  plugins.push(new webpack.HotModuleReplacementPlugin());
}

module.exports = {
  devtool: prod ? null : 'cheap-module-eval-source-map',
  entry: prod ? entry : [hot, entry],
  output: {
    path: `${path.resolve(__dirname)}/priv/static/js`,
    filename: 'index.bundle.js',
    publicPath,
  },
  plugins,
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        exclude: path.resolve(__dirname, 'node_modules'),
      },
    ],
  },
};
