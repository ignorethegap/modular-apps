import gulp  from 'gulp';
import loadPlugins from 'gulp-load-plugins';
import del  from 'del';
import glob  from 'glob';
import path  from 'path';
import fs from 'fs';
import {Instrumenter} from 'isparta';
import source  from 'vinyl-source-stream';
import {server as karmaServer} from 'karma';

//- import mochaGlobals from './test/setup/.globals';
import manifest  from './package.json';

// Load all of our Gulp plugins
// They can be accessed as a map. So `gulp-foo` can be used as `$.foo`.
const $ = loadPlugins();

// Gather the library data from `package.json`
const paths = manifest.paths;
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
gulp.task('build', ['lint', 'clean', 'js'], build);

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
    // .pipe($.jscs.reporter('fail'))
    .on('error', onError);
}

// Lint JS source skipping test source code
function lintSrc() {
  return lint([paths.source+'/**/*.js','!*.spec.js']);
}

// Lint test Specs
function lintTest() {
  return lint('*.spec.js');
}

// Lint of Gulp file
function lintGulpfile() {
  // return lint('gulpfile.babel.js');
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

var srcFiles      = [paths.source+'/**/*.js'];

// Make ES5 version of the source code
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
    .pipe(gulp.dest(paths.dist));
}

function watch() {
  gulp.watch(srcFiles, ['build']);
}

function test(done) {
    return karmaServer.start({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, done);
}

function testBrowser() {

}

function coverage() {

}

gulp.task('rollup', function() {
  var rollup = require('rollup');

  rollup.rollup({
    entry: 'index.js',
    format: 'es6',
    onwarn: function(message) {
      console.warn(message);
    },
    plugins: [
    ]
  }).then(function(bundle) {
    var code = bundle.generate({
      format: 'es6'
    }).code;
    console.log(code);
  });
});
