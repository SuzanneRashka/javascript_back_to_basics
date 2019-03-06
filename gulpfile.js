let gulp = require('gulp');
let sass = require('gulp-sass');
let browserSync = require('browser-sync').create();

let SCSS_SRC = 'app/scss/**/*.scss';
let SCSS_DEST = 'app/css';

gulp.task('compile_scss', function(){
  return gulp.src(SCSS_SRC)
  .pipe(sass())
  .pipe(gulp.dest(SCSS_DEST))
  .pipe(browserSync.reload({
    stream: true
  }))
});

gulp.task('browserSync', function(){
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
});

gulp.task('watch', ['browserSync', 'compile_scss'], function(){
  gulp.watch(SCSS_SRC, ['compile_scss']);
});

gulp.task('default', ['compile_scss', 'watch']);
