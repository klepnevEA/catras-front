
'use strict';

module.exports = function() {
  $.gulp.task('copy:sass', function() {
    return $.gulp.src('./source/css/sass/**/*.*', { since: $.gulp.lastRun('copy:sass') })
      .pipe($.gulp.dest($.config.root + '/sass'))
      .pipe($.browserSync.stream()); 
  });
};