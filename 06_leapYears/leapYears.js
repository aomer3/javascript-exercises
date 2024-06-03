const leapYears = function(inputYear) {
    let isLeapYear = false;

    if(inputYear % 400 == 0){
        isLeapYear = true;
        return isLeapYear; 
    }
    else if (inputYear % 100 == 0 ){
        return isLeapYear;
    }
    else if (inputYear % 4 == 0){
        isLeapYear = true;
        return isLeapYear;
    }
    else {
        return isLeapYear;
    }
};

// Do not edit below this line
module.exports = leapYears;
