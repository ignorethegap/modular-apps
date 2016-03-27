'use strict';

module.exports = function isAddressLike(something) {
    return something && ((something.address && something.address.uniqueAddressId) || something.uniqueAddressId);
};
