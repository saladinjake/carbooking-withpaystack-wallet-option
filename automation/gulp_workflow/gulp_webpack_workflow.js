// gulpfile.js

const gulp = require('gulp');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const webpackConfig = require('./webpack-workflow/webpack.config.js');
// const mocha = require('gulp-mocha')

let TEST_SCRIPTS_PATH = './UI/js/test/**/*.js';

// gulp.task('js', () => {
//   gulp.src('./src/js/index.js')
//     .pipe(webpackStream(webpackConfig), webpack)
//     .pipe(gulp.dest('./dist/js'));
// });



// gulp.task('test-vanilla-js', () => {
//   gulp.src(TEST_SCRIPTS_PATH)
//     .pipe(mocha())
//     .on("error", () =>{
//     	gulp.emit("end")
//     })
// });