//ensure @babel/core and @babel/preset-env is installed and set it in .babelrc
let path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { resolve } = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const jsEntry = resolve(__dirname, '../../UI/js/Main.js');
const srcDir = resolve(__dirname, '../../UI');
const distDir = resolve(__dirname, '../../distVanillagulp/');

const autoprefixer = require('autoprefixer');

const glob = require('glob');

function tryResolve_(url, sourceFilename) {
  try {
    return require.resolve(url, { paths: [path.dirname(sourceFilename)] });
  } catch (e) {
    return '';
  }
}

function tryResolveScss(url, sourceFilename) {
  const normalizedUrl = url.endsWith('.css') ? url : `${url}.css`;
  return (
    tryResolve_(normalizedUrl, sourceFilename) ||
    tryResolve_(
      path.join(path.dirname(normalizedUrl), `_${path.basename(normalizedUrl)}`),
      sourceFilename,
    )
  );
}

function materialImporter(url, prev) {
  if (url.startsWith('@material')) {
    const resolved = tryResolveScss(url, prev);
    return { file: resolved || url };
  }
  return { file: url };
}

module.exports = {
  mode: 'development',
  

  entry: {
    App: jsEntry,
    // frontendStyles: `${srcDir}/css/mainstyles.css`,
    // backendStyles: `${srcDir}/css/mainstyles_backend.css`,
  },

  output: {
    path: distDir,
    publicPath: '/',
    filename: '[name].bundle.js',
    chunkFilename: '[id].bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },

      // {
      //   test: /\.s?css/,
      //   // use: [
      //   //        'style-loader',
      //   //        'css-loader',
      //   //        'sass-loader'
      //   // ]

      //   use: [
      //     MiniCssExtractPlugin.loader,
      //     'css-loader',
      //     {
      //       loader: 'postcss-loader',
      //       options: {
      //         plugins: () => [autoprefixer()],
      //       },
      //     },
      //     {
      //       loader: 'sass-loader',
      //       options: {
      //         importer: materialImporter,
      //         includePaths: glob.sync('node_modules').map(d => path.join(__dirname, d)),
      //       },
      //     },
      //   ],
      // },

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
      //           speed: 4,
      //         },
      //         mozjpeg: {
      //           progressive: true,
      //           quality: 65,
      //         },
      //       },
      //     },
      //   ],
      // },
    ],
  },

  resolve: {
    extensions: ['*', '.js', '.jsx', '.css', '.scss'],
    // alias: {
    //   react: 'preact-compat',
    //   'react-dom': 'preact-compat'
    // }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),

    // new HtmlWebpackPlugin({
    //   template: `${srcDir}/index.html`,
    //   filename: './index.html',
    // }),
    // new HtmlWebpackPlugin({
    //   template: `${srcDir}/admin.html`,
    //   filename: './admin.html',
    // }),
    // new HtmlWebpackPlugin({
    //   template: `${srcDir}/interventions.html`,
    //   filename: './interventions.html',
    // }),
    // new HtmlWebpackPlugin({
    //   template: `${srcDir}/login.html`,
    //   filename: './login.html',
    // }),
    // new HtmlWebpackPlugin({
    //   template: `${srcDir}/redflags.html`,
    //   filename: './redflags.html',
    // }),
    // new HtmlWebpackPlugin({
    //   template: `${srcDir}/userProfile.html`,
    //   filename: './userProfile.html',
    // }),
    // new HtmlWebpackPlugin({
    //   template: `${srcDir}/reportForm.html`,
    //   filename: './reportForm.html',
    // }),

    // new CopyWebpackPlugin([
    //   {
    //     from: `${srcDir}/images/**/*.jpg`,
    //   },
    //   {
    //     from: `${srcDir}/images/icons/*.png`,
    //   },
    //   {
    //     from: `${srcDir}/sw.js`,
    //   },
    //   {
    //     from: `${srcDir}/manifest.json`,
    //   },
    // ]),

    //new DashboardPlugin()
  ],
};
