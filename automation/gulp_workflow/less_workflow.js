// Styles For LESS

// Less plugins
let gulp = require('gulp');
let less = require('gulp-less');
let LessAutoprefix = require('less-plugin-autoprefix');
let livereload = require('gulp-livereload');
let minifyCss = require('gulp-minify-css');
let autoprefixer = require('gulp-autoprefixer');
let plumber = require('gulp-plumber');
let sourcemaps = require('gulp-sourcemaps');

let lessAutoprefix = new LessAutoprefix({
  browsers: ['last 2 versions'],
});

// File paths
let DIST_PATH = './UI/distVanillagulp';

gulp.task('less', function() {
  console.log('starting styles task');
  return gulp
    .src('./UI/less/styles.less')
    .pipe(
      plumber(function(err) {
        console.log('Styles Task Error');
        console.log(err);
        this.emit('end');
      }),
    )
    .pipe(sourcemaps.init())
    .pipe(
      less({
        plugins: [lessAutoprefix],
      }),
    )
    .pipe(minifyCss())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(DIST_PATH))
    .pipe(livereload());
});
