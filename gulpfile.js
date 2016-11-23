var c = require('./gulpfile.config');
var config = new c();
var gulp = require('gulp');
var requireDir = require('require-dir');
var runSequence = require('run-sequence');
var tasks = requireDir('./tasks');

gulp.task('default', function(cb) {
    runSequence('clean:dist', 'clean:examples', 'build', 'browserify', 'less', 'minify', 'bundle', 'bundle:typings', 'prependHeaders', 'sync', cb);
});

gulp.task('sync', ['copy:bundle', 'copy:css', 'copy:img', 'copy:typings']);

// gulp.task('test', ['lint', 'mocha']);
gulp.task('test', ['mocha']);
