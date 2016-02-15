var path = require('path'),
    fs = require('fs'),
    rollupPluginIstanbul = require('rollup-plugin-istanbul');
/**
 * manifests : array of relative paths to modules
 */
exports.karmaConfig = function(base, manifests, options) {
    var specPaths = [], jsPaths = [];

    var config = {
        basePath: base,

        browsers: ['Firefox'], // 'Firefox', PhantomJS
        frameworks: ['jasmine'],
        reporters: ['progress','coverage', 'kjhtml'],

        // enable/disable colors in output
        colors: true,

        autoWatch: true,

        files: [],

        preprocessors: {},

        plugins: [
            'karma-eslint',
            'karma-jscs-preprocessor',
            'karma-jasmine',
            'karma-coverage',
            'karma-jasmine-html-reporter',
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-phantomjs-launcher',
            'karma-rollup-preprocessor'
        ],

        eslint: {
            stopOnError: false,
            stopOnWarning: true
        },

        // optionally, configure the reporter
        coverageReporter: {
          type : 'html',
          dir : 'coverage/'
        },

        rollupPreprocessor: {
            rollup: {
                plugins: []
            },
            bundle: {
                sourceMap: 'inline'
            }
        }
    };

    // fit in custom options
    for(var n in options) { config[n] = options[n]; }

    // apply each of the modules
    manifests.forEach(function(location) {
        var manifest = require( path.join(base, location, 'package.json') );
        if (!manifest) {
            console.warn('No package.json in',location);
            return;
        }
        if (!manifest.paths) {
            console.warn('No paths information in the package.json for',location);
        }

        var paths = manifest.paths || {},
            specPattern = paths.specPattern || '*.spec.js',
            jsPattern = paths.jsPattern || '*.js',
            jsExtension = jsPattern.replace('*',''),
            source = paths.source || 'js',
            sourceMatch = '{'+path.join(location,source)+','+ path.join(location, source, '!(test|vendor)}'),
            jsIncludePattern = path.join(sourceMatch, '!('+specPattern.replace(jsExtension,'')+')'+jsExtension),
            specDir = paths.specDir || source,
            specMatch = '{'+path.join(location,specDir)+','+ path.join(location, specDir, '!(vendor)}');

        console.log(jsIncludePattern, specMatch, sourceMatch);

        config.preprocessors[jsIncludePattern] =  [
            // 'jscs',
            'eslint'
        ];

        jsPaths.push(jsIncludePattern);
        specPaths.push(path.join(specMatch, '**', specPattern));
    });

    jsPaths.forEach(function(jsPath) {
        config.files.push( { pattern:jsPath, included:false, watched: true });
    });

    specPaths.forEach(function(specPath) {
        // put module in test based on its manifest

        config.preprocessors[specPath] = [
            'rollup'
            ];

        config.files.push( specPath );
    });

    config.rollupPreprocessor.rollup.plugins.push(
        rollupPluginIstanbul({
            exclude: specPaths, // if source files are added to config.files a separate list must be maintained
            instrumenterConfig: {
                // http://gotwarlost.github.io/istanbul/public/apidocs/classes/Instrumenter.html#method_Instrumenter
                esModules: true
            }
        })
    );

    config.rollupPreprocessor.rollup.plugins.push(
                require('rollup-plugin-babel')({
            presets: [
                require('babel-preset-es2015-rollup')
            ]
        })
    );

    // console.log('karma CONFIG',config);

    return config;
};
