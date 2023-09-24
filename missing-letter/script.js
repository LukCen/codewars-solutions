'use strict'
function findMissingLetter (array) {
  // Determine whether the array is in uppercase or lowercase
  const isUppercase = array[0] === array[0].toUpperCase()

  const startingCharCode = array[0].charCodeAt()
  let missingCharCode = 0

  for (let i = 0; i < array.length; i++) {
    const expectedCharCode = startingCharCode + i
    const currentCharCode = array[i].charCodeAt()

    if (currentCharCode !== expectedCharCode) {
      missingCharCode = expectedCharCode
      break
    }
  }

  const missingLetter = String.fromCharCode(missingCharCode)

  return isUppercase ? missingLetter.toUpperCase() : missingLetter.toLowerCase()
}

// Example usage
console.log(findMissingLetter(['a', 'b', 'c', 'd', 'f'])) // Output: "e"
console.log(findMissingLetter(['O', 'Q', 'R', 'S'])) // Output: "P"
console.log(findMissingLetter(['A', 'B', 'C', 'D', 'F'])) // Output: "E"

const array = ['a', 'b', 'c', 'd', 'f']
// let array2 = ["h", "i", "j", "k", "l"];

// const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

// let firstLetterInArray = alphabet.indexOf(array2[0]);
// let arrayFragmentFromAlphabet = alphabet.slice(alphabet.indexOf(array2[0]), alphabet.indexOf(array2[array2.length - 1]) + 1);
// let wtf = alphabet[arrayFragmentFromAlphabet];
// console.log(`Full Alphabet = ${alphabet}`);
// console.log(`First letter in array = ${array2[0]}`);
// console.log(`Fragment from Alphabet = ${arrayFragmentFromAlphabet}`);

console.log(findMissingLetter(['a', 'b', 'c', 'd', 'f']))
console.log(findMissingLetter(['O', 'Q', 'R', 'S']))
console.log(findMissingLetter(['A', 'B', 'C', 'D', 'F']))
