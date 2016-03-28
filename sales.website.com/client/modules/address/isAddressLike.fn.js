'use strict';

export default function isAddressLike(something) {
    return something && ((something.address && something.address.uniqueAddressId) || something.uniqueAddressId);
}
