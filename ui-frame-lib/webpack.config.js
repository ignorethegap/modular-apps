var path = require('path'),
    webpack = require('webpack'),
    manifest = require('./package.json'),
    entryPath = '.' + path.join('/', manifest.main),
    sourcePath = path.join(__dirname, manifest.paths.source),
    bundleName = manifest.name + '.js';

console.log('entry=', entryPath);

module.exports = {
    entry: entryPath,
    output: {
        path: path.join(__dirname, manifest.paths.dist),
        filename: bundleName
    },
    module: {
        loader: [
            {
                loader: 'babel-loader',
                test: sourcePath,
                query: {
                    presets: 'es2015'
                }
            }
        ]
    },
    plugins: [
        // Avoid publishing files when compilation fails
        new webpack.NoErrorsPlugin()
    ],
    stats: {
        // Nice colored output
        colors: true
    },
    // Create Sourcemaps for the bundle
    devtool: 'source-map'
};
