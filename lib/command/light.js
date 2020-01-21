"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Light =
/*#__PURE__*/
function () {
  function Light(location) {
    _classCallCheck(this, Light);

    this.location = location;
  }

  _createClass(Light, [{
    key: "on",
    value: function on() {
      return this.location ? "".concat(this.location, " light is on") : 'Light is on';
    }
  }, {
    key: "off",
    value: function off() {
      return this.location ? "".concat(this.location, " light is off") : 'Light is off';
    }
  }]);

  return Light;
}();

exports["default"] = Light;