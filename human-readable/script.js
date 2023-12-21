'use strict'
function humanReadable (seconds) {
  let hrs = 0
  let mins = 0
  let secs = 0
  let secondsInNumber = parseInt(seconds)

  while (secondsInNumber > 0) {
    secondsInNumber--
    ++secs
    if (secs >= 60) {
      ++mins
      secs = 0
    }

    if (mins >= 60) {
      ++hrs
      mins = 0
    }
  }
  if (hrs.toString().length === 1) {
    hrs = `0${hrs}`
  }
  if (mins.toString().length === 1) {
    mins = `0${mins}`
  }
  if (secs.toString().length === 1) {
    secs = `0${secs}`
  }
  return `${hrs}:${mins}:${secs}`
}

console.log(humanReadable(3600))
