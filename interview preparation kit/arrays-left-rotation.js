const arraysLeftRotation = (a, d) => {
  const result = [];
  for (let i = 0; i < a.length; i++) result[i] = a[(i + d) % a.length];
  return result;
};

const arr = [1, 2, 3, 4, 5];
const result = arraysLeftRotation(arr, 4);
console.log(result);