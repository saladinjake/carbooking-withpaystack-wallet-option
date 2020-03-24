//ensure @babel/core and @babel/preset-env is installed and set it in .babelrc
let path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { resolve } = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const jsEntry = resolve(__dirname, '../../../UI/js/engine.js');
const srcDir = resolve(__dirname, '../../../UI');
const distDir = resolve(__dirname, '../../../distVanilla/');
const autoprefixer = require('autoprefixer');
const fs=require('fs');
const glob = require('glob');


// function getFiles(templateDir){
//     // Read files in template directory
//   const templateFiles = fs.readdirSync(path.resolve(__dirname, templateDir))
//   return templateFiles.map(item => {

//    if(item.endsWith('.html')){
//     // Split names and extension
//     const parts = item.split('.')
//     const name = parts[0]
//     const extension = parts[1]
    
//        // Create new HTMLWebpackPlugin with options
//     return new HtmlWebpackPlugin({
//       filename: `${name}.html`,
//       template: path.resolve(__dirname, `${templateDir}/${name}.${extension}`)
//     })
//     }
    
//   })
// // }
// const htmlPlugins1 = getFiles(`${srcDir}/user`);
// const htmlPlugins2 = getFiles(`${srcDir}/admin`);
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
  // entry:[
  //    './testwebpack/hello.js'
  // ],

  entry: {
    App: jsEntry,
    frontendStyles: `${srcDir}/css/mainstyles.css`,
    backendStyles: `${srcDir}/css/mainstyles_backend.css`,
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



    new HtmlWebpackPlugin({
      template: `${srcDir}/user/dashboard.html`,
      filename: './dashboard.html',
    }),
    new HtmlWebpackPlugin({
      template: `${srcDir}/user/index.html`,
      filename: './index.html',
    }),
    new HtmlWebpackPlugin({
      template: `${srcDir}/user/register.html`,
      filename: './register.html',
    }),
    new HtmlWebpackPlugin({
      template: `${srcDir}/user/recoverpw.html`,
      filename: './recoverpw.html',
    }),
    new HtmlWebpackPlugin({
      template: `${srcDir}/user/profile.html`,
      filename: './profile.html',
    }),
     new HtmlWebpackPlugin({
      template: `${srcDir}/user/create-plan.html`,
      filename: './create-plan.html',
    }),

      new HtmlWebpackPlugin({
      template: `${srcDir}/user/request-car-repair.html`,
      filename: './request-car-repair.html',
    }),

      new HtmlWebpackPlugin({
      template: `${srcDir}/user/create-ticket.html`,
      filename: './create-ticket.html',
    }),
      new HtmlWebpackPlugin({
      template: `${srcDir}/user/topup-wallet.html`,
      filename: './topup-wallet.html',
    }),

    new HtmlWebpackPlugin({
      template: `${srcDir}/user/submitted-tickets.html`,
      filename: './submitted-tickets.html',
    }),


    // new HtmlWebpackPlugin({
    //   template: `${srcDir}/user/page-lock-screen.html`,
    //   filename: './page-lock-screen.html',
    // }),
    new HtmlWebpackPlugin({
      template: `${srcDir}/user/sos.html`,
      filename: './sos.html',
    }),

    // new HtmlWebpackPlugin({
    //   template: `${srcDir}/user/reportForm.html`,
    //   filename: './reportForm.html',
    // }),
    // new HtmlWebpackPlugin({
    //   template: `${srcDir}/user/reportForm.html`,
    //   filename: './reportForm.html',
    // }),
    // new HtmlWebpackPlugin({
    //   template: `${srcDir}/userreportForm.html`,
    //   filename: './reportForm.html',
    // }),
    // new HtmlWebpackPlugin({
    //   template: `${srcDir}/reportForm.html`,
    //   filename: './reportForm.html',
    // }),

    new CopyWebpackPlugin([
      {
        from: `${srcDir}/user/assets`,
        to:`${distDir}/assets`,
      },
      {
        from: `${srcDir}/user/assets/images`,
         to:`${distDir}/assets/images`,
      },
      {
        from: `${srcDir}/user/assets/js`,
         to:`${distDir}/assets/js`,
      },
      {
        from: `${srcDir}/user/assets/pages`,
         to:`${distDir}/assets/pages`,
      },

      {
        from: `${srcDir}/user/assets/plugins`,
         to:`${distDir}/assets/plugins`,
      },
       {
        from: `${srcDir}/user/assets/fonts`,
         to:`${distDir}/assets/fonts`,
      },
      // {
      //   from: `${srcDir}/sw.js`,
      // },
      // {
      //   from: `${srcDir}/manifest.json`,
      // },
    ]),

    //new DashboardPlugin()
  ]// We join our htmlPlugin array to the end
  // of our webpack plugins array.
  //.concat(htmlPlugins1)
};
