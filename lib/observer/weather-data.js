"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _subject = _interopRequireDefault(require("./subject"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var WeatherData =
/*#__PURE__*/
function (_Subject) {
  _inherits(WeatherData, _Subject);

  function WeatherData() {
    var _this;

    _classCallCheck(this, WeatherData);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(WeatherData).call(this));
    _this.temperature = null;
    _this.humidity = null;
    _this.pressure = null;
    _this.observers = [];
    _this.changed = false;
    return _this;
  }

  _createClass(WeatherData, [{
    key: "setChange",
    value: function setChange() {
      this.changed = true;
    }
  }, {
    key: "registerObserver",
    value: function registerObserver(observer) {
      this.observers.push(observer);
    }
  }, {
    key: "removeObserver",
    value: function removeObserver(observer) {
      var i = this.observers.indexOf(observer);
      this.observers.splice(i, 1);
    }
  }, {
    key: "notifyObservers",
    value: function notifyObservers(args) {
      var _this2 = this;

      if (this.changed) {
        this.observers.forEach(function (observer) {
          observer.update(_this2, args);
        });
        this.changed = false;
      }
    }
  }, {
    key: "measurementsChanged",
    value: function measurementsChanged() {
      this.setChange();
      this.notifyObservers();
    }
  }, {
    key: "setMeasurements",
    value: function setMeasurements(temperature, humidity, pressure) {
      this.temperature = temperature;
      this.humidity = humidity;
      this.pressure = pressure;
      this.measurementsChanged();
    }
  }, {
    key: "getTemperature",
    value: function getTemperature() {
      return this.temperature;
    }
  }, {
    key: "getHumidity",
    value: function getHumidity() {
      return this.humidity;
    }
  }, {
    key: "getPressure",
    value: function getPressure() {
      return this.pressure;
    }
  }]);

  return WeatherData;
}(_subject["default"]);

exports["default"] = WeatherData;