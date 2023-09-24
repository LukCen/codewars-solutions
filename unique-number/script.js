"use strict";

function findUniq(arr) {
   arr.sort((a, b) => a - b);

   if (arr[0] !== arr[1]) {
      return arr[0];
   }

   return arr[arr.length - 1];
}

console.log(findUniq([3, 10, 3, 3, 3]));
