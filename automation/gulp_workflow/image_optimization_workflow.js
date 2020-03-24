// Image compression
let gulp = require('gulp');
let imagemin    = require('gulp-imagemin');
let pngquant    = require('imagemin-pngquant');
//let imagemin = require('gulp-imagemin');
let imageminPngquant = require('imagemin-pngquant');
let plumber = require('gulp-plumber');
//let imageminJpegRecompress = require('imagemin-jpeg-recompress');
// File paths
let DIST_PATH = './UI/distVanillagulp/images';
let IMAGES_PATH = 'UI/images/*';
// Images
gulp.task('images', function() {
  return gulp
    .src(IMAGES_PATH)
    .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
    }))
    .pipe(plumber())
    .pipe(gulp.dest(DIST_PATH));
});
