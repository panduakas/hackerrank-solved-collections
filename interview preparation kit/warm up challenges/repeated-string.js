const repeatedString = (s, n) => {
  let count = 0;
  s.split('').forEach(element => {
    if (element === 'a') count++;
  })
  let result = Math.trunc(n / s.length) * count;
  const sisa = n % s.length;
  if (sisa !== 0) {
    const stringSisa = s.slice(0, sisa);
    stringSisa.split('').forEach(element => {
      if (element === 'a') result++
    })
  }
  return result;
};

const string = 'aba';
const string2 = 'abcac';
const string3 = 'a';
const n = 10;
const n2 = 1000000000;
const result = repeatedString(string, n);
console.log(result);