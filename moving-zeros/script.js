"use strict";

function moveZeros(arr) {
   arr.forEach((elem) => {
      switch (elem) {
         case 0:
            arr.splice(arr.indexOf(elem), 1);
            arr.push(elem);
            break;
      }
   });
   return arr;
}

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));
