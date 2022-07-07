function narcissistic(value) {
  // Code me to return true or false
  let total = 0;
  let valueArry = String(value)
    .split('')
    .map((num) => {
      return Number(num);
    });
  let len = valueArry.length;
  valueArry.forEach((n) => {
    total = total + Math.pow(n, len);
  });
  console.log('Calculated Total: ' + total);
  if (total === value) {
    console.log(`${value} is narcissistic`);
    return true;
  } else {
    console.log(`${value} is not narcissistic`);
    return false;
  }
}

console.log(narcissistic(153));
console.log(narcissistic(199));
