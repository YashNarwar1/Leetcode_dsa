// nearest to the zero
// problem you have an array of number and you need to find the number nearest to zero if there is a tie then return the bigger one
// the array have both positive and negative number
// so if you have -2 and 2 then return 2 as an result

// 2239. Find Closest Number to Zero

// solution

const findClosestToZero = (array) => {
  let closest = array[0];

  for (let x of array) {
    if (Math.abs(x) < Math.abs(closest)) {
      closest = x;
    }
  }

  if ((closest < 0) & array.includes(Math.abs(closest))) {
    return Math.abs(closest);
  } else {
    return closest;
  }
};
