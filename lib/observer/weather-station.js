"use strict";

var _weatherData = _interopRequireDefault(require("./weather-data"));

var _currentConditionDisplay = _interopRequireDefault(require("./current-condition-display"));

var _statisticsDisplay = _interopRequireDefault(require("./statistics-display"));

var _forecastDisplay = _interopRequireDefault(require("./forecast-display"));

var _heatIndexDisplay = _interopRequireDefault(require("./heat-index-display"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var weatherData = new _weatherData["default"]();
var currentConditions = new _currentConditionDisplay["default"](weatherData);
var statisticsDisplay = new _statisticsDisplay["default"](weatherData);
var forecastDisplay = new _forecastDisplay["default"](weatherData);
var heatIndexDisplay = new _heatIndexDisplay["default"](weatherData);
weatherData.setMeasurements(80, 65, 30.4);
weatherData.setMeasurements(82, 70, 29.2);
weatherData.setMeasurements(78, 90, 29.2);