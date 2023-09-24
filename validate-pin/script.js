'use strict'
function validatePIN (pin) {
  const pattern = /^\d{4}(?:\d{2})?$/

  return pattern.test(pin)
}
/**
* this regexp pattern matches any value consisting of EITHER 4 OR 6 digits between 0-9
* returns true if it does, false otherwise
* no conditional checks are needed, as the test() method already returns a boolean we're looking for
*/
