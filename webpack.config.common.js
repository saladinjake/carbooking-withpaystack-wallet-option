const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
  entry: ['@babel/polyfill/noConflict', './src/index.js'],
  output: {
    path: `${__dirname}/dist-reactive`,
    publicPath: '/',
    filename: 'bundlex.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
        }]
      },
      {
        test: /\.s?css/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },

      {
         test: /\.(png|svg|jpg|gif)$/,
         use: [
           'file-loader',
         ],
       },
       {
         test: /\.(woff|woff2|eot|ttf|otf)$/,
         use: [
           'file-loader',
         ],
       },

      // {
      //   test: /\.(gif|png|jpe?g|woff|woff2|eot|ttf|svg)$/i,
      //   use: [
      //     'file-loader',
      //     {
      //       loader: 'image-webpack-loader',
      //       options: {
      //         gifsicle: {
      //           interlaced: false,
      //         },
      //         optipng: {
      //           optimizationLevel: 7,
      //         },
      //         pngquant: {
      //           quality: '65-90',
      //           speed: 4
      //         },
      //       },
      //     }
      //   ]
      // }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.css', '.scss']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html'
    }),


     new CopyWebpackPlugin([
      {
        from: `${__dirname}/public/images`,
        to:`${__dirname}/dist-reactive/public/images`,
      },

      {
        from: `${__dirname}/public`,
        to:`${__dirname}/dist-reactive/public`,
      },
      
     
    ]),


  ],
};
