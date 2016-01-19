module.exports = require('fast-frontend-development/webpack.make')({
    base: __dirname,
    paths: require('./package.json').paths,
    BUILD: false,
    TEST: true
});
