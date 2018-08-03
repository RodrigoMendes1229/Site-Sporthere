var gulp = require('gulp');
var minifyCSS = require('gulp-csso');
var uglify = require('gulp-uglify');

gulp.task('css', function(){
  return gulp.src('css/*.css')
    .pipe(minifyCSS())
    .pipe(gulp.dest('dest/css'))
});


gulp.task('js' , function(){
  return gulp.src('js/*.js')
  .pipe(uglify())
  .pipe(gulp.dest('dest/js'))
});
