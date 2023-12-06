// function
function helloWorld() {
  console.log("1. Hello World!");
}
helloWorld();

// function wtith a parameter
function hello(txt) {
  console.log(`2. Hello ${txt}!`);
}
hello("World");

// Anonymous function
const saySomething = function () {
  console.log("3. Something!");
};
saySomething();

// Anonymous function with a parameter
const say = function (txt) {
  console.log(txt);
};
say("4. Something!");

// Arrow function
const arrow = () => console.log("5. That's my arrow!");
arrow();

// Arrow function with a parameter
const arroWParam = (param) => console.log(param);
arroWParam("6. Hello");

// Arrow function with implicit return
const returnSomething = (param) => `7. This is ${param}`;
console.log(returnSomething("Sparta"));

// Multiline arrow function
const arrowMultiline = (param) => {
  console.log(param);
};
arrowMultiline("8. :)");

// Multiline arrow function with return (explicit return needed)
const returnSomethingPls = (param) => {
  return `9. Here is something: ${param}`;
};
console.log(returnSomethingPls("(:"));

// IIFE - Immediately invoked function expression
(() => {
  console.log("10. This is IIFE!");
})();
