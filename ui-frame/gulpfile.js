var gulp = require('gulp'),
    connect = require('gulp-connect'),
    browserify = require('browserify'),
    proxyquire = require('proxyquireify');

gulp.task('js', function() {
    browserify()
      .plugin(proxyquire.plugin)
      .require(require.resolve('./foo.test'), { entry: true })
      .bundle()
      .pipe(fs.createWriteStream(__dirname + '/bundle.js'));
});
