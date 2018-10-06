var gulp = require('gulp');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');
var pug = require('gulp-pug');
var plumber = require('gulp-plumber');

gulp.task('reload', function() {
  browserSync.reload();
});

gulp.task('serve', ['sass', 'pug'], function() {
    browserSync({
      server: 'dist',
      index: '../dist/html/index.html',
    });

    gulp.watch('dist/html/*.html', ['reload']);
    gulp.watch('dist/css/*.css', ['reload']);
    gulp.watch('src/pug/**/*.pug', ['pug']);
    gulp.watch('src/sass/**/*.sass', ['sass']);
});

gulp.task('sass', function() {
  return gulp.src('src/sass/*.sass')
  .pipe(plumber())
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('dist/css'))
  .pipe(browserSync.stream());
})

gulp.task('pug', function buildHTML() {
  return gulp.src('src/pug/*.pug')
  .pipe(pug({
  }))
  .pipe(gulp.dest('dist/html'))
  .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);
