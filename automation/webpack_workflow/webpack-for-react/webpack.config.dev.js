const webpack = require('webpack');
const merge = require('webpack-merge');
const { resolve } = require('path');
const common_config = require('./webpack.config.common.js');

const distDir = resolve(__dirname, '../../distReact/');
module.exports = merge(common_config, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: `${distDir}`,
    historyApiFallback: true,
    port: 4000,
    hot: true,
  },
  plugins: [
    // new CleanWebpackPlugin(['dist'], {
    //   root: resolve(__dirname, '..')
    // }),
    // new webpack.config.optimize.splitChunks({
    //   name: 'vendor'
    // }),
    // new CopyWebpackPlugin([{
    //   from: resolve(__dirname, '../src/icons/'),
    //   to: resolve(distDir)
    // }]),
    new webpack.DefinePlugin({
      'process.env.VERSION': JSON.stringify(process.env.VERSION),
      'process.env.PLATFORM': JSON.stringify(process.env.PLATFORM),
      'process.env': {
        API_URL: JSON.stringify('http://localhost:3000/api/v1'),
      },
    }),
  ],
});
