module.exports = function(config) {
    config.set({
        basePath: __dirname,

        browsers: ['Firefox'], // 'Firefox', PhantomJS
        frameworks: ['jasmine'],
        // reporters: ['progress','coverage', 'html'],

        // enable/disable colors in output
        colors: true,

        autoWatch: true,

        files: [
            'js/for-name.attribute.spec.js'
        ],

        preprocessors: {
            '**/*.spec.js': ['rollup']
        },

        plugins: [
            'karma-jasmine',
            'karma-firefox-launcher',
            'karma-phantomjs-launcher',
            'karma-rollup-preprocessor'
        ],

        rollupPreprocessor: {
            rollup: {
                /*
                plugins: [
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
                ]
                */
            },
            bundle: {
                sourceMap: 'inline'
            }
        }
    });
};
