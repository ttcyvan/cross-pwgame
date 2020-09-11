"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isNotNull = void 0;

/**
 * @function isNotNull
 * @description check if all args are not null
 *
 * @param {unknown[]} values - any arguments to checks
 * @return {boolean}
 *
 * @example
 * isNotNull(x, y, z, process.env.PORT)
 *
 */
var isNotNull = function isNotNull() {
  for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }

  for (var _i = 0, _values = values; _i < _values.length; _i++) {
    var v = _values[_i];

    if (v === undefined || v === null) {
      return false;
    }
  }

  return true;
};

exports.isNotNull = isNotNull;