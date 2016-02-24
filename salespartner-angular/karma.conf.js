var karmaConfig = require('../fast-frontend-development').karmaConfig,
    path = require('path');

module.exports = function(config) {
    config.set(karmaConfig('..',
        ['salespartner-angular','ui-frame-lib','user-state-lib','address-lib'],
        { title:'Sales Partner' }));
};
