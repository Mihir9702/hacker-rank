/**
 * Jumping on Clouds
 */

function jumpingOnClouds(clouds) {
  let start = 0
  let end = clouds.length
  let jumps = 0;

  for (start; start < end; start++) {
    if (clouds[start + 1] === 0) jumps++
    else if (clouds[start + 2] === 0) jumps++
  }

  return jumps
}

console.log(jumpingOnClouds([0, 1, 0, 0, 0, 1, 0]))