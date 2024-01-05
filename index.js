// first
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }
  

  let numbers = [23, 73, 12, 4, 59];
  let result = sumArray(numbers);
  console.log(result);

  // second
  function multiplyArray(arr) {
    let product = 1;
    for (let i = 0; i < arr.length; i++) {
      product *= arr[i];
    }
    return product;
  }
  
 
  let num = [5, 4, 13, 7, 9];
  let resu = multiplyArray(num);
  console.log(resu);

  // third
  function filterEvenNumbers(arr) {
    let evenNumbers = arr.filter(num => num % 2 === 0);
    return evenNumbers;
  }
  
  let number = [12, 25, 73, 32, 57, 61, 78, 38, 99];
  let evenNumbers = filterEvenNumbers(number);
  console.log(evenNumbers);

// fourth
function filterOddNumbers(arr) {
    let oddNumbers = arr.filter(num => num % 2 !== 0);
    return oddNumbers;
  }
  
  let member = [12, 25, 73, 32, 57, 61, 78, 38, 99];
  let oddNumbers = filterOddNumbers(member);
  console.log(oddNumbers);

  // fifth
  function filterUniqueValues(arr) {
    let uniqueValues = arr.filter((value, index, self) => {
      return self.indexOf(value) === index;
    });
    return uniqueValues;
  }
  
  let mem = [23, 23, 73, 56, 56, 12, 12, 4, 59];
  let uniqueValues = filterUniqueValues(mem);
  console.log(uniqueValues);

  // sixth
  function filterPositiveNumbers(arr) {
    let positiveNumbers = arr.filter((value) => {
      return value > 0;
    });
    return positiveNumbers;
  }
  let plus = [-11, 52, 45 -34, -4, 5, -86];
  let positiveNumbers = filterPositiveNumbers(plus);
  console.log(positiveNumbers);

  // seventh
  function filterNegativeNumbers(arr) {
    let negativeNumbers = arr.filter((value) => {
      return value < 0;
    });
    return negativeNumbers;
  }
  
  let minus = [-11, 52, 45 -34, -4, 5, -86];
  let negativeNumbers = filterNegativeNumbers(minus);
  console.log(negativeNumbers);

//eighth
function filterNumbersGreaterThan(arr, threshold) {
    let filteredNumbers = arr.filter((value) => {
      return value > threshold;
    });
    return filteredNumbers;
  }
  
  let mass = [1, 5, 8, 10, 15, 20];
  let threshold = 10;
  let numbersGreaterThanThreshold = filterNumbersGreaterThan(mass, threshold);
  console.log(numbersGreaterThanThreshold);

 // ninth
 function filterNumbers(arr, maxVal) {
    return arr.filter(num => num < maxVal);
  }
  
  const n = [1, 5, 10, 15, 20];
  const maxValue = 10;
  
  const filteredNumbers = filterNumbers(n, maxValue);
  console.log(filteredNumbers);
  
  
  //tenth
  function filterEvenPositionNumbers(arr) {
    return arr.filter((nim, index) => index % 2 === 0);
  }
  
  const u = [-11, 52, 45 -34, -4, 5, -86];
  
  const filtered = filterEvenPositionNumbers(u);
  console.log(filtered);