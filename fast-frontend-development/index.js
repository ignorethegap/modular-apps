var path = require('path'),
    fs = require('fs'),
    rollupPluginIstanbul = require('rollup-plugin-istanbul');
/**
 * manifests : array of relative paths to modules
 */
exports.karmaConfig = function(base, manifests, options) {
    var specPaths = [];

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

    /*
    config.rollupPreprocessor.rollup.plugins = [
        require('rollup-plugin-istanbul')({
            exclude: ['** /*.spec.js'],
            instrumenter: {
                // http://gotwarlost.github.io/istanbul/public/apidocs/classes/Instrumenter.html#method_Instrumenter
                esModules: true
            }
        }),
        require('rollup-plugin-babel')({
            presets: [
                require('babel-preset-es2015-rollup')
            ]
        })
    ];
    */

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
            jsIncludePattern = '{'+location+','+path.join(location, '!(test|vendor)','**}', '!('+specPattern.replace(jsExtension,'')+')'+jsExtension),
            source = paths.source || 'js';

        // console.log(jsIncludePattern);

        config.preprocessors[jsIncludePattern] =  [
            // 'jscs', 
            'eslint' 
        ];

        specPaths.push(path.join(location, '**', specPattern)); 

        config.files.push( path.join(location, source, '**', specPattern) );
    });

    specPaths.forEach(function(specPath) {
        // put module in test based on its manifest
        config.preprocessors[specPath] = [
            'rollup'
            ];
    });

    config.rollupPreprocessor.rollup.plugins.push(
        require('rollup-plugin-istanbul')({
            exclude: config.files // if source files are added to config.files a separate list must be maintained
        })
    );

    return config;
};
