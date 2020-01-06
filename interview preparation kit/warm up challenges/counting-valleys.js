const countingValleys = (n, s) => {
  let valleys = 0;
  let level = 0;
  const splittedString = s.split('');
  splittedString.forEach((element) => {
    if (element === 'U') level++;
    if (element === 'D') level--;
    if (level === 0 && element === 'U') valleys++;
  })
  return valleys;
};

const s1 = 'UDDDUDUU';
const s2 = 'DDUUUUDD';
const result = countingValleys(8, s2);
console.log(result);