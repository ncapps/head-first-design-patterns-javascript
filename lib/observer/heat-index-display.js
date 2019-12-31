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

var HeatIndexDisplay =
/*#__PURE__*/
function (_Observer) {
  _inherits(HeatIndexDisplay, _Observer);

  function HeatIndexDisplay(subject) {
    var _this;

    _classCallCheck(this, HeatIndexDisplay);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(HeatIndexDisplay).call(this));
    _this.heatIndex = 0.0;
    _this.subject = subject;
    subject.registerObserver(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(HeatIndexDisplay, [{
    key: "update",
    value: function update(subject, arg) {
      if (subject instanceof _weatherData["default"]) {
        var weatherData = subject;
        var t = weatherData.getTemperature();
        var rh = weatherData.getHumidity();
        this.heatIndex = 16.923 + 0.185212 * t + 5.37941 * rh - 0.100254 * t * rh + 0.00941695 * (t * t) + 0.00728898 * (rh * rh) + 0.000345372 * (t * t * rh) - 0.000814971 * (t * rh * rh) + 0.0000102102 * (t * t * rh * rh) - 0.000038646 * (t * t * t) + 0.0000291583 * (rh * rh * rh) + 0.00000142721 * (t * t * t * rh) + 0.000000197483 * (t * rh * rh * rh) - 0.0000000218429 * (t * t * t * rh * rh) + 0.000000000843296 * (t * t * rh * rh * rh) - 0.0000000000481975 * (t * t * t * rh * rh * rh);
        this.display();
      }
    }
  }, {
    key: "display",
    value: function display() {
      console.log("Heat index is ".concat(this.heatIndex));
    }
  }]);

  return HeatIndexDisplay;
}(_observer["default"]);

exports["default"] = HeatIndexDisplay;