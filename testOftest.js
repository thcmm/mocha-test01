var Z = {};

Z.posOfVal = function(arr, val) {
  'use strict';
  let pos = 0;
    for (let i=0; i<arr.length; i++){
      pos++;
      if (val === arr[i]){
        return i;
      }
    }
    console.log('Position ' +
    arr.length + ' is ' + pos);
    return -1;
};

module.exports = Z;
