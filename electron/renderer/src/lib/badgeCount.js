export default function(title) {
  const matches = (/\(([0-9]+)\)/).exec(title)

  if (matches !== null) {
    return parseInt(matches[1], 10)
  }
  return undefined
}
