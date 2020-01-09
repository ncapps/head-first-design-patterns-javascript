"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Pizza =
/*#__PURE__*/
function () {
  function Pizza() {
    _classCallCheck(this, Pizza);

    this.name = null;
    this.dough = null;
    this.sauce = null;
    this.veggies = [];
    this.cheese = null;
    this.pepperoni = null;
    this.clams = null;
  }

  _createClass(Pizza, [{
    key: "prepare",
    value: function prepare() {
      throw new Error('Abstract method');
    }
  }, {
    key: "bake",
    value: function bake() {
      console.log('Bake for 25 minutes at 350');
    }
  }, {
    key: "cut",
    value: function cut() {
      console.log('Cut the pizza into diagonal slices');
    }
  }, {
    key: "box",
    value: function box() {
      console.log('Place pizza in official PizzaStore box');
    }
  }, {
    key: "setName",
    value: function setName(name) {
      this.name = name;
    }
  }, {
    key: "getName",
    value: function getName() {
      return this.name;
    }
  }, {
    key: "toString",
    value: function toString() {
      var _this = this;

      var display = "---- ".concat(this.name, " ----\n");
      if (this.dough) display += "".concat(this.dough, "\n");
      if (this.sauce) display += "".concat(this.sauce, "\n");
      if (this.cheese) display += "".concat(this.cheese, "\n");
      this.veggies.forEach(function (veggie, i) {
        display += "".concat(veggie);
        display += i < _this.veggies.length - 1 ? ', ' : '\n';
      });
      if (this.clam) display += "".concat(this.clam, "\n");
      if (this.pepperoni) display += "".concat(this.pepperoni, "\n");
      return display;
    }
  }]);

  return Pizza;
}();

exports["default"] = Pizza;