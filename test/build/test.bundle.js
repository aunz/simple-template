module.exports =
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

/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { throw err; };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _tape = __webpack_require__(1);

	var _tape2 = _interopRequireDefault(_tape);

	var _index = __webpack_require__(3);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// var test = require('tape')

	(0, _tape2.default)('should throw', function (t) {
	  t.throws(function () {
	    (0, _index2.default)();
	  });
	  t.throws(function () {
	    (0, _index2.default)(null, null);
	  });
	  t.throws(function () {
	    (0, _index2.default)(null, {});
	  });
	  t.end();
	});

	(0, _tape2.default)('string replacement', function (t) {
	  var actual = (0, _index2.default)('My name is {{name}}, {{age}} years old, from {{place}}.', { name: 'kaka', age: 11, place: 'earth' });
	  t.equal(actual, 'My name is kaka, 11 years old, from earth.');

	  actual = (0, _index2.default)('{{n}}la{{n}}la{{n}}', { n: 3, m: 2 });
	  t.equal(actual, '3la3la3');

	  actual = (0, _index2.default)('{{n}}la{{n}}la{{n}}', { n: 3, n: 4 });
	  t.equal(actual, '4la4la4');

	  actual = (0, _index2.default)('{{ m }}', { m: 2 });
	  t.equal(actual, '{{ m }}');

	  t.end();
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("tape");

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(0);


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _defineProperty2 = __webpack_require__(5);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _extends3 = __webpack_require__(6);

	var _extends4 = _interopRequireDefault(_extends3);

	var _keys = __webpack_require__(4);

	var _keys2 = _interopRequireDefault(_keys);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Replace a string with multiple matches
	 * @arg {string} string 
	 * @arg {object} replacement
	 * @return {string}
	 * @example 
	 * template("My name is {{name}}, {{age}} years old.",{name:'kaka', age:11})
	 * // return "My name is kaka, 11 years old."
	 */

	exports.default = function (string, replacement) {
	  var map = (0, _keys2.default)(replacement).reduce(function (p, n) {
	    return (0, _extends4.default)({}, p, (0, _defineProperty3.default)({}, '{{' + n + '}}', replacement[n]));
	  }, {});

	  var re = new RegExp((0, _keys2.default)(map).join('|'), 'g');
	  return string.replace(re, function (match) {
	    return map[match];
	  });
	};

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("babel-runtime/core-js/object/keys");

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("babel-runtime/helpers/defineProperty");

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("babel-runtime/helpers/extends");

/***/ }
/******/ ]);