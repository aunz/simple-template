'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

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
	var keys = (0, _keys2.default)(replacement),
	    l = keys.length,
	    map = {},
	    re = '';

	while (l--) {
		map['{{' + keys[l] + '}}'] = replacement[keys[l]];
		re += '{{' + keys[l] + '}}';
		re += l ? '|' : '';
	}

	re = new RegExp(re, 'g');
	return string.replace(re, function (match) {
		return map[match];
	});
};