'use strict'

function generateHashtag (str) {
  if (str !== '' && str.trim().length > 0) {
    const arrayfied = str.split(' ')
    const result = []
    arrayfied.forEach((e) => {
      const first = e.slice(0, 1).toUpperCase()
      const completed = first + e.slice(1)
      result.push(completed)
    })
    if (result.join('').length >= 140) {
      return false
    }
    return `#${result.join('')}`
  }
  return false
}

const string = '#'

const test = '     '

// console.log(test.length)
// console.log(test.trim().length)

console.log(generateHashtag('Codewars'))
console.log(generateHashtag('code' + ' '.repeat(140) + 'wars'))
