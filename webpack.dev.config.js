const webpack = require('webpack');

const HOST = 'localhost';
const PORT = '4001';

const devConfig = {

  entry: {
    app: [
      `webpack-dev-server/client?http://${HOST}:${PORT}`,
      'webpack/hot/dev-server',
      './web/static/js/app',
    ],
  },

  output: {
    path: '/build/',
    filename: '[name].hot.js',
    publicPath: `http://${HOST}:${PORT}/build/`,
    devtoolModuleFilenameTemplate: '/[absolute-resource-path]',
  },

  module: {
    loaders: [
      {
        test: [/\.js$/, /\.jsx$/],
        loaders: ['babel'],
        exclude: /node_modules/,
      },
      {
        test: [/\.sass$/, /\.scss$/],
        loader: 'style!css?sourceMap!autoprefixer?browsers=last 2 versions!sass?sourceMap',
      },
      {
        test: /\.css$/,
        loader: 'style!css',
      },
      {
        test: /\.json$/,
        loader: 'json',
      },
    ],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],

  resolve: {
    extensions: ['', '.js', '.jsx', '.json', '.css', '.sass', '.scss'],
  },

  node: {
    process: true,
  },

  debug: true,

  devtool: '#eval-source-map',
};

module.exports = devConfig;
