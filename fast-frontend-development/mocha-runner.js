// https://coderwall.com/p/qaebwq/running-mocha-tests-without-a-browser-not-even-phantomjs
/*jshint -W020 */
/*jshint -W117 */
// globals
jsdom = require('jsdom').jsdom;
document = jsdom('<html><head><script></script></head><body></body></html>');
window = document.createWindow();
jQuery = $ = require("jquery").create(window);
navigator = window.navigator = {};
DEBUG = false;
navigator.userAgent = 'NodeJs JsDom';
navigator.appVersion = '';

sinon = require('sinon');
chai = require('chai');
