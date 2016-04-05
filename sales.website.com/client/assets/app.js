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
  // console.info('person:',person.fullName);
  return person;
}

// new Promise

// import * from "ui-frame";
// import * from "user-state";
test();

},{"address":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _isAddressLike = require('./isAddressLike.fn');

Object.defineProperty(exports, 'isAddressLike', {
    enumerable: true,
    get: function get() {
        return babelHelpers.interopRequireDefault(_isAddressLike).default;
    }
});

var Address = exports.Address = function Address() {
    babelHelpers.classCallCheck(this, Address);
};

},{"./isAddressLike.fn":3}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isAddressLike;
function isAddressLike(something) {
    return something && (something.address && something.address.uniqueAddressId || something.uniqueAddressId);
}

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJjbGllbnQvYXBwL2FwcC5qcyIsImNsaWVudC9tb2R1bGVzL2FkZHJlc3MvaW5kZXguanMiLCJjbGllbnQvbW9kdWxlcy9hZGRyZXNzL2lzQWRkcmVzc0xpa2UuZm4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTs7QUFFQSxJQUFBLFdBQUEsUUFBQTs7QUFFQSxJQUFJLFlBQVksYUFBYSxzQkFBc0I7O0FBQW5ELFNBQVMsT0FBTztFQUNkLElBQUksU0FBUyxJQUFBLFVBQUEsUUFBWTtJQUN2QixXQUFXO0lBQ1gsVUFBVTtJQUNWLEtBQUs7SUFDTCxNQUFNOzs7RUFMTSxPQVFQOzs7Ozs7O0FBS1Q7czJCQUtzMkI7O0FDdEJ0MkI7O0FBRUEsT0FBTyxlQUFlLFNBQVMsY0FBYztJQUN6QyxPQUFPOzs7QUFHWCxJQUFJLGlCQUFpQixRQUFROztBQUU3QixPQUFPLGVBQWUsU0FBUyxpQkFBaUI7SUFDNUMsWUFBWTtJQUNaLEtBQUssU0FBUyxNQUFNO1FBQ2hCLE9BQU8sYUFBYSxzQkFBc0IsZ0JBTDFDOzs7O0FBU1IsSUFmYSxVQUFBLFFBQUEsVUFDVCxTQURTLFVBQ0s7SUFlZCxhQUFhLGVBQWUsTUFoQm5COzs4YUFrQmlhOztBQ2xCOWE7O0FBRUEsT0FBTyxlQUFlLFNBQVMsY0FBYztJQUN6QyxPQUFPOztBQUVYLFFBQVEsVUFIZ0I7QUFBVCxTQUFTLGNBQWMsV0FBVztJQUM3QyxPQUFPLGNBQWMsVUFBVyxXQUFXLFVBQVUsUUFBUSxtQkFBb0IsVUFBVTs7MG9CQU0yaUIiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLy8gaW1wb3J0ICogZnJvbSBcInVpLWZyYW1lXCI7XG4vLyBpbXBvcnQgKiBmcm9tIFwidXNlci1zdGF0ZVwiO1xuaW1wb3J0IEFkZHJlc3MgZnJvbSBcImFkZHJlc3NcIjtcblxuZnVuY3Rpb24gdGVzdCgpIHtcbiAgdmFyIHBlcnNvbiA9IG5ldyBBZGRyZXNzKHtcbiAgICBmaXJzdE5hbWU6IFwiQ2hyaXN0b3BoXCIsXG4gICAgbGFzdE5hbWU6IFwiQnVyZ2RvcmZcIixcbiAgICB6aXA6IFwiODAwMFwiLFxuICAgIGNpdHk6IFwiWsO8cmljaFwiXG4gIH0pO1xuICAvLyBjb25zb2xlLmluZm8oJ3BlcnNvbjonLHBlcnNvbi5mdWxsTmFtZSk7XG4gIHJldHVybiBwZXJzb247XG59XG5cbi8vIG5ldyBQcm9taXNlXG5cbnRlc3QoKTtcbiIsImV4cG9ydCBjbGFzcyBBZGRyZXNzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIH1cbn1cblxuZXhwb3J0IHtkZWZhdWx0IGFzIGlzQWRkcmVzc0xpa2V9IGZyb20gJy4vaXNBZGRyZXNzTGlrZS5mbic7XG4iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzQWRkcmVzc0xpa2Uoc29tZXRoaW5nKSB7XG4gICAgcmV0dXJuIHNvbWV0aGluZyAmJiAoKHNvbWV0aGluZy5hZGRyZXNzICYmIHNvbWV0aGluZy5hZGRyZXNzLnVuaXF1ZUFkZHJlc3NJZCkgfHwgc29tZXRoaW5nLnVuaXF1ZUFkZHJlc3NJZCk7XG59XG4iXX0=
