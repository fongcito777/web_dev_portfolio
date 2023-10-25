var findPrimes = function () {
    "use strict";
  
    var inputNumber = parseInt(document.getElementById('inputNumber').value);
    var numberArray = [],
      primeNumbers = [],
      i,
      j;
    for (i = 2; i <= inputNumber; i++) {
      if (numberArray.indexOf(i) === -1) {
        primeNumbers.push(i);
        for (j = i * i; j <= inputNumber; j += i) {
          numberArray.push(j);
        }
      }
    }
    var result = primeNumbers.join(', ');
    document.getElementById('primeNumbers').innerHTML = result;
  };  