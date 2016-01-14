import gulp  from 'gulp';
import loadPlugins from 'gulp-load-plugins';
import del  from 'del';
import glob  from 'glob';
import path  from 'path';
import fs from 'fs';
import {Instrumenter} from 'isparta';
import webpack from 'webpack';
import webpackStream from 'webpack-stream';
import source  from 'vinyl-source-stream';

// import mochaGlobals from './test/setup/.globals';
import manifest  from './package.json';

// Load all of our Gulp plugins
const $ = loadPlugins();

// Gather the library data from `package.json`
const config = manifest.babelBoilerplateOptions;
const mainFile = manifest.main;
const destinationFolder = path.dirname(mainFile);
const exportFileName = path.basename(mainFile, path.extname(mainFile));

// Remove the built files
gulp.task('clean', cleanDist);

// Remove our temporary files
gulp.task('clean-tmp', cleanTmp);

// Lint our source code
gulp.task('lint-src', lintSrc);

// Lint our test code
gulp.task('lint-test', lintTest);

// Lint this file
gulp.task('lint-gulpfile', lintGulpfile);

// Lint everything
gulp.task('lint', ['lint-src', 'lint-test', 'lint-gulpfile']);

// Build two versions of the library
gulp.task('build', ['lint', 'clean'], build);

// Lint and run our tests
gulp.task('test', ['lint'], test);

// Set up coverage and run tests
gulp.task('coverage', ['lint'], coverage);

// Set up a livereload environment for our spec runner `test/runner.html`
gulp.task('test-browser', ['lint', 'clean-tmp'], testBrowser);

// Run the headless unit tests as you make changes.
gulp.task('watch', watch);

// An alias of test
gulp.task('default', ['test']);


function cleanDist(done) {
  del([destinationFolder]).then(() => done());
}

function cleanTmp(done) {
  del(['tmp']).then(() => done());
}

function onError() {
  $.util.beep();
}

// Lint a set of files
function lint(files) {
  return gulp.src(files)
    .pipe($.plumber())
    .pipe($.eslint())
    .pipe($.eslint.format())
    .pipe($.eslint.failOnError())
    .pipe($.jscs())
    .pipe($.jscs.reporter('fail'))
    .on('error', onError);
}

function lintSrc() {
  return lint(['js/**/*.js','!*.spec.js']);
}

function lintTest() {
  return lint('*.spec.js');
}

function lintGulpfile() {
  return lint('gulpfile.babel.js');
}


var browserify = require('browserify'),
    proxyquire = require('proxyquireify');

gulp.task('js', function() {
    browserify()
      .plugin(proxyquire.plugin)
      .require(require.resolve('./foo.test'), { entry: true })
      .bundle()
      .pipe(fs.createWriteStream(__dirname + '/bundle.js'));
});

var srcFiles      = ['lib/**/*.js'];

function build() {
  return gulp.src(srcFiles)
    .pipe($.babel({
      stage:2,
      optional: [
        "es7.decorators",
        "es7.classProperties",
        "runtime"
      ]
    }))
    .pipe(gulp.dest('dist'));
}

function watch() {
  gulp.watch(srcFiles, ['build']);
}

function test() {

}

function testBrowser() {

}

function coverage() {

}
