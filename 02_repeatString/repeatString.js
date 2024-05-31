const repeatString = function(word, repeats) {
    let result = "";

    if(repeats < 0){
        return "ERROR";
    }

    for (let index = 0; index < repeats; index++) {
        result += word;
    }

    return result;
};


// Do not edit below this line
module.exports = repeatString;
