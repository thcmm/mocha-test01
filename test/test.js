var assert = require("assert"); // inkluderar i node.js
var Z = require('../testOftest.js');

describe('Is posOfVal valid', function(){
  describe('Z is type object', function(){
    it('should be valid obj method', function(){
      assert.equal(typeof Z, 'object');
    })
  })

  describe('Is Z.posOfVal() a function', function(){
    it('Should be valid function', function(){
      assert.equal(typeof Z.posOfVal, 'function');
    })
  })

  describe('Returns correct index position of val', function(){
    it('Should return 3', function(){
      assert.equal(3, Z.posOfVal([1,2,3,8,33,44,98], 8));
    })
  })

  describe('Test for invalid index of value', function(){
    it('Returns -1 when val is not in array', function(){
      assert.equal(-1, Z.posOfVal([1,2,3,8,33,44,98], 666));
    })
  })
});
