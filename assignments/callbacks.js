// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/


function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length)
}
getLength(items, function(length){
  console.log('length:', length)
})


function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr.slice(-1)[0])
}
last(items, function(lastItem){
  console.log(lastItem, 'is the last item')
})


function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  const answer = x + y
  return cb(answer)
}

function showAnswer(answer){
  console.log('The sum is', answer)
}

sumNums(2, 2, showAnswer)

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  const answer = x * y
  return cb(answer)
}

function multAnswer(answer){
  console.log('The product is', answer)
}

multiplyNums(3, 6, multAnswer)

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false. 
  for (i=0; i<list.length; i++){
    if (list[i] === item){
      answer= true;
    }
    else answer = false;
  }
  return cb(answer)
}


function checker(answer){
  if(answer === true) {
    console.log('The item is here!')
  }
  else console.log('The item is not here')
}

contains('Gum', items, checker)
contains('Stapler', items, checker)
/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
