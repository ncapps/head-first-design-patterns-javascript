"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _noCommand = _interopRequireDefault(require("./no-command"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var RemoteControl =
/*#__PURE__*/
function () {
  function RemoteControl() {
    _classCallCheck(this, RemoteControl);

    this.onCommands = [];
    this.offCommands = [];
    var noCommand = new _noCommand["default"]();

    for (var i = 0; i < 7; i += 1) {
      this.onCommands[i] = noCommand;
      this.offCommands[i] = noCommand;
    }
  }

  _createClass(RemoteControl, [{
    key: "setCommand",
    value: function setCommand(slot, onCommand, offCommand) {
      this.onCommands[slot] = onCommand;
      this.offCommands[slot] = offCommand;
    }
  }, {
    key: "onButtonWasPushed",
    value: function onButtonWasPushed(slot) {
      return this.onCommands[slot].execute();
    }
  }, {
    key: "offButtonWasPushed",
    value: function offButtonWasPushed(slot) {
      return this.offCommands[slot].execute();
    }
  }, {
    key: "toString",
    value: function toString() {
      var _this = this;

      var string = '\n------ Remote Control ------\n';
      this.onCommands.forEach(function (value, index) {
        string += "[slot ".concat(index, "] ") + "".concat(_this.onCommands[index].constructor.name, " ") + "".concat(_this.offCommands[index].constructor.name, "\n");
      });
      return string;
    }
  }]);

  return RemoteControl;
}();

exports["default"] = RemoteControl;