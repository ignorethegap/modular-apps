(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _address = require("address");

var _address2 = babelHelpers.interopRequireDefault(_address);

function test() {
  var person = new _address2.default({
    firstName: "Christoph",
    lastName: "Burgdorf",
    zip: "8000",
    city: "Zürich"
  });
  console.info('person:', person.fullName);
}

// new Promise
// import * from "ui-frame";
// import * from "user-state";

},{"address":2}],2:[function(require,module,exports){
'use strict';

exports.Address = function () {};

exports.isAddressLike = require('./isAddressLike.fn');

},{"./isAddressLike.fn":3}],3:[function(require,module,exports){
'use strict';

module.exports = function isAddressLike(something) {
    return something && (something.address && something.address.uniqueAddressId || something.uniqueAddressId);
};

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJjbGllbnQvYXBwL2FwcC5qcyIsImNsaWVudC9tb2R1bGVzL2FkZHJlc3MvaW5kZXguanMiLCJjbGllbnQvbW9kdWxlcy9hZGRyZXNzL2lzQWRkcmVzc0xpa2UuZm4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTs7QUFFQSxJQUFJLFdBQVcsUUFBUTs7QUFFdkIsSUFBSSxZQUFZLGFBQWEsc0JBQXNCOztBQUFuRCxTQUFTLE9BQU87RUFDZCxJQUFJLFNBQVMsSUFBQSxVQUFBLFFBQVk7SUFDdkIsV0FBVztJQUNYLFVBQVU7SUFDVixLQUFLO0lBQ0wsTUFBTTs7RUFFUixRQUFRLEtBQUssV0FBVSxPQUFPOzs7Ozs7azVCQUMvQjs7QUNaRDs7QUFBQSxRQUFRLFVBQVUsWUFBVzs7QUFJN0IsUUFBUSxnQkFBZ0IsUUFBUTtzYkFDc1o7O0FDTHRiOztBQUVBLE9BQU8sVUFBVSxTQUFTLGNBQWMsV0FBVztJQUMvQyxPQUFPLGNBQWMsVUFBVyxXQUFXLFVBQVUsUUFBUSxtQkFBb0IsVUFBVTs7c3NCQUV1bUIiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLy8gaW1wb3J0ICogZnJvbSBcInVpLWZyYW1lXCI7XG4vLyBpbXBvcnQgKiBmcm9tIFwidXNlci1zdGF0ZVwiO1xuaW1wb3J0IEFkZHJlc3MgZnJvbSBcImFkZHJlc3NcIjtcblxuZnVuY3Rpb24gdGVzdCgpIHtcbiAgdmFyIHBlcnNvbiA9IG5ldyBBZGRyZXNzKHtcbiAgICBmaXJzdE5hbWU6IFwiQ2hyaXN0b3BoXCIsXG4gICAgbGFzdE5hbWU6IFwiQnVyZ2RvcmZcIixcbiAgICB6aXA6IFwiODAwMFwiLFxuICAgIGNpdHk6IFwiWsO8cmljaFwiXG4gIH0pO1xuICBjb25zb2xlLmluZm8oJ3BlcnNvbjonLHBlcnNvbi5mdWxsTmFtZSk7XG59XG5cbi8vIG5ldyBQcm9taXNlXG4iLCJleHBvcnRzLkFkZHJlc3MgPSBmdW5jdGlvbigpIHtcblxufTtcblxuZXhwb3J0cy5pc0FkZHJlc3NMaWtlID0gcmVxdWlyZSgnLi9pc0FkZHJlc3NMaWtlLmZuJykiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNBZGRyZXNzTGlrZShzb21ldGhpbmcpIHtcbiAgICByZXR1cm4gc29tZXRoaW5nICYmICgoc29tZXRoaW5nLmFkZHJlc3MgJiYgc29tZXRoaW5nLmFkZHJlc3MudW5pcXVlQWRkcmVzc0lkKSB8fCBzb21ldGhpbmcudW5pcXVlQWRkcmVzc0lkKTtcbn07XG4iXX0=
