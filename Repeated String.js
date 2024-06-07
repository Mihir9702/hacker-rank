// Repeated String
function repeatedString(s, n) {
  let str = ''

  while (str.length < n) {
    str += s
  }

  str = str.substring(0, n)

  let count = 0

  for (const char of str) {
    if (char === 'a') count++
  }

  return count
}

console.log(occurrence('aba', 10))
console.log(occurrence('abcac', 10))