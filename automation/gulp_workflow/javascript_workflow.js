let gulp = require('gulp');
let uglify = require('gulp-uglify');
let livereload = require('gulp-livereload');
let concat = require('gulp-concat');
let plumber = require('gulp-plumber');
let sourcemaps = require('gulp-sourcemaps');
let babel = require('gulp-babel');
let karma = require("karma");
const { server} = karma;
//const jsdom = require('mocha-jsdom');
const localStorageMine  =  require('../UI/js/core/designPatterns/creational/singleton/LocalConfigStore')

const mocha = require('gulp-mocha')

// const webpack = require('webpack');
// const WebpackDevServer = require('webpack-dev-server');
// const webpackConfig = require("../webpack_workflow/webpack-for-vanillajs-gulp/webpack.config.common.js");

const pump = require("pump")
const vinylNamed = require('vinyl-named');
const through2 = require('through2');
// const webpackStream = require("webpack-stream")




// Config


// File paths
let DIST_PATH = './UI/distVanillagulp';
let SCRIPTS_PATH = './UI/js/**/*.js';
// Scripts
let SCRIPTS_API_SERVER = [

];
let SCRIPTS_PATH_FRONTEND = [
  './UI/js/frontend/helpers/**/*.js',
  './UI/js/frontend/models/**/*.js',
  './UI/js/frontend/**/*.js',
  './UI/js/core/**/*.js',
  './UI/js/App.js',
  './UI/js/Main.js',
  'UI/tests/gulp-mocha/**/*.js'
];
let SCRIPTS_PATH_BACKEND = [
  './UI/js/backend/helpers/**/*.js',
  './UI/js/core/**/*.js',
  './UI/js/backend/controllers/widgets/accordion.js',
  './UI/js/backend/controllers/widgets/geolocation.js',
  // './UI/js/backend/controllers/widgets/imageviewer.js',
  //'./UI/js/backend/controllers/widgets/recordentry.js',
   './UI/js/backend/controllers/widgets/mixins.js',
  './UI/js/backend/controllers/widgets/media.js',
  './UI/js/backend/controllers/widgets/reportform.js',
  './UI/js/backend/controllers/widgets/search.js',
  './UI/js/backend/controllers/widgets/sidebar.js',
  './UI/js/backend/controllers/widgets/tabs.js',
  './UI/js/backend/services/**/*.js',
   './UI/js/backend/models/**/*.js',
   './UI/js/backend/views/**/*.js',
  './UI/js/backend/controllers/intervention.js',
  './UI/js/backend/controllers/redflag.js',
  './UI/js/backend/controllers/user.js',
  './UI/js/backend/App.js',
  './UI/js/Main.js',
  // 'UI/testwithGulp/**/*.js'
];

const Test_path = ['UI/tests/gulp-mocha/**/*.js']



/**
 * Run test once and exit
 */
// gulp.task('test', function (done) {
//   new Server({
//     configFile: __dirname + '/karma.conf.js',
//     singleRun: true
//   }, done).start();
// });

gulp.task('scripts-frontend', function() {
  console.log('starting scripts task');

  console.log("BIG BOSS !!!.... BUNDLER STARTED ....");

   

  
   return gulp.src(SCRIPTS_PATH_FRONTEND)
    .pipe(vinylNamed())
    //.pipe(webpackStream(webpackConfig, webpack))
  
    .pipe(
      plumber(function(err) {
        console.log('Scripts Task Error');
        console.log(err);
        this.emit('end');
      }),
    ) // who told u anything is imposible..... Author: SALADIN JAKE
    .pipe(mocha({
      reporter: 'list',
     // reporter:'mocha-lcov-reporter',
     // require: [ "@babel/register"],
      require: [ __dirname + "/lib/jsdom.js","@babel/register"], //if you need just gulp with no mocha jsdom comment all jsdom() in the before hook of all test.. Prepare environement for React/JSX testing "@babel/register",
      exit: true,
      timeout: 15000,
      bail: true

    }))
    .pipe(sourcemaps.init())
     .pipe(through2.obj(function (file, enc, cb) {
      const isSourceMap = /\.map$/.test(file.path);
      if (!isSourceMap) this.push(file);
      cb();
    }))
    .pipe(
      babel({
        presets: ['@babel/env'],
      }),
    )
    .pipe(uglify())
    .pipe(concat('scripts-frontend.min.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(DIST_PATH))
    .pipe(livereload())
    
});

// let gulp do some babel work and webpach help gulp understand es6 import export

gulp.task('scripts-backend', function(callback) {
  console.log('starting scripts task');

  

  gulp
    .src(SCRIPTS_PATH_BACKEND)
    .pipe(
      plumber(function(err) {
        console.log('Scripts Task Error');
        console.log(err);
        this.emit('end');
      }),
    ) // error document is not defined
    .pipe(mocha({
      reporter: 'list',
      //reporter:'mocha-lcov-reporter',
      require: [ "@babel/register"],
       // require: [ __dirname + '/lib/jsdom.js',"@babel/register"], //, "@babel/register"
      exit: true,
      timeout: 2000,
      bail: true

    }))
    .pipe(sourcemaps.init())
    .pipe(
      babel({
        presets: ['@babel/env'],
      }),
    )
    .pipe(uglify())
    .pipe(concat('scripts-backend.min.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(DIST_PATH))
    .pipe(livereload());

    
   
  

});


// this runs the babel config 













// gulp.task("webpack-server",
//   gulp.series(
   
//    "webpack-bundler"
//    ), 

//   function (callback) {
//    console.log("BIG BOSS !!!.... BUNDLER STARTED ....")
//    let configureWebpack = Object.create(webpackConfig);
//    configureWebpack.devtool = "eval"
//    configureWebpack.debug= true;
//    // configureWebpack.plugins = [
//         //new webpack.optimize.UglifyJsPlugin()
//    // ];
//    new WebpackDevServer(webpack(configureWebpack), {
//      publicPath: '/' + configureWebpack.output.publicPath,
//      stats: {
//       colors: true
//      },
//      hot: true
//    }).listen(2001, 'localhost', function(){
//      if(err) console.log(err)
//      console.log("powerpacked server:" + 2001)
//    })


// })



