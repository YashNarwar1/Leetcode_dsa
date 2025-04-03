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

// question 1768 merge string alternatively
// given two strings you have to add their letter alternate
// if one string is short and only one string have letter left than push them in the end

// solution
const mergeAlternate = (word1, word2) => {
  const A = word1.length,
    B = word2.length;
  let a = 0;
  let b = 0;
  let result = "";

  while (a < A && b < B) {
    result += word1[a++];
    result += word2[b++];
  }

  while (a < A) {
    result += word1[a++];
  }

  while (b < B) {
    result += word2[b++];
  }

  return result;
};

// Question 3 = roman to integer
//leetcode 13
// you are given a string of roman number conver it to integer number

const converToInt = (s) => {
  const d = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let summ = 0;
  const n = s.length;
  let i = 0;

  while (i < n) {
    if (i < n - 1 && d[s[i]] < d[s[i + 1]]) {
      summ += d[s[i + 1]] - d[s[i]];
      i += 2;
    } else {
      summ += d[s[i]];
    }
  }

  return summ;
};
