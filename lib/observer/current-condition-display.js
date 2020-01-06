"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _observer = _interopRequireDefault(require("./observer"));

var _weatherData = _interopRequireDefault(require("./weather-data"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var CurrentConditionDisplay =
/*#__PURE__*/
function (_Observer) {
  _inherits(CurrentConditionDisplay, _Observer);

  function CurrentConditionDisplay(subject) {
    var _this;

    _classCallCheck(this, CurrentConditionDisplay);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CurrentConditionDisplay).call(this));
    _this.temperature = null;
    _this.humidity = null;
    _this.subject = subject;
    subject.registerObserver(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(CurrentConditionDisplay, [{
    key: "update",
    value: function update(subject, args) {
      if (subject instanceof _weatherData["default"]) {
        var weatherData = subject;
        this.temperature = weatherData.getTemperature();
        this.humidity = weatherData.getHumidity();
        this.display();
      }
    }
  }, {
    key: "display",
    value: function display() {
      console.log("Current conditions: ".concat(this.temperature, " F degrees and ").concat(this.humidity, "% humidity"));
    }
  }]);

  return CurrentConditionDisplay;
}(_observer["default"]);

exports["default"] = CurrentConditionDisplay;