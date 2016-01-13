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

var babel = require('gulp-babel');

var srcFiles      = ['lib/**/*.js'];

gulp.task('build', function() {
  return gulp.src(srcFiles)
    .pipe(babel({
      stage:2,
      optional: [
        "es7.decorators",
        "es7.classProperties",
        "runtime"
      ]
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
  gulp.watch(srcFiles, ['build']);
});

gulp.task('default', ['build'], function () {});
