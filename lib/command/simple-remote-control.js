"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SimpleRemoteControl =
/*#__PURE__*/
function () {
  function SimpleRemoteControl() {
    _classCallCheck(this, SimpleRemoteControl);

    this.slot = null;
  }

  _createClass(SimpleRemoteControl, [{
    key: "setCommand",
    value: function setCommand(command) {
      this.slot = command;
    }
  }, {
    key: "buttonWasPressed",
    value: function buttonWasPressed() {
      return this.slot.execute();
    }
  }]);

  return SimpleRemoteControl;
}();

exports["default"] = SimpleRemoteControl;