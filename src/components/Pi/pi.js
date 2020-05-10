const PI = Math.PI;
const DOUBLE_PI = PI * 2;
const TRIPLE_PI = PI * 3;

function fixedPI(PI) {
  return PI.toFixed(2);
}

function add(n1, n2) {
  return n1 + n2;
}

function multiply(n1, n2) {
  return n1 * n2;
}

function subtract(n1, n2) {
  return n1 - n2;
}

function divide(n1, n2) {
  return n1 / n2;
}

export default PI;
export { DOUBLE_PI, TRIPLE_PI, fixedPI, add, multiply, subtract, divide };
