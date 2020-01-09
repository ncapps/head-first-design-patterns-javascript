"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _pizzaStore = _interopRequireDefault(require("./pizza-store"));

var _chicagoPizzaIngredientFactory = _interopRequireDefault(require("./chicago-pizza-ingredient-factory"));

var _cheesePizza = _interopRequireDefault(require("./cheese-pizza"));

var _veggiePizza = _interopRequireDefault(require("./veggie-pizza"));

var _clamPizza = _interopRequireDefault(require("./clam-pizza"));

var _pepperoniPizza = _interopRequireDefault(require("./pepperoni-pizza"));

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

var ChicagoPizzaStore =
/*#__PURE__*/
function (_PizzaStore) {
  _inherits(ChicagoPizzaStore, _PizzaStore);

  function ChicagoPizzaStore() {
    _classCallCheck(this, ChicagoPizzaStore);

    return _possibleConstructorReturn(this, _getPrototypeOf(ChicagoPizzaStore).apply(this, arguments));
  }

  _createClass(ChicagoPizzaStore, [{
    key: "createPizza",
    value: function createPizza(item) {
      var pizza = null;
      var ingredientFactory = new _chicagoPizzaIngredientFactory["default"]();

      if (item === 'cheese') {
        pizza = new _cheesePizza["default"](ingredientFactory);
        pizza.setName('Chicago Style Cheese Pizza');
      } else if (item === 'veggie') {
        pizza = new _veggiePizza["default"](ingredientFactory);
        pizza.setName('Chicago Style Veggie Pizza');
      } else if (item === 'clam') {
        pizza = new _clamPizza["default"](ingredientFactory);
        pizza.setName('Chicago Style Clam Pizza');
      } else if (item === 'pepperoni') {
        pizza = new _pepperoniPizza["default"](ingredientFactory);
        pizza.setName('Chicago Style Pepperoni Pizza');
      }

      pizza.cut = function cut() {
        console.log('Cutting the pizza into square slices');
      };

      return pizza;
    }
  }]);

  return ChicagoPizzaStore;
}(_pizzaStore["default"]);

exports["default"] = ChicagoPizzaStore;