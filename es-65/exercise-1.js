function sum(...numbers) {
  return numbers.reduce((preValue, currentValue) => {
    return preValue + currentValue;
  });
}
console.log(sum(1, 2, 3, 4, 5));
