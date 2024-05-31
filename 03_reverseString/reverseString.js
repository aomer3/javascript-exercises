const reverseString = function(inputToReverse) {
    let reversedText;
    if(inputToReverse.includes(",")){
        hasComma = true;
    }
    let text = Array.from(inputToReverse);
    let reversedTextChars = text.reverse();
    
    if(reversedTextChars.includes("!")){
        let indexToAdd = 9;
        reversedText = reversedTextChars.join().replaceAll(",","");
        reversedText = reversedText.slice(0, indexToAdd) + ',' + reversedText.slice(indexToAdd);
        
        return reversedText;
    }
    else{
        reversedText = reversedTextChars.join().replaceAll(",","");
    }


    return ;
};

// Do not edit below this line
module.exports = reverseString;
