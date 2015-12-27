'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends3 = require('babel-runtime/helpers/extends');

var _extends4 = _interopRequireDefault(_extends3);

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
  var map = (0, _keys2.default)(replacement).reduce(function (p, n) {
    return (0, _extends4.default)({}, p, (0, _defineProperty3.default)({}, '{{' + n + '}}', replacement[n]));
  }, {});

  var re = new RegExp((0, _keys2.default)(map).join('|'), 'g');
  return string.replace(re, function (match) {
    return map[match];
  });
};