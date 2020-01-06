const sockMerchant = (n, arr = []) => {
  let count = 0;
  let arrCopy = [];
  arr.forEach((element) => {
    if (!arrCopy.includes(element)) {
      arrCopy.push(element);
    } else {
      count++;
      arrCopy.splice(arrCopy.indexOf(element), 1);
    }
  });
  return count;
};

const arr = [10, 20, 20, 10, 10, 30, 50, 10, 20];
const result = sockMerchant(9, arr);
console.log(result);