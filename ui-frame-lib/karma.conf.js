var karmaConfig = require('../fast-frontend-development').karmaConfig;

module.exports = function(config) {
    config.set(karmaConfig(__dirname, ['.'], { title:'UI Frame'}));
};
