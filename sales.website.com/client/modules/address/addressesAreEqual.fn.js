'use strict';

module.exports = addressesAreEqualFactory;

var makeRecipientAddress = require('./makeRecipientAddress.fn');

function addressesAreEqualFactory() {
    /**
     * Compare two address-like objects. Specify options(optional) to adjust the comparison principle.
     *
     * @param first {Object} Address/RecipientAddress/InputAddress/CustomerDetails object or null
     * @param second {Object} Address/RecipientAddress/InputAddress/CustomerDetails object or null
     * @param options.loose {Boolean} If true and one of the addresses does not have an addressId do a loose comparison
     * @param options.requireRecipient {Boolean} If true and one of the addresses doesn't have recipient information return false
     * @returns true/false based o the equality of the two
     */
    return function addressesAreEqual(first, second, options) {
        options = options || {};
        var loose = options.loose,
            requireRecipient = options.requireRecipient;

        if (!first || !second) {
            return false;
        }
        first = makeRecipientAddress(first);
        second = makeRecipientAddress(second);

        if (requireRecipient && (!first.recipient || !second.recipient)) {
            return false;
        }
        if (first.recipient && second.recipient && differentEntity(first, second)) {
            return false;
        }
        var firstId = uniqueId(first), secondId = uniqueId(second);
        if (firstId === secondId && firstId !== undefined) {
            return true;
        }
        if (loose && (firstId === undefined || secondId === undefined)) {
            return looseEqual(first, second);
        }
        return false;
    };

    function differentEntity(first, second) {
        if (first.title !== second.title) {
            return true;
        }
        var sameCo = (first.recipient.careOf||null) === (second.recipient.careOf||null),
            sameLast = first.recipient.lastName === second.recipient.lastName;
        if (first.title === 'company' || first.title === 'COMPANY') {
            return  !((first.recipient.attentionTo||null) === (second.recipient.attentionTo||null) && sameLast &&
                    (first.recipient.nameExtension||null) === (second.recipient.nameExtension||null) && sameCo);
        } else {
            return  !(first.recipient.firstName === second.recipient.firstName && sameLast && sameCo);
        }
    }

    function uniqueId(address) {
        if (address.uniqueAddressId !== undefined) {
            return address.uniqueAddressId;
        }
        if (address.address && address.address.uniqueAddressId !== undefined) {
            return address.address.uniqueAddressId;
        }
    }

    function looseEqual(first, second) {
        var address1 = first.address || first,
            address2 = second.address || second;

        if (address1.street !== address2.street) {
            return false;
        }
        if (address1.houseNumber !== address2.houseNumber) {
            return false;
        }
        if (address1.poBox !== address2.poBox) {
            return false;
        }
        if (address1.zipCode !== address2.zipCode) {
            return false;
        }
        if (address1.city !== address2.city) {
            return false;
        }
        if (address1.country !== address2.country) {
            return false;
        }
        return true;
    }


}
