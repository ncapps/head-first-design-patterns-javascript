"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var TV =
/*#__PURE__*/
function () {
  function TV(location) {
    _classCallCheck(this, TV);

    this.location = location;
    this.channel = 1;
  }

  _createClass(TV, [{
    key: "on",
    value: function on() {
      return "".concat(this.location, " TV is on");
    }
  }, {
    key: "off",
    value: function off() {
      return "".concat(this.location, " TV is off");
    }
  }, {
    key: "setInputChannel",
    value: function setInputChannel() {
      this.channel = 3;
      return "".concat(this.location, " TV channel is set for DVD");
    }
  }]);

  return TV;
}();

exports["default"] = TV;