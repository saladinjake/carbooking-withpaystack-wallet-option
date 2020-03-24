const webpack = require('webpack');
const { resolve } = require('path');
const merge = require('webpack-merge');
const common_config = require('./webpack.config.common.js');

const distDir = resolve(__dirname, '../../distVanilla/');
module.exports = merge(common_config, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: `${distDir}/`,

    //contentBase: `${__dirname}/dist`,
    historyApiFallback: true,
    port: 4000,
    hot: true,
  },
  plugins: [
    // new CleanWebpackPlugin(['dist'], {
    //   root: resolve(__dirname, '..')
    // }),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'vendor'
    // }),
    // new CopyWebpackPlugin([{
    //   from: resolve(__dirname, '../src/icons/'),
    //   to: resolve(__dirname, '../dist/')
    // }]),
    new webpack.DefinePlugin({
      'process.env.VERSION': JSON.stringify(process.env.VERSION),
      'process.env.PLATFORM': JSON.stringify(process.env.PLATFORM),
      'process.env': {
        API_URL: JSON.stringify('http://localhost:4000/api/v1'),
      },
    }),
  ],
});
