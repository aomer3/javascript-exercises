const add = function(inputOne, inputTwo) {
	return inputOne + inputTwo;
};

const subtract = function(inputOne, inputTwo) {
	return inputOne - inputTwo;
};

const sum = function(numbers) {
	let sum = 0;

  for (let index = 0; index < numbers.length; index++) {
    sum += numbers[index];
  }

  return sum;
};

const multiply = function(numbers) {
  let sum = 1;
  
  for (let index = 0; index < numbers.length; index++) {
    sum *= numbers[index];
  }

  return sum;
};

const power = function(nputOne, inputTwo) {
  return nputOne ** inputTwo;
};

const factorial = function(inputNumber) {
  let sum = 1;
  
  for (let index = inputNumber; index > 0; index--) {
    sum *= index;
  }

  return sum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
