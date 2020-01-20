"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Hottub =
/*#__PURE__*/
function () {
  function Hottub() {
    _classCallCheck(this, Hottub);

    this.temperature = null;
    this.isOn = false;
  }

  _createClass(Hottub, [{
    key: "on",
    value: function on() {
      this.isOn = true;
    }
  }, {
    key: "off",
    value: function off() {
      this.isOn = false;
    }
  }, {
    key: "circulate",
    value: function circulate() {
      return this.isOn ? 'Hottub is bubbling' : 'Hottub is off';
    }
  }, {
    key: "jetsOn",
    value: function jetsOn() {
      return this.isOn ? 'Hottub jets are on' : 'Hottub is off';
    }
  }, {
    key: "jetsOff",
    value: function jetsOff() {
      return this.isOn ? 'Hottub jets are off' : 'Hottub is off';
    }
  }, {
    key: "setTemperature",
    value: function setTemperature(temperature) {
      var message = "Hottub is cooling to ".concat(temperature, " degrees");

      if (temperature > this.temperature) {
        message = "Hottub is heating to a steaming ".concat(temperature, " degrees");
      }

      this.temperature = temperature;
      return message;
    }
  }]);

  return Hottub;
}();

exports["default"] = Hottub;