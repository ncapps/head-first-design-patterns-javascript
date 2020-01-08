"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* eslint class-methods-use-this: ["error", { "exceptMethods": ["cut", "box", "bake"] }] */
var Pizza =
/*#__PURE__*/
function () {
  function Pizza() {
    _classCallCheck(this, Pizza);

    this.name = null;
    this.dough = null;
    this.sauce = null;
    this.toppings = [];
  }

  _createClass(Pizza, [{
    key: "prepare",
    value: function prepare() {
      console.log("Prepare ".concat(this.name));
      console.log('Tossing dough...');
      console.log('Adding sauce...');
      console.log('Adding toppings: ');
      this.toppings.forEach(function (topping) {
        return console.log(" ".concat(topping));
      });
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
    key: "getName",
    value: function getName() {
      return this.name;
    }
  }, {
    key: "toString",
    value: function toString() {
      var display = "---- ".concat(this.name, " ----\n");
      display += "".concat(this.dough, "\n");
      display += "".concat(this.sauce, "\n");
      this.toppings.forEach(function (topping) {
        display += "".concat(topping, "\n");
      });
      return display;
    }
  }]);

  return Pizza;
}();

exports["default"] = Pizza;