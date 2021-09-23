var multiply = function(a) {
  // var a = a;
  var executeMultiply = function(b) {
      return a * b;
  }
  return executeMultiply;
}

var double = multiply(2);
console.log(double(3));
console.log(double(5));

const triple = multiply(3);
console.log(triple(4)); // => 12