"use strict";

var _espresso = _interopRequireDefault(require("./espresso"));

var _darkRoast = _interopRequireDefault(require("./dark-roast"));

var _mocha = _interopRequireDefault(require("./mocha"));

var _whip = _interopRequireDefault(require("./whip"));

var _houseBlend = _interopRequireDefault(require("./house-blend"));

var _soy = _interopRequireDefault(require("./soy"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var espresso = new _espresso["default"]();
console.log("".concat(espresso.getDescription(), " $").concat(espresso.cost()));
var darkRoast = new _darkRoast["default"]();
darkRoast = new _mocha["default"](darkRoast);
darkRoast = new _mocha["default"](darkRoast);
darkRoast = new _whip["default"](darkRoast);
console.log("".concat(darkRoast.getDescription(), " $").concat(darkRoast.cost()));
var houseBlend = new _houseBlend["default"]();
houseBlend = new _soy["default"](houseBlend);
houseBlend = new _mocha["default"](houseBlend);
houseBlend = new _whip["default"](houseBlend);
console.log("".concat(houseBlend.getDescription(), " $").concat(houseBlend.cost()));