"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* eslint class-methods-use-this: ["error", { "exceptMethods": ["createPizza"] }] */

/* eslint no-unused-vars: ["error", { "args": "none" }] */
var PizzaStore =
/*#__PURE__*/
function () {
  function PizzaStore() {
    _classCallCheck(this, PizzaStore);
  }

  _createClass(PizzaStore, [{
    key: "createPizza",
    value: function createPizza(item) {
      throw new Error('Abstract factory method');
    }
  }, {
    key: "orderPizza",
    value: function orderPizza(type) {
      var pizza = this.createPizza(type);
      console.log("--- Making a ".concat(pizza.getName(), " ---"));
      pizza.prepare();
      pizza.bake();
      pizza.cut();
      pizza.box();
      return pizza;
    }
  }]);

  return PizzaStore;
}();

exports["default"] = PizzaStore;