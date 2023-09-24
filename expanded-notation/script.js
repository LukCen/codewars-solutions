'use strict'
function expandedForm (num) {
  const arrayfied = num.toString().split('')
  const digits = []

  for (let i = 0; i < arrayfied.length; i++) {
    if (arrayfied[i] > 0) {
      digits.push(arrayfied[i] * Math.pow(10, arrayfied.length - 1 - i))
    }
  }
  return digits.join(' + ')
}

/**
 * first we turn the number into an array of one-character strings, so we can easily iterate over them
 *
 * then we declare an array to store the result of our calculations
 *
 * then we write a for loop iterating over the original array, storing our digits
 *
 * for each digit, we multiply it by 10, raised to the power of however many digits are 'left' until the end of the number - awkward explaination, but do some reading about the expanded notation and you'll get it
 *
 * then we push each result of our for() loop iteration into an array, as a separate element
 *
 * we then turn that array back into a string, using a plus sign with a whitespace on each side as a separator, then return it
 *
 * I think there's a way to do it with less code, and without using the 'digits' array, but this worked for me
 */
