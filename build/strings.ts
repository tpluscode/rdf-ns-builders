export function toProperCase(str: string) {
  return str.replace(/^\w/, substring => substring.toUpperCase())
}

export const aliases: Record<string, string> = {
  void: '_void',
}
