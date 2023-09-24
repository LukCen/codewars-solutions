'use strict'
function digPow (n, p) {
  const arrayfied = n.toString().split('')
  let sum = 0

  for (let i = 0; i < arrayfied.length; i++) {
    const nextDigit = Math.pow(parseInt(arrayfied[i]), p + i)
    sum += nextDigit
    console.log(sum)
  }

  const k = sum / n

  if (k >= 1) {
    return k
  }

  return -1
}

console.log(digPow(46288, 3))
