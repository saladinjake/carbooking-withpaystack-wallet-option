const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.config.common.js');


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
    new webpack.DefinePlugin({
      'process.env': {
        API_URL: JSON.stringify('https://demo-commute-taxi-surf-api.herokuapp.com/api/v1')
      }
    })
  ]
});
