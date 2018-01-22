const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');

// Compile sass
gulp.task('sass', () => {
  return gulp.src(['src/scss/*.scss'])
  .pipe(sass())
  .pipe(gulp.dest('src/css'))
  .pipe(browserSync.stream());
});

// Watch & Serve
gulp.task('serve', ['sass'], () => {
  browserSync.init({
    server: './src'
  });
  gulp.watch(['src/scss/*.scss'], ['sass']);
  gulp.watch(['src/*.html']).on('change', browserSync.reload);
});

// Default task
gulp.task('default', ['serve']);