const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.config.common.js');
const Dotenv = require('dotenv-webpack');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: `${__dirname}/dist-reactive`,
    historyApiFallback: true,
    port: 4000,
    hot: true
  },
  plugins: [
  new Dotenv(),
    new webpack.DefinePlugin({
      'process.env': {
        API_URL: JSON.stringify('https://demo-commute-taxi-surf-api.herokuapp.com/api/v1'),
        DEPLOY_FRONT_URL: JSON.stringify("https://demouserapp.commute.ng"),
        DEPLOY_BACK_URL: JSON.stringify('http://167.71.131.172/api/v1'),
      }
    })
  ]
});
