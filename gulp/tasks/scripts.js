var gulp = require('gulp'),
uglify = require('gulp-uglify');

gulp.task('scripts', function() {
  return gulp.src('./app/assets/scripts/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./app/temp/scripts'));
});
