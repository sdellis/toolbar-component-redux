var c = require('../gulpfile.config');
var config = new c();
var gulp = require('gulp');
var mocha = require('gulp-mocha');

gulp.task('mocha', function () {
  gulp.src(config.directories.tests + '/*.js')
    .pipe(mocha({ reporter: 'list' }));
});
