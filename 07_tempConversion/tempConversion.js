const convertToCelsius = function(inputTemp) {
  inputTemp = (inputTemp - 32) * (5/9);
  return Number(inputTemp.toFixed(1));
};

const convertToFahrenheit = function(inputTemp) {
  inputTemp = ((9/5) * inputTemp) + 32;
  return Number(inputTemp.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
