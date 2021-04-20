/*
Given an array, find the integer that appears an odd number of times.

There will always be only one integer that appears an odd number of times.
*/




function findOdd(A) {
    //happy coding!
    let odd = {};

    for (let i = 0; i < A.length; i++) {
        if (odd[A[i]]) {
            odd[A[i]]++;
        } else {
            odd[A[i]] = 1;
        }
    }

    for (let key in odd) {
        if (odd[key] % 2 !== 0) {
            return Number(key);
        }
    }

    return 0;
}
