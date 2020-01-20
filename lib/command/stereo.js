"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Stereo =
/*#__PURE__*/
function () {
  function Stereo(location) {
    _classCallCheck(this, Stereo);

    this.location = location;
  }

  _createClass(Stereo, [{
    key: "on",
    value: function on() {
      return "".concat(this.location, " stereo is on");
    }
  }, {
    key: "off",
    value: function off() {
      return "".concat(this.location, " stereo is off");
    }
  }, {
    key: "setCD",
    value: function setCD() {
      return "".concat(this.location, " stereo is set for CD input");
    }
  }, {
    key: "setDVD",
    value: function setDVD() {
      return "".concat(this.location, " stereo is set for DVD input");
    }
  }, {
    key: "setRadio",
    value: function setRadio() {
      return "".concat(this.location, " stereo is set for Radio");
    }
  }, {
    key: "setVolume",
    value: function setVolume(volume) {
      return "".concat(this.location, " stereo volume set to ").concat(volume);
    }
  }]);

  return Stereo;
}();

exports["default"] = Stereo;