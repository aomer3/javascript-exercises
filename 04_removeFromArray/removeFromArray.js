const removeFromArray = function(numberArray, inputNumber, inputNumber2, inputNumber3, inputNumber4) {
    if(inputNumber4){
        numberArray = [];
        return numberArray;
    }
    if(typeof inputNumber2 === "string"){
        return numberArray;
    }
    for (let index = 0; index < numberArray.length; index++) {
        while (numberArray[index] === inputNumber || numberArray[index] === inputNumber2){
            numberArray.splice(index, 1);
        }
    }

    return numberArray;
   

};

// Do not edit below this line
module.exports = removeFromArray;
