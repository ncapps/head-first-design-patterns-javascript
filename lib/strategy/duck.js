"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _flyBehavior = _interopRequireDefault(require("./fly-behavior"));

var _quackBehavior = _interopRequireDefault(require("./quack-behavior"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Duck =
/*#__PURE__*/
function () {
  function Duck() {
    _classCallCheck(this, Duck);

    this.flyBehavior = new _flyBehavior["default"]();
    this.quackBehavior = new _quackBehavior["default"]();
  }

  _createClass(Duck, [{
    key: "display",
    value: function display() {
      throw new Error('Abstract method');
    }
  }, {
    key: "performFly",
    value: function performFly() {
      this.flyBehavior.fly();
    }
  }, {
    key: "performQuack",
    value: function performQuack() {
      this.quackBehavior.quack();
    }
  }, {
    key: "swim",
    value: function swim() {
      console.log('All ducks float, even decoys!');
    }
  }, {
    key: "setFlyBehavior",
    value: function setFlyBehavior(fb) {
      this.flyBehavior = fb;
    }
  }, {
    key: "setQuackBehavior",
    value: function setQuackBehavior(qb) {
      this.quackBehavior = qb;
    }
  }]);

  return Duck;
}();

exports["default"] = Duck;