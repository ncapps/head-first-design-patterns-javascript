"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var GarageDoor =
/*#__PURE__*/
function () {
  function GarageDoor(location) {
    _classCallCheck(this, GarageDoor);

    this.location = location;
  }

  _createClass(GarageDoor, [{
    key: "up",
    value: function up() {
      return this.location ? "".concat(this.location, " garage door is open") : 'Garage door is open';
    }
  }, {
    key: "down",
    value: function down() {
      return "".concat(this.location, " garage door is closed");
    }
  }, {
    key: "stop",
    value: function stop() {
      return "".concat(this.location, " garage door is stopped");
    }
  }, {
    key: "lightOn",
    value: function lightOn() {
      return "".concat(this.location, " garage light is on");
    }
  }, {
    key: "lightOff",
    value: function lightOff() {
      return "".concat(this.location, " garage light is off");
    }
  }]);

  return GarageDoor;
}();

exports["default"] = GarageDoor;