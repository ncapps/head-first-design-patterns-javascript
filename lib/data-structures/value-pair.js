"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ValuePair = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ValuePair =
/*#__PURE__*/
function () {
  function ValuePair(key, value) {
    _classCallCheck(this, ValuePair);

    this.key = key;
    this.value = value;
  }

  _createClass(ValuePair, [{
    key: "toString",
    value: function toString() {
      return "[#".concat(this.key, ": ").concat(this.value, "]");
    }
  }]);

  return ValuePair;
}();

exports.ValuePair = ValuePair;