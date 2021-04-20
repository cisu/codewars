/*
Welcome. In this kata, you are asked to square every digit of a number.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer
*/



function squareDigits(num){
    //may the code be with you
    return Number(('' + num).split('').map(function (square) {return square * square;}).join(''));
  }


// .split takes a string and splits it into an array based on the character(s) passed to it '' in this case.

// ("9119").split('') === ["9", "1", "1", "9"]

// .map works like a for loop but takes a function as an argument. That function is applied to every member of the array.

// ["9", "1", "1", "9"].map(function(val) { return val * val;}) === ["81", "1", "1", "81"]

// .join does the opposite of .split. It takes an Array and concatenates it into a string based on the character(s) passed to it.

// ["81", "1", "1", "81"].join('') === "811181"
