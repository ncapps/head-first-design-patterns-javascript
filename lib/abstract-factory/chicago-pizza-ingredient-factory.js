"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _pizzaIngredientFactory = _interopRequireDefault(require("./pizza-ingredient-factory"));

var _thickCrustDough = _interopRequireDefault(require("./thick-crust-dough"));

var _plumTomatoSauce = _interopRequireDefault(require("./plum-tomato-sauce"));

var _mozzarellaCheese = _interopRequireDefault(require("./mozzarella-cheese"));

var _blackOlives = _interopRequireDefault(require("./black-olives"));

var _spinach = _interopRequireDefault(require("./spinach"));

var _eggplant = _interopRequireDefault(require("./eggplant"));

var _slicedPepperoni = _interopRequireDefault(require("./sliced-pepperoni"));

var _frozenClams = _interopRequireDefault(require("./frozen-clams"));

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

var ChicagoPizzaIngredientFactory =
/*#__PURE__*/
function (_PizzaIngredientFacto) {
  _inherits(ChicagoPizzaIngredientFactory, _PizzaIngredientFacto);

  function ChicagoPizzaIngredientFactory() {
    _classCallCheck(this, ChicagoPizzaIngredientFactory);

    return _possibleConstructorReturn(this, _getPrototypeOf(ChicagoPizzaIngredientFactory).apply(this, arguments));
  }

  _createClass(ChicagoPizzaIngredientFactory, [{
    key: "createDough",
    value: function createDough() {
      return new _thickCrustDough["default"]();
    }
  }, {
    key: "createSauce",
    value: function createSauce() {
      return new _plumTomatoSauce["default"]();
    }
  }, {
    key: "createCheese",
    value: function createCheese() {
      return new _mozzarellaCheese["default"]();
    }
  }, {
    key: "createVeggies",
    value: function createVeggies() {
      return [new _blackOlives["default"](), new _spinach["default"](), new _eggplant["default"]()];
    }
  }, {
    key: "createPepperoni",
    value: function createPepperoni() {
      return new _slicedPepperoni["default"]();
    }
  }, {
    key: "createClam",
    value: function createClam() {
      return new _frozenClams["default"]();
    }
  }]);

  return ChicagoPizzaIngredientFactory;
}(_pizzaIngredientFactory["default"]);

exports["default"] = ChicagoPizzaIngredientFactory;