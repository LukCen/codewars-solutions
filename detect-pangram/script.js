"use strict";

function isPangram(string) {
   let clear = string.replaceAll(" ", "").toLowerCase();
   const alphabet = "abcdefghijklmnopqrstuvwxyz";

   for (let i = 0; i < alphabet.length; i++) {
      if (!clear.includes(alphabet.charAt(i))) {
         return false;
      }
   }

   return true;
}

/**
 * first we take the initial string, remove all whitepaces by replacing them with an empty string, and change it to lower case - the last is maybe unnecessary, but its just to be consistent
 *
 * then we iterate over the alphabet - we check if the string passed as an argument contains every single letter in the alphabet.
 *
 * if the loop comes across a letter that isn't present in the string, the loop is terminated and 'false' is returned
 *
 * otherwise the loop finishes, and the function returns true
 */
