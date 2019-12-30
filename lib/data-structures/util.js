"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultToString = defaultToString;

function defaultToString(item) {
  if (item === null) {
    return 'NULL';
  } else if (item === undefined) {
    return 'UNDEFINED';
  } else if (typeof item === 'string' || item instanceof String) {
    return "".concat(item);
  }

  return item.toString();
}