/*
You get an array of arrays.
If you sort the arrays by their length, 
you will see, that their length-values are consecutive.
But one array is missing!

You have to write a method, that return the length of the missing array.

Example:
  [[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3

If the array of arrays is null/nil or empty, the method should return 0.

When an array in the array is null or empty, the method should return 0 too!
There will always be a missing element and its length will be always between the given arrays.
*/


// Solution

function getLengthOfMissingArray(arrayOfArrays) {
  const lengths = (arrayOfArrays || [])
    .map(a => a ? a.length : 0)
    .sort((a, b) => a - b)
  
  if (lengths.includes(0)) {
    return 0
  }

  for (let i = 0; i < lengths.length - 1; i++) {
    if (lengths[i] + 1 !== lengths[i + 1]) {
      return lengths[i] + 1
    }
  }

  return 0
}

// or

function getLengthOfMissingArray(arrayOfArrays) {
  if (arrayOfArrays == null || arrayOfArrays.length == 0)
    return 0;
  
  let length = arrayOfArrays.length;
  let lengths = [];
  
  for (let i=0; i<length; ++i) {
    if (arrayOfArrays[i] == null || arrayOfArrays[i].length == 0)
      return 0;
    
    lengths[arrayOfArrays[i].length] = true;
  }
  
  let lowest = 0;
  
  for (let i=1, l=lengths.length; i<=l; ++i) {
    if (!lengths[i])
    {
      if (lowest != 0)
        return i;
    }
    else
      lowest = i;
  } 
}