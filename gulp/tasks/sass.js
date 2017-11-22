'use strict';

module.exports = function() {
	var path = require('path');
  $.gulp.task('sass', function() {
    return $.gulp.src('./source/css/scss/style.scss')
      .pipe($.gp.sourcemaps.init())
      .pipe($.gp.sass()).on('error', $.gp.notify.onError({ title: 'Style' }))
      .pipe($.gp.autoprefixer({ browsers: $.config.autoprefixerConfig }))
      .pipe($.gp.sourcemaps.write())
      .pipe($.gulp.dest($.config.root + '/css/css'))
      .pipe($.browserSync.stream());
  })
};
