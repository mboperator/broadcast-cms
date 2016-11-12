const devConfig = require('./webpack.dev.config');
const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');

const HOST = 'localhost';
const PORT = '3001';

const contentBase = `http://${HOST}:${PORT}`;
const compiler = webpack(devConfig);

console.info('Starting development server. Please wait...'); // eslint-disable-line no-console

const server = new WebpackDevServer(compiler, {
  // Configure hot replacement
  hot: true,

  // The rest is terminal configurations
  quiet: false,
  noInfo: false,
  lazy: false,
  publicPath: `${contentBase}/build`,
  contentBase: './examples/',
  stats: {
    colors: true,
  },
});

server.listen(PORT, HOST);
