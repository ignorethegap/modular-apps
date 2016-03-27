var karmaConfig = require('fast-frontend-development').karmaConfig,
    path = require('path');

module.exports = function(config) {
	var kc = karmaConfig(__dirname,
        ['.'],
        { title:'Sales Partner' });
	// console.log(kc);
    config.set(kc);
};
