/**
 * Utopian Tree
 * n = 5
 * Period: 0, 1, 2, 3, 4, 5
 * Height: 1, 2, 3, 6, 7, 14
 */

function utopianTree(n) {
  let height = 1;

  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      height++
    } else {
      height *= 2
    }
  }

  return height
}

console.log(utopianTree(4))
console.log(utopianTree(5))
console.log(utopianTree(7))