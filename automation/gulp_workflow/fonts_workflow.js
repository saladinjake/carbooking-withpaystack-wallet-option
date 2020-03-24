var gulp        = require('gulp'),
 plumber     = require('gulp-plumber'),
fontmin     = require('gulp-fontmin');


/**
 * Generate font css &
 * Minify fonts css into one
 * & Concat font css with all css
 */
gulp.task('generate-fonts-css', function ()
{
    return gulp.src(['UI/fonts/Lato/*.ttf',
        'UI/fonts/PT_Sans/*.ttf',
        'UI/fonts/Roboto_Condensed/*.ttf',
        'UI/fonts/Karla/*.ttf'
    ])
        .pipe(plumber())
        .pipe(fontmin())
        .pipe(gulp.dest('distVanillagulp/fonts'));
});