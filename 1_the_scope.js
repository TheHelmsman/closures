// When you define a variable, you want it to exist within some boundaries. 
// E.g. a result variable makes sense to exist within a calculate() function, 
// as an internal detail. Outside of the calculate(), the result variable is useless.

// The accessibility of variables is managed by scope. You are free to access 
// the variable defined within its scope. But outside of that scope, the 
// variable is inaccessible.


function foo() {
  // "foo" function scope
  let count = 0;
  console.log(count); // logs 0
}

function bar() {
  // "bar" function scope
  let count = 1;
  console.log(count); // logs 1
}

foo();
bar();

console.log(count); // ReferenceError: count is not defined