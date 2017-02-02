
// require modules
const gulp         = require('gulp');
const scss         = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const plumber      = require('gulp-plumber');
const sourcemaps   = require('gulp-sourcemaps');
const babel        = require('gulp-babel');
const uglify       = require('gulp-uglify');

// styles
gulp.task('style', function() {
    return gulp.src('scss/main.scss')
        .pipe(plumber())
        .pipe(autoprefixer({
          browsers: ['last 2 versions']
        }))
        .pipe(sourcemaps.init())
        .pipe(scss())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('css'));
});

// scripts
gulp.task('scripts', function() {
    return gulp.src('js/*.js')
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(babel({
          presets: ['es2015']
        }))
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('js/min'));
});

// gulp watch
gulp.task('watch', function() {
    gulp.watch('scss/**/*.scss', ['style']);
    gulp.watch(['js/main.js', 'index.html'], ['scripts']);
});

// gulp default
gulp.task('default', ['style', 'scripts', 'watch']);
