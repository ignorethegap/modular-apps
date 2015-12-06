var gulp = require('gulp'),
    gutil = require('gulp-util'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    path = require('path'),
    browserify = require('browserify'),
    jshint = require('gulp-jshint'),
    htmlhint = require('gulp-htmlhint'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
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

var ngHtml2Js = require('browserify-ng-html2js')({
    //stripPrefix: resourceRoot + "/",
    extension: 'tpl.html'
});

gulp.task('scripts', function() {
  gulp.src('./app/app.js')
    .pipe(plumber())
    .pipe(tap(
        function(file) {
            var d = require('domain').create();
            d.on("error", function(err) {
                gutil.log(gutil.colors.red('Browserify compile error:'),
                    err.message,
                    '\n\t', gutil.colors.cyan('in file'), file.path);
            });
            d.run(function() {
                file.contents = browserify({
                    entries: file.path,
                    debug: true,
                    // defining transforms here will avoid crashing your stream
                    transform: [ngHtml2Js, 'debowerify', 'browserify-ngannotate']
                }).bundle();
            });
        }
        ))
    .pipe(buffer())
    .pipe(gulp.dest('./assets'))
    .pipe(rename({suffix: '.min'}))
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./assets'));
});

gulp.task('styles', function() {
    gulp.src('./assets/all.scss')
        .pipe(plumber())
        .pipe(sass({
            sourcemap: true,
            includePaths: ['./../styleguide/styles',path.join(__dirname,'..'),'bower_components']
        }))
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(minifycss())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./assets'));
});
