var gulp = require('gulp');

gulp.task('test', function() {
  var gulpStylelint = require('gulp-stylelint');

  gulp.src('./**/*.less')
    .pipe(gulpStylelint({
      reporters: [
        {formatter: 'string', console: true}
      ]
    }));
});
