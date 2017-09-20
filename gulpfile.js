var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');


gulp.task('sass', function () {
  return gulp.src('./assets/css/sass/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions', 'android 4'],
      cascade: false
    }))
    .pipe(cleanCSS())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./assets/css/build'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./assets/css/sass/**/*.scss', ['sass']);
});
