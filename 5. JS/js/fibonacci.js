var memory = {};

function calculateFibonacci() {
  "use strict";
  var n = document.getElementById("fibonacciInput").value;
  var result = calculateFibonacciValue(n);
  document.getElementById("fibonacciResult").textContent = result;
}

function calculateFibonacciValue(n) {
  var value;
  if (memory.hasOwnProperty(n)) {
    value = memory[n];
  } else {
    if (n <= 1) {
      return n;
    }
    value = calculateFibonacciValue(n - 1) + calculateFibonacciValue(n - 2);
    memory[n] = value;
  }
  return value;
}
