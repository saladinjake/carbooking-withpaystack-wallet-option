// let gulp = require('gulp');
// let livereload = require('gulp-livereload');
// let del = require('del');
import gulp from "gulp";
import livereload from 'gulp-livereload';
import del from 'del';

// File paths
let DIST_PATH = './UI/distVanillagulp';
let PAGES_PATH = './UI/**/*.html';
let TEMPLATES_PATH = './UI/templates/**/*.hbs';
let SCRIPTS_PATH_FRONTEND = ['../UI/js/Main.js', '../UI/js/core/**/*.js', '../UI/js/frontend/**/*.js' ];
let SCRIPTS_PATH_BACKEND = './UI/js/backend/**/*.js';
let CSS_PATH_FRONTEND = './UI/css/mainstyles.css';
let CSS_PATH_BACKEND = './UI/css/mainstyles_backend.css';
let LESS_PATH = './UI/less/**/*.less';
let SASS_PATH = './UI/sass/**/*.scss';
let IMAGES_PATH = './UI/images/**/*.{png,jpeg,jpg,svg,gif}';

require('../server/static_server/server.js');


let TEST_SCRIPTS_PATH = ['./UI/js/**/*.js','./UI/js/test/**/*.js'];
//let webpack = require('webpack');
//let webpackConfig = require("../webpack_workflow/webpack-for-vanillajs-gulp/webpack.config.dev.js");


var karmaServer = require('karma').server;

const { resolve } = require('path');
const KarmaEntry = resolve(__dirname, '../karma.conf.js'); //absolute path resolver

/* TEST SETUP */

gulp.task('test', function (done) {
    karmaServer.start({
        configFile: KarmaEntry,
        
        singleRun: true
    }, function(){
        done();
    });

    
});


// Clean output directory
gulp.task('clean', () => del(['./UI/distVanillagulp']));

gulp.task('default',
  gulp.series(
     'clean',
     'test'
  ),
  //outdated way
  // [

  //   'styles_backend',
  //   'scripts-frontend',
  //   'scripts-backend',
  // ],
  function() {
    console.log('Starting default task...');
  },
);


gulp.task('watch',
  gulp.series(
    'clean',
    'pages',
    'images',
    'templates',
    'styles',
    'styles_backend',
    'scripts-frontend',
    'scripts-backend',
    //'run-test-first',
    //"webpack-bundler" // handles the test runner that handles both scripts-frontend && scripts-backend
    //"webpack-server"
   // awesome saladin jake !!!!
  ),

  () => {
      console.log('Starting watch task');
      
      livereload.listen({
        start: true,
        port: 2000
      });
      gulp.watch(['./UI/js/**/*.js','./UI/js/testswithGulp/**','./karma.conf.js','./Gruntfile.js'], ['test']); // frontend vanilla
      gulp.watch(PAGES_PATH, ['pages']);
      gulp.watch(SCRIPTS_PATH_FRONTEND, ['scripts-frontend']);
      gulp.watch(SCRIPTS_PATH_BACKEND, ['scripts-backend']);
      gulp.watch(CSS_PATH_FRONTEND, ['styles']);
      gulp.watch(CSS_PATH_BACKEND, ['styles_backend']);
      // gulp.watch(LESS_PATH, ['less']);
      // gulp.watch(SASS_PATH, ['sass']);
     

      gulp.watch(TEMPLATES_PATH, ['templates']);
});


