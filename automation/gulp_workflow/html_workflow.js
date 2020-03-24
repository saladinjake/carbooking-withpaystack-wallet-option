let htmlmin = require('gulp-htmlmin');
let gulp = require('gulp');

let DIST_PATH = './UI/distVanillagulp';
// Gulp task to minify HTML files
gulp.task('pages', function() {
  return gulp
    .src(['./UI/**/*.html'])
    // .pipe(
    //   htmlmin({
    //     collapseWhitespace: true,
    //     removeComments: true,
    //   }),
    // )
    .pipe(gulp.dest(DIST_PATH));
});
