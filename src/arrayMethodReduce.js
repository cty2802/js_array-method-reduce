'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let i = arguments.length < 2 ? 1 : 0;
    let result = arguments.length < 2 ? this[0] : initialValue;

    for (i; i < this.length; i++) {
      result = (callback(result, this[i], i, this));
    }

    return result;
  };
}

module.exports = applyCustomReduce;
