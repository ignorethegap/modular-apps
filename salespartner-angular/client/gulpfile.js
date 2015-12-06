var gulp = require('gulp'),
    browserify = require('browserify'),
    jshint = require('gulp-jshint'),
    htmlhint = require('gulp-htmlhint'),
    tap = require('gulp-tap'),
    plumber = require('gulp-plumber'),
    connect = require('gulp-connect');

gulp.task('dist', ['html', 'scripts', 'styles']);

gulp.task('watch', function() {
  gulp.watch(['./app.js', 'app/**/*.js'], ['scripts']).on('change', connect.reload);
  gulp.watch(['./styles/**.scss'])
});

gulp.task('test', function() {

});

gulp.task('html', function() {
  gulp.src('./*.html')
    .pipe(plumber())
    .pipe(htmlhint())
    .pipe(htmlhint.failReporter());
});

gulp.task('scripts', function() {
  gulp.src('./app/app.js')
    .pipe(plumber())
    .pipe(tap(function(file) {
      
    }))

});

gulp.task('styles', function() {

});
