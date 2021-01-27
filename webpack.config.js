const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');

const development = process.env.NODE_ENV === 'development';

// Constant with our paths
const paths = {
  OUTPUT: path.resolve(__dirname, 'build'),
};

module.exports = {
  entry: {
    bundle: './src/index.js',
  },
  target: 'node',
  node: {
    __filename: true,
    __dirname: true,
  },
  output: {
    path: paths.OUTPUT,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },

  externals: [webpackNodeExternals()],
  mode: process.env.NODE_ENV,
  devtool: development && 'source-map',
};
