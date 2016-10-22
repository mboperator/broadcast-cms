const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const webpackDevConfig = require('./webpack.config');

const env = {
  production: process.env.NODE_ENV === 'production',
};

if (env.production === false) {

  new WebpackDevServer(webpack(webpackDevConfig), {
    publicPath: '/client/',
    contentBase: './client/',
    inline: true,
    hot: true,
    stats: false,
    historyApiFallback: true,
    headers: {
      'Access-Control-Allow-Origin': 'http://localhost:3001',
      'Access-Control-Allow-Headers': 'X-Requested-With',
    },
  }).listen(4001, 'localhost', err => {
    if (err) {
      console.log(err);
    }

    console.log('webpack dev server listening on localhost:4001');
  });
}
