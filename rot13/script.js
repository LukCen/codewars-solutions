'use strict'
function isLowerCase (str) {
  return str === str.toLowerCase() &&
         str !== str.toUpperCase()
}
function rot13 (str) {
  const decyphered = []
  const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  const arrayfied = str.split(' ')
  arrayfied.forEach((...s) => {
    s.forEach((letter) => {
      if (!isLowerCase(letter.toString())) {
        const inAlphabet = alphabet.indexOf(letter)
        letter = alphabet[inAlphabet + 13]
        console.log(letter)
      }
      decyphered.push(s)
    })
  })
  // return decyphered
}
console.log(rot13('this is an example string to divide into an array'))
