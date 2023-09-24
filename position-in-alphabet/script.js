"use strict";

let text = "The sunset sets at twelve o' clock.";

function alphabetPosition(text) {
   const pattern = /[^a-zA-z]/gi;
   let arrayfied = text.replace(pattern, "").toLowerCase().trim();
   const alphabet = "abcdefghijklmnopqrstuvwxyz";
   let positions = [];
   for (let i = 0; i < arrayfied.length - 1; i++) {
      if (alphabet.includes(arrayfied[i])) {
         positions.push(alphabet.indexOf(arrayfied[i]) + 1);
      }
   }
   //    return positions.join(" ");
   return positions;
}

console.log(alphabetPosition(text));

/**
 * used regexp here to specify a pattern - this matches everything that ISN'T a lower/uppercase letter.
 * turn the string into the array, remove every non-letter using the regexp pattern, initiate an empty array to store the indices
 * then run a for loop through the array.
 * check if a letter we're currently iterating over exists within the 'alphabet' string. if it does, its position in that string is pushed into the 'positions' array. also add + 1 to that index, because JS arrays are zero-based, so the number will always be lower by one than what its meant to be.
 *
 * then turn the array back into a string using join(), with a whitespace as a separator
 */
