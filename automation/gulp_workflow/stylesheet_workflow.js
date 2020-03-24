let gulp = require('gulp');
let uglify = require('gulp-uglify');
let livereload = require('gulp-livereload');
let concat = require('gulp-concat');
let minifyCss = require('gulp-minify-css');
let autoprefixer = require('gulp-autoprefixer');
let plumber = require('gulp-plumber');
let sourcemaps = require('gulp-sourcemaps');
// File paths
let DIST_PATH = './UI/distVanillagulp';
let CSS_PATH_FRONTEND = './UI/css/mainstyles.css';
let CSS_PATH_BACKEND = './UI/css/mainstyles_backend.css';
// // Styles
gulp.task('styles', function() {
  console.log('starting styles task');
  return gulp
    .src(CSS_PATH_FRONTEND)
    .pipe(
      plumber(function(err) {
        console.log('Styles Task Error');
        console.log(err);
        this.emit('end');
      }),
    )
    .pipe(sourcemaps.init())
    .pipe(autoprefixer())
    .pipe(concat('styles.min.css'))
    .pipe(minifyCss())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(DIST_PATH))
    .pipe(livereload());
});

gulp.task('styles_backend', function() {
  console.log('starting styles task');
  return gulp
    .src(CSS_PATH_BACKEND)
    .pipe(
      plumber(function(err) {
        console.log('Styles Task Error');
        console.log(err);
        this.emit('end');
      }),
    )
    .pipe(sourcemaps.init())
    .pipe(autoprefixer())
    .pipe(concat('styles_backend.min.css'))
    .pipe(minifyCss())
    .pipe(sourcemaps.write())
    .on('error', function(errInfo) {
      console.log(errInfo.toString());
    })
    .pipe(gulp.dest(DIST_PATH))
    .pipe(livereload());
});
