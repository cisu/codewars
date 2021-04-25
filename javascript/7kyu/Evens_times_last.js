/*
Evens times last

Given a sequence of integers, return the sum of all the integers that have an even index, multiplied by the integer at the last index.

Indexes in sequence start from 0.

If the sequence is empty, you should return 0.


*/


function evenLast(numbers) {

    if (numbers.length === 0) return 0;

    // This is the last array number
    const lastInteger = numbers[numbers.length - 1]

    // Check if index is even and store into the sum 
    const sum = numbers.reduce((acc, number, index) => {

        // console.log(`acc: ${acc}`)
        // console.log(`number: ${number}`)
        // console.log(`index: ${index}`)

     return index % 2 === 0 ? acc + number : acc
    
    }, 0)

    // calc the total sum 
    const totalSum = sum * lastInteger;

    return totalSum;
   
  }




  console.log(evenLast([2,3,4,5]));
//   console.log(evenLast([1,2,3,4]));