/* eslint wrap-iife: ["error", "inside"] */

const singleton = (function singleton() {
  // Instance stores a reference to the Singleton
  let instance;

  function init() {
    // Singleton

    // Private methods and variables
    function privateMethod() {
      console.log('I am private');
    }

    const privateVariable = 'Im also private';

    return {
      // Public methods and variables
      publicMethod() {
        return 'The public can see me!';
      },

      publicProperty: 'I am also public',
    };
  }

  return {
    // Get the Singleton instance if one exists
    // or create one if it doesn't
    getInstance() {
      if (!instance) {
        instance = init();
      }

      return instance;
    },
  };
})();

export { singleton as default };
