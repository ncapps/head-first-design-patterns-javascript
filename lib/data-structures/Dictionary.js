"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _util = require("./util");

var _valuePair = require("./value-pair");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Dictionary =
/*#__PURE__*/
function () {
  function Dictionary() {
    var toStrFn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _util.defaultToString;

    _classCallCheck(this, Dictionary);

    this.toStrFn = toStrFn;
    this.table = {};
  }

  _createClass(Dictionary, [{
    key: "set",
    value: function set(key, value) {
      if (key != null && value != null) {
        var tableKey = this.toStrFn(key);
        this.table[tableKey] = new _valuePair.ValuePair(key, value);
        return true;
      }

      return false;
    }
  }, {
    key: "get",
    value: function get(key) {
      var valuePair = this.table[this.toStrFn(key)];
      return valuePair == null ? undefined : valuePair.value;
    }
  }, {
    key: "hasKey",
    value: function hasKey(key) {
      return this.table[this.toStrFn(key)] != null;
    }
  }, {
    key: "remove",
    value: function remove(key) {
      if (this.hasKey(key)) {
        delete this.table[this.toStrFn(key)];
        return true;
      }

      return false;
    }
  }, {
    key: "values",
    value: function values() {
      return this.keyValues().map(function (valuePair) {
        return valuePair.value;
      });
    }
  }, {
    key: "keys",
    value: function keys() {
      return this.keyValues().map(function (valuePair) {
        return valuePair.key;
      });
    }
  }, {
    key: "keyValues",
    value: function keyValues() {
      return Object.values(this.table);
    }
  }, {
    key: "forEach",
    value: function forEach(callbackFn) {
      var valuePairs = this.keyValues();

      for (var i = 0; i < valuePairs.length; i++) {
        var result = callbackFn(valuePairs[i].key, valuePairs[i].value);

        if (result === false) {
          break;
        }
      }
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this.size() === 0;
    }
  }, {
    key: "size",
    value: function size() {
      return Object.keys(this.table).length;
    }
  }, {
    key: "clear",
    value: function clear() {
      this.table = {};
    }
  }, {
    key: "toString",
    value: function toString() {
      if (this.isEmpty()) {
        return '';
      }

      var valuePairs = this.keyValues();
      var objString = "".concat(valuePairs[0].toString());

      for (var i = 1; i < valuePairs.length; i++) {
        objString = "".concat(objString, ",").concat(valuePairs[i].toString());
      }

      return objString;
    }
  }]);

  return Dictionary;
}();

exports["default"] = Dictionary;