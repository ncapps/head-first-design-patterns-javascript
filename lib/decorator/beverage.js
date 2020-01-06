"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Beverage = exports.Size = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Size = {
  TALL: 0,
  GRANDE: 1,
  VENTI: 2
};
exports.Size = Size;

var Beverage =
/*#__PURE__*/
function () {
  function Beverage() {
    _classCallCheck(this, Beverage);

    this.size = Size.TALL;
    this.description = "Unknown Beverage";
  }

  _createClass(Beverage, [{
    key: "getDescription",
    value: function getDescription() {
      return this.description;
    }
  }, {
    key: "cost",
    value: function cost() {
      throw new Error("Abstract method");
    }
  }, {
    key: "setSize",
    value: function setSize(size) {
      this.size = size;
    }
  }, {
    key: "getSize",
    value: function getSize() {
      return this.size;
    }
  }]);

  return Beverage;
}();

exports.Beverage = Beverage;