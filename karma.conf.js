require("@babel/register") //not working for babel
let path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { resolve } = require('path');


const jsEntry = resolve(__dirname, 'UI/js/Main.js');
const srcDir = resolve(__dirname, 'UI');
const distDir = resolve(__dirname, 'distVanilla/');


const src = ['./UI/js/frontend/**/*.js','./UI/js/backend/**/*.js','./UI/js/core/**/*.js', ],
  tests = './UI/tests/karma-tests/**/*.js',
  testEntry = './UI/tests/karma-tests/demo.tester.js';




module.exports = function(config) {
  config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: path.resolve(__dirname),
   
    // web server port
    port: 9877,

        // enable / disable colors in the output (reporters and logs)
    colors: true,

        // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


     // list of files to exclude
        // exclude: [
        // ],

    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

            // list of files / patterns to load in the browser
    files: [

    // These files are probably going to be included in
    // all our tests that we'd write. The files object in
    // each individual karma target are added to these.              
    // 'code/**/*.ts'
    './node_modules/phantomjs-polyfill/bind-polyfill.js',
    './node_modules/@babel/polyfill/dist/polyfill.js',
    './node_modules/mocha/mocha.js',
    './node_modules/chai/chai.js',
    
    './node-modules/chai-http/index.js',
    //'./node_modules/dotenv/main.js',

    // ADD POLIFILL: saladin jake !!! I HAD CRAZY DAYS AND NIGHTS TO FIND THIS FIXES 10 DAYS WITH KARMA WAS HELL FIRE!!!!
     './UI/tests/polyfill/bindpolyfill.js',
     './UI/js/vendors/fetch.js',
     

    // In our case, the test and /UI/js/ folder files are the
    // same for the dev and prod targets so we can include
    // them in the global files option here
    //'./UI/js/calculator.js', //test code 
    './UI/tests/karma-tests/**/*.js',
   
      {pattern: './UI/**/*.json', included: false},
      //{pattern: './UI/**/*.html', included: false},
      
     // {pattern: './UI/**/*.js', included: true,watched:false, 
        //served: true},
      {
        pattern: './UI/tests/karma-tests/**/*.js', 
        included: true, 
        served: true
        
      },
      
      // html2js preprocessor takes this file and coverts it
      // to a string in our JS when the tests run.
      
      //'tests/karma-tests/index.html'

    ],


   webpack:  {
      mode: 'development',
      
      // entry: {
      //   App:   './UI/js/App.js',
        
      // },

      output: {
        path: distDir,
        publicPath: '/',
        filename: '[name].bundle.js',
        chunkFilename: '[id].bundle.js',
      },

       // webpack configuration
      module: {
        
        rules: [
          {test: /\.css$/, loader: "style-loader!css-loader"},
          {test: /\.less$/, loader: "style-loader!css-loader"},//!less-loader
       
          {
            test: /\.(js|jsx)$/,
            exclude: /(node_modules)/,
            
             enforce: 'post',
            use: [
              {
                loader: 'babel-loader',
                // options: {
                //   esModule: true      
                // },
              },
              // {
              //   loader: 'istanbul-instrumenter-loader'
              // }
            ],
          },

            // {
          //   test: /\.ts$/,
          //   use: 'ts-loader'
          // },
        ],
        
      },
      resolve: {
        extensions: ['*', '.js', '.jsx', '.css', '.scss'],
           alias: {
          //react: 'preact-compat',
          //'react-dom': 'preact-compat'
        }
      }
      
    
     



    },
    //concurrency:Infinity,



     // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
     preprocessors: {
      //'UI/tests/karma-tests/*.html': ['html2js'],
      //'./UI/js/**/*.js': ['coverage'], //, 'webpack', 'babel', 'coverage'  //this worked for babel
      './UI/js/frontend/controllers/**/*.js':['coverage'],
        // babel from karma-babel
        // only specify one entry point
      // and require all tests in there
       './UI/tests/karma-tests/**/*.js': ['babel', 'webpack'] //,'babel', 'webpack'  //this worked for babel


      //'tests/**/*.spec.ts': ['karma-typescript', 'coverage'],

    },

    



    
    mime: {
      "text/javascript": ["js"]
      // "text/x-typescript": ["ts", "tsx"]
    },

     // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter// frameworks to use
    frameworks: [
      'mocha',
      //'requirejs',
      'chai',
      //"sinon-chai",
      // "phantomjs-shim"
      // 'jasmine',
      // 'jasmine-matchers'

    ],
  
    
     
    // karmaTypescriptConfig:{
    //   tsconfig:'./tsconfig.json'
    // },


    babelPreprocessor: {
       options:{
          presets:[
          //'@babel/preset-es2015',
          "@babel/preset-env"
          ],
          // sourceMap:'inline'
       },
       // filename:function(file){
       //    return file.originalPath.replace(/\.(js|jsx)$/, '.es5.js')
       // }
    },

    reportSlowerThan: 25,
    coverageReporter: {
        dir: path.join(__dirname, 'coverage'),
        // Force the use of the Istanbul instrumenter to cover files
        instrumenter: {
                './UI/js/*.js': ['istanbul']
        },

        reporters: [
           // reporters not supporting the `file` property
          { type: 'html' , subdir: 'report-html'},
          { type: 'text'  },
          { type: 'lcov', subdir: 'report-lcov' },
          { type: 'text-summary' },
          // reporters supporting the `file` property, use `subdir` to directly
          // output them in the `dir` directory
          { type: 'lcovonly', subdir: '.', file: 'report-lcovonly.txt' }
            
        ]
    },

   

   // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: [
    'spec', //'junit', 
    'coverage' , 
    //'progress', 
    // 'coverage-istanbul'

    ],

           // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_DEBUG, //config.LOG_INFO,

    phantomJsLauncher: {
      exitOnResourceError: true
    },
    
  

    //exclude: [],
    client: {
        captureConsole: false
    },
    specReporter: {
        showSpecTiming: true
    },

    

    webpackMiddleware: {
      // webpack-dev-middleware configuration
      noInfo: true,
      stats: 'errors-only'
    },

    

    // coverageIstanbulReporter:{
    //   reports: ["html", 'text-summary', 'lcovonly'],
    //   dir: path.join(__dirname, 'coverage'),
    //   fixWebpackSourcePath: true,
    //   // 'report-config': {
    //   //   html: {outdir, 'html'}
    //   // }
    // },

    plugins: [
      require("karma-webpack"),
      require("istanbul-instrumenter-loader"),
      require("karma-mocha"),
      require("karma-chai"),
      require("karma-coverage"),
      require("karma-phantomjs-launcher"),
      require("karma-spec-reporter"),
      require("karma-babel-preprocessor"),
      require("karma-opera-launcher"),
      require("karma-safari-launcher"),
      require("karma-sinon-chai"),
      require("karma-firefox-launcher"),
      require("karma-chrome-launcher"),
      require("karma-requirejs"),
      //require("karma-html2js-preprocessor")

      //'karma-*'

    
    

    ],

   

    browsers: [ 
    'PhantomJS', 
    //'ChromeHeadless',
    //'Chrome', 
    //'Firefox', 'Safari'
    ],  //ChromeHeadless PhantomJS 'Chrome',  // pls ensure to install
});
};