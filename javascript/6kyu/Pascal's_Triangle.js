/*
Wikipedia article on Pascal's Triangle: http://en.wikipedia.org/wiki/Pascal's_triangle

Write a function that, given a depth (n), returns a single-dimensional array/list representing Pascal's Triangle from the first to the n-th level.

For example:

pascalsTriangle(4) == [1, 1, 1, 1, 2, 1, 1, 3, 3, 1]

*/

function pascalsTriangle(n) {
   
    let row = [];
    let mun = 0;
    
    for ( let i = 0; i < n; i++ ) {
      mun = row.length - i;
      for ( let j = 0; j < i+1; j++ ) {
        if ( j === 0 || j === i ) {
          row.push(1);
        } else {
          row.push( row[ mun+j ] + row[ mun+j-1 ] );
        }
      }
    }
    
    return row;
  }