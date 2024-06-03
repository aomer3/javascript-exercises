const sumAll = function(firstNumber, secondNumber) {
    let sum = 0;

    if(firstNumber < 0 || secondNumber < 0){
        return 'ERROR';
    }

    if((typeof firstNumber != 'number') || (typeof secondNumber != 'number')){
        return 'ERROR';
    }

    if(firstNumber > secondNumber){
        for (let index = firstNumber; index >= secondNumber; index--){
            sum += index;
            }

    }
    else{
        for (let index = firstNumber; index <= secondNumber; index++){
            sum += index;
        }

    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
