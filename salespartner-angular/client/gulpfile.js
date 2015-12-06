var gulp = require('gulp'),
    gutil = require('gulp-util'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    path = require('path'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    browserify = require('browserify'),
    watchify = require('watchify'),
    jshint = require('gulp-jshint'),
    htmlhint = require('gulp-htmlhint'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    tap = require('gulp-tap'),
    plumber = require('gulp-plumber'),
    connect = require('gulp-connect');

var appEntryFile = './app/app.js',
    appOutputDir = './assets/',
    appOutputFile = 'app.js';

gulp.task('dist', ['html', 'scripts', 'styles']);

gulp.task('watch', function() {

  browserSync({
    server: {
      baseDir: './'
    }
  });
  getBundler().on('update', function() {
      gulp.start('scripts-persistent');
  });

  // gulp.watch(['./app/app.js', 'app/**/*.js'], ['scripts']).on('change', connect.reload);
  gulp.watch(['./styles/**.scss'], ['styles']).on('change', reload);
});

gulp.task('serve', function() {
  browserSync({
    server: {
      baseDir: './'
    }
  });
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

// review alternative https://github.com/thoughtram/es6-babel-browserify-boilerplate/blob/master/gulpfile.js

var bundler;
function getBundler() {
  if (!bundler) {
    var conf = Object.create(watchify.args);
    conf.debug = true;
    conf.transform = [ngHtml2Js, 'browserify-ngannotate'];
    bundler = watchify(browserify(appEntryFile, conf));
  }
  return bundler;
};

function bundle() {
  return getBundler()
    .transform('babelify', {
      presets: ['es2015'],
      sourceMapRelative: __dirname
    })
    .bundle()
    .on('error', function(err) { console.log('Error: ' + err.message); })
    .pipe(source(appOutputFile))
    .pipe(gulp.dest(appOutputDir))
    .pipe(reload({ stream: true }));
}

gulp.task('scripts-persistent', function() {
  return bundle();
});

gulp.task('scripts', ['scripts-persistent'], function() {
  process.exit(0);
});


gulp.task('multiple-scripts', function() {
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
                    transform: [ngHtml2Js, 'browserify-ngannotate']
                }).transform("babelify").bundle();
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
        // .pipe(minifycss())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./assets'));
});

/*
notes:

https://gist.github.com/substack/68f8d502be42d5cd4942
https://github.com/thoughtram/es6-babel-browserify-boilerplate/issues

*/
