"use strict";

var _mallardDuck = _interopRequireDefault(require("./mallard-duck"));

var _modelDuck = _interopRequireDefault(require("./model-duck"));

var _flyRocketPowered = _interopRequireDefault(require("./fly-rocket-powered"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var mallard = new _mallardDuck["default"]();
mallard.performQuack();
mallard.performQuack();
mallard.performFly();
var model = new _modelDuck["default"]();
model.performFly();
model.setFlyBehavior(new _flyRocketPowered["default"]());
model.performFly();