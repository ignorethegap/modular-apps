var gulp = require('gulp'),
    gutil = require('gulp-util'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    path = require('path'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    browserify = require('browserify'),
    watchify = require('watchify'),
//    jshint = require('gulp-jshint'),
    htmlhint = require('gulp-htmlhint'),
    rename = require('gulp-rename'),
    header = require('gulp-header'),
    // filter = require('gulp-filter'),
    uglify = require('gulp-uglify'),
    // bump = require('gulp-bump'),
    rollup = require('gulp-rollup'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    tap = require('gulp-tap'),
    plumber = require('gulp-plumber'),
    karma = require('karma'),
    connect = require('gulp-connect');

var appEntryFile = './client/app/app.js',
    appOutputDir = './client/assets/',
    appOutputFile = 'app.js',
    pkg = require('./package.json');

var extensions = ['.js'];

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

  // gulp.watch([appEntryFile, 'app/**/*.js'], ['scripts']).on('change', connect.reload);
  gulp.watch(['./styles/**.scss'], ['styles']).on('change', reload);
});

gulp.task('serve', function() {
  browserSync({
    server: {
      baseDir: './'
    }
  });
});

// gulp.task('test', function() {
//     console.log(__dirname);
// });

gulp.task('test', ['scripts-persistent'], function (done) {
    console.log(__dirname + '/karma.conf.js');
    return karma.server.start({
        configFile: path.join(__dirname,'karma.conf.js'),
        singleRun: true
    }, done);
});

gulp.task('html', function() {
  gulp.src('./*.html')
    .pipe(plumber())
    .pipe(htmlhint())
    .pipe(htmlhint.failReporter());
});

gulp.task('bundle', function() {
    gulp.src(appEntryFile, { read:false })
      .pipe(rollup({
          sourceMap: true
      }))
      .pipe(sourcemaps.write("."))
      .pipe(gulp.dest("dist"));
});

var ngHtml2Js = require('browserify-ng-html2js')({
    //stripPrefix: resourceRoot + "/",
    extension: 'tpl.html'
});

var bundler;
function getBundler() {
  if (!bundler) {
    var conf = Object.create(watchify.args);
    conf.entries = appEntryFile;
    conf.cache = {};
    conf.debug = true;
    conf.fullPaths = false;
    conf.paths = ['../node_modules','./client/modules'];
    conf.plugin = [watchify];
    bundler = browserify(conf);
  }
  return bundler;
};

function bundle() {
  return getBundler()
    .transform('babelify', {
      presets: ['es2015'],
      sourceMapRelative: __dirname
    })
    .transform(ngHtml2Js)
    .transform('browserify-ngannotate')
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
  gulp.src(appEntryFile)
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
    .pipe(gulp.dest(appOutputDir))
    .pipe(rename({suffix: '.min'}))
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(appOutputDir));
});

gulp.task('styles', function() {
    gulp.src(path.join(appOutputDir,'all.scss'))
        .pipe(plumber())
        .pipe(sass({
            sourcemap: true,
            includePaths: ['./../styleguide/styles',path.join(__dirname,'..'),'bower_components']
        }))
        .pipe(sourcemaps.init({loadMaps: true}))
        // .pipe(minifycss())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(appOutputDir));
});

/*
notes:

https://gist.github.com/substack/68f8d502be42d5cd4942
https://github.com/thoughtram/es6-babel-browserify-boilerplate/issues

*/
