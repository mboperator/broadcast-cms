const webpack = require('webpack');
const path = require('path');
const HOST = 'localhost';
const PORT = '3001';

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
        exclude: /(node_modules|forge\.bundle\.js)/,
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
    postLoaders: [
      {
        include: [
          path.resolve(__dirname, 'node_modules/ipfs-api'),
          path.resolve(__dirname, 'node_modules/fs.realpath'),
          path.resolve(__dirname, 'node_modules/libp2p-crypto'),
          path.resolve(__dirname, 'node_modules/ipld-dag-pb'),
        ],
        loader: 'transform/cacheable?brfs',
      },
    ],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],

  resolve: {
    extensions: ['', '.js', '.jsx', '.json', '.css', '.sass', '.scss'],
    alias: {
      'node-forge': path.resolve(__dirname, 'web/static/js/utils/forge.bundle.js'),
    },
  },

  node: {
    process: true,
  },

  debug: true,

  devtool: '#eval-source-map',
};

module.exports = devConfig;
