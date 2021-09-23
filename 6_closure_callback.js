// callback #1 example

const message = 'Hello, World!';

setTimeout(function callback() {
  console.log(message); // logs "Hello, World!"
}, 1000);

// callback #2 example

let countEven = 0;
const items = [1, 5, 100, 10];
items.forEach(function iterator(number) {
  if (number % 2 === 0) {
    countEven++;
  }
});
countEven; // => 2