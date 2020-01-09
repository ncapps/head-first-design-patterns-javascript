"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var PizzaIngredientFactory =
/*#__PURE__*/
function () {
  function PizzaIngredientFactory() {
    _classCallCheck(this, PizzaIngredientFactory);
  }

  _createClass(PizzaIngredientFactory, [{
    key: "createDough",
    value: function createDough() {
      throw new Error('Abstract method');
    }
  }, {
    key: "createSauce",
    value: function createSauce() {
      throw new Error('Abstract method');
    }
  }, {
    key: "createCheese",
    value: function createCheese() {
      throw new Error('Abstract method');
    }
  }, {
    key: "createVeggies",
    value: function createVeggies() {
      throw new Error('Abstract method');
    }
  }, {
    key: "createPepperoni",
    value: function createPepperoni() {
      throw new Error('Abstract method');
    }
  }, {
    key: "createClam",
    value: function createClam() {
      throw new Error('Abstract method');
    }
  }]);

  return PizzaIngredientFactory;
}();

exports["default"] = PizzaIngredientFactory;