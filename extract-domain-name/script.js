'use strict'

function domainName (url) {
  const patternNew = /(?:https?:\/\/)?(?:www\.)?([^/]+)(?:\/.*)?/
  const match = url.match(patternNew)
  if (match) {
    const domainParts = match[1].split('.')
    if (domainParts.length > 1) {
      return domainParts[0]
    }
    return match[1]
  }
  return null // Handle the case when there's no match
}

const d = 'http://github.com/carbonfive/raygun'
console.log(domainName(d)) // This should log "github"
