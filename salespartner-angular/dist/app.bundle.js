/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "http://localhost:8080/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	eval("\"use strict\";\n\nvar _address = __webpack_require__(1);\n\nvar _address2 = _interopRequireDefault(_address);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction test() {\n  var person = new _address2.default({\n    firstName: \"Christoph\",\n    lastName: \"Burgdorf\",\n    zip: \"8000\",\n    city: \"Zürich\"\n  });\n  console.info('person:', person.fullName);\n}\n\n// new Promise\n// import * from \"ui-frame\";\n// import * from \"user-state\";\n\n/*****************\n ** WEBPACK FOOTER\n ** ./client/app/app.js\n ** module id = 0\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./client/app/app.js?");

/***/ },
/* 1 */
/***/ function(module, exports) {

	eval("\"use strict\";\n\nvar _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Address = (function () {\n    function Address(addr) {\n        _classCallCheck(this, Address);\n\n        this.firstName = addr.firstName;\n        this.lastName = addr.lastName;\n    }\n\n    _createClass(Address, [{\n        key: \"fullName\",\n        get: function get() {\n            return this.firstName + \" \" + this.lastName;\n        }\n    }]);\n\n    return Address;\n})();\n\nexports.Address = Address;\n\n/*****************\n ** WEBPACK FOOTER\n ** ../address-lib/index.js\n ** module id = 1\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///../address-lib/index.js?");

/***/ }
/******/ ]);