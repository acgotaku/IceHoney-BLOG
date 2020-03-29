export const hashRE = /#.*$/
export const extRE = /\.(md|html)$/
export const endingSlashRE = /\/$/
export const outboundRE = /^(https?:|mailto:|tel:)/

export function normalize(path: string) {
  return decodeURI(path)
    .replace(hashRE, '')
    .replace(extRE, '')
}

export function isExternal(path: string) {
  return outboundRE.test(path)
}

export function isMailto(path: string) {
  return /^mailto:/.test(path)
}

export function isTel(path: string) {
  return /^tel:/.test(path)
}

export function ensureExt(path: string) {
  if (isExternal(path)) {
    return path
  }
  const hashMatch = path.match(hashRE)
  const hash = hashMatch ? hashMatch[0] : ''
  const normalized = normalize(path)

  if (endingSlashRE.test(normalized)) {
    return path
  }
  return normalized + '.html' + hash
}

