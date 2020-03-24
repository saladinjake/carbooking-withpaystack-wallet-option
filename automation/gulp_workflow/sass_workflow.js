// File paths
let DIST_PATH = './UI/distVanillagulp';
let gulp = require('gulp');
let livereload = require('gulp-livereload');
let autoprefixer = require('gulp-autoprefixer');
let plumber = require('gulp-plumber');
let sourcemaps = require('gulp-sourcemaps');
let sass = require('gulp-sass');
//  Styles For SCSS
gulp.task('sass', function() {
  console.log('starting styles task');
  return gulp
    .src('./UI/sass/styles.scss')
    .pipe(
      plumber(function(err) {
        console.log('Styles Task Error');
        console.log(err);
        this.emit('end');
      }),
    )
    .pipe(sourcemaps.init())
    .pipe(autoprefixer())
    .pipe(
      sass({
         noCache: true,
        outputStyle: 'compressed',
      }),
    )
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(DIST_PATH))
    .pipe(livereload());
});
