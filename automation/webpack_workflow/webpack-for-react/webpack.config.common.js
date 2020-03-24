let path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { resolve } = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const jsEntry = resolve(__dirname, '../../react-with-me/index.js');
const srcDir = resolve(__dirname, '../../react-with-me');
const distDir = resolve(__dirname, '../../distReact/');
const autoprefixer = require('autoprefixer');

const glob = require('glob');
const Forker = require('fork-ts-checker-webpack-plugin');

function tryResolve_(url, sourceFilename) {
  try {
    return require.resolve(url, {
      paths: [path.dirname(sourceFilename)],
    });
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
  entry: [
    '@babel/polyfill',
    jsEntry,
    `${srcDir}/core/static/css/mainstyles.css`,
    `${srcDir}/core/static/css/mainstyles_backend.css`,
  ],

  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].chunk.bundle.js',
    path: distDir,
    publicPath: '/',
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

      {
        test: /\.s?css/,
        // use: [
        //        'style-loader',
        //        'css-loader',
        //        'sass-loader'
        // ]

        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [autoprefixer()],
            },
          },
          {
            loader: 'sass-loader',
            options: {
              importer: materialImporter,
              includePaths: glob.sync('node_modules').map(d => path.join(__dirname, d)),
            },
          },
        ],
      },

      {
        test: /\.(gif|png|jpe?g|woff|woff2|eot|ttf|svg)$/i,

        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              gifsicle: {
                interlaced: false,
              },
              optipng: {
                optimizationLevel: 7,
              },
              pngquant: {
                quality: '65-90',
                speed: 4,
              },
              mozjpeg: {
                progressive: true,
                quality: 65,
              },
            },
          },
        ],
      },
    ],
  },

  resolve: {
    extensions: ['*', '.js', '.jsx', '.css', '.scss'],
    // alias: {
    //   '<atoms>': `${srcDir}/UI/`,
    //   '<molecules>': `${srcDir}/UI/`,
    //   '<organisms>': `${srcDir}/UI/`,
    //   '<styles>': `${srcDir}/UI/`,
    //   '<pages>': `${srcDir}/UI/components/pages`,
    //   '<helpers>': `${srcDir}/UI/components/pages`,
    // }
  },

  resolve: {
    
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


    //  new CopyWebpackPlugin([
    //   { from: 'ui/src/index.html', to: 'index.html' },
    //   { from: 'ui/src/libraries', to: 'libraries' },
    //   { from: 'ui/src/images', to: 'images' },
    //   { from: 'ui/src/css', to: 'css' },
    //   { from: 'ui/src/images', to: 'images' },
    //   { from: 'ui/src/fonts', to: 'fonts' },
    //   { from: 'ui/src/favicon.ico', to: 'favicon.ico' },
    // ]),

    new HtmlWebpackPlugin({
      template: `${srcDir}/index.html`,
      filename: './index.html',
    }),
    new Forker(),
    new CopyWebpackPlugin([
      {
        from: './UI/images/**/*.jpg',
      },
      {
        from: './UI/images/icons/*.png',
      },
      // {
      //   from: './UI/sw.js',
      // },
      {
        from: './UI/manifest.json',
      },
    ]),

    //new DashboardPlugin()
  ],
};
