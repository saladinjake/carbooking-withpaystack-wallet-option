// Handlebars plugins
let handlebars = require('gulp-handlebars');
let handlebarsLib = require('handlebars');
let declare = require('gulp-declare');
let wrap = require('gulp-wrap');
let gulp = require('gulp');
let concat = require('gulp-concat');
let livereload = require('gulp-livereload');
// File paths
let DIST_PATH = './UI/distVanillagulp';
let TEMPLATES_PATH = './UI/templates/**/*.hbs';
gulp.task('templates', function() {
  return gulp
    .src(TEMPLATES_PATH)
    .pipe(
      handlebars({
        handlebars: handlebarsLib,
      }),
    )
    .pipe(wrap('Handlebars.template(<%= contents %>)'))
    .pipe(
      declare({
        namespace: 'templates',
        noRedeclare: true,
      }),
    )
    .pipe(concat('templates.js'))
    .pipe(gulp.dest(DIST_PATH))
    .pipe(livereload());
});
