"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/* eslint wrap-iife: ["error", "inside"] */
var singleton = function singleton() {
  // Instance stores a reference to the Singleton
  var instance;

  function init() {
    // Singleton
    // Private methods and variables
    function privateMethod() {
      console.log('I am private');
    }

    var privateVariable = 'Im also private';
    return {
      // Public methods and variables
      publicMethod: function publicMethod() {
        return 'The public can see me!';
      },
      publicProperty: 'I am also public'
    };
  }

  return {
    // Get the Singleton instance if one exists
    // or create one if it doesn't
    getInstance: function getInstance() {
      if (!instance) {
        instance = init();
      }

      return instance;
    }
  };
}();

exports["default"] = singleton;