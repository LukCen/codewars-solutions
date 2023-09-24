function findShort (s) {
  const arrayfied = s.split(' ')
  let shortest = ''

  arrayfied.forEach((word) => {
    if (word.length < shortest.length || shortest.length === 0) {
      shortest = word
    }
  })
  return shortest.length
}

console.log(findShort('bitcoin take over the world maybe who knows perhaps'))
