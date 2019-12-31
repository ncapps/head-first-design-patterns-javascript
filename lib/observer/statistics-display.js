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

var StatisticsDisplay =
/*#__PURE__*/
function (_Observer) {
  _inherits(StatisticsDisplay, _Observer);

  function StatisticsDisplay(subject) {
    var _this;

    _classCallCheck(this, StatisticsDisplay);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(StatisticsDisplay).call(this));
    _this.maxTemp = 0.0;
    _this.minTemp = 200;
    _this.tempSum = 0.0;
    _this.numReadings = 0;
    _this.subject = subject;
    subject.registerObserver(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(StatisticsDisplay, [{
    key: "update",
    value: function update(subject, arg) {
      if (subject instanceof _weatherData["default"]) {
        var weatherData = subject;
        var temp = weatherData.getTemperature();
        this.tempSum += temp;
        this.numReadings++;

        if (temp > this.maxTemp) {
          this.maxTemp = temp;
        }

        if (temp < this.minTemp) {
          this.minTemp = temp;
        }

        this.display();
      }
    }
  }, {
    key: "display",
    value: function display() {
      console.log("Avg/Max/Min temperature = ".concat(this.tempSum / this.numReadings, "/").concat(this.maxTemp, "/").concat(this.minTemp));
    }
  }]);

  return StatisticsDisplay;
}(_observer["default"]);

exports["default"] = StatisticsDisplay;