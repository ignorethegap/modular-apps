var path = require('path'),
    fs = require('fs');
/**
 * manifests : array of relative paths to modules
 */
exports.karmaConfig = function(base, manifests, options) {
    var config = {
        basePath: base,

        browsers: ['PhantomJS'], // 'Firefox', PhantomJS
        frameworks: ['jasmine'],
        // reporters: ['progress','coverage', 'html'],

        // enable/disable colors in output
        colors: true,

        autoWatch: true,

        files: [],

        preprocessors: {},

        plugins: [
            'karma-jasmine',
            'karma-firefox-launcher',
            'karma-phantomjs-launcher',
            'karma-rollup-preprocessor'
        ],

        rollupPreprocessor: {
            rollup: {},
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

        var specPattern = manifest.paths.specPattern || '**/*.spec.js',
            source = manifest.paths.source || 'js';

        // put module in test based on its manifest
        config.preprocessors[path.join(location, specPattern)] = ['rollup'];
        config.files.push( source + '/' + specPattern );
    });

    return config;
};
