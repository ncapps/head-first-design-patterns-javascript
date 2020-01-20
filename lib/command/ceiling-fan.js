"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CeilingFan =
/*#__PURE__*/
function () {
  function CeilingFan(location) {
    _classCallCheck(this, CeilingFan);

    this.SPEED = {
      HIGH: 3,
      MEDIUM: 2,
      LOW: 1,
      OFF: 0
    };
    this.location = location;
    this.level = this.SPEED.MEDIUM;
  }

  _createClass(CeilingFan, [{
    key: "high",
    value: function high() {
      this.level = this.SPEED.HIGH;
      return "".concat(this.location, " ceiling fan is on high");
    }
  }, {
    key: "medium",
    value: function medium() {
      this.level = this.SPEED.MEDIUM;
      return "".concat(this.location, " ceiling fan is on medium");
    }
  }, {
    key: "low",
    value: function low() {
      this.level = this.SPEED.LOW;
      return "".concat(this.location, " ceiling fan is on low");
    }
  }, {
    key: "off",
    value: function off() {
      this.level = this.SPEED.OFF;
      return "".concat(this.location, " ceiling fan is off");
    }
  }, {
    key: "getSpeed",
    value: function getSpeed() {
      return this.level;
    }
  }]);

  return CeilingFan;
}();

exports["default"] = CeilingFan;