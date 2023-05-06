export function toProperCase(str: string) {
  return str.replace(/^\w/, substring => substring.toUpperCase())
}
