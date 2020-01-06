const jumpingClouds = (c) => {
  let count = 0;
  for (let i = 0; i < (c.length - 1); i+=2, count++) if (c[i] === 1) i--;
  return count;
};

const arr = [0, 0, 1, 0, 0, 1, 0];
const arr2 = [0, 0, 0, 0, 1, 0];
const result = jumpingClouds(arr2);
console.log(result);