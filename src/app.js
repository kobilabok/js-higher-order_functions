// Higher-order Functions - https://eloquentjavascript.net/05_higher_order.html

// #1 Flatteniing an array using .reduce and .concat
console.log("#1 Flatteniing an array using .reduce and .concat");
let arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.

/*Explanation:
So we call Reduce on the array we want to flatten, 
and then pass in ‘a’ and ‘b’ to our callback function. 
‘a’ is our accumulator, and ‘b’ is the current element, 
or in this case, the current array. 
We’re also passing an empty array as our second argument, 
so ‘a’ in this case is an empty array, and will be our accumulator.

‘a’ is our accumulator 
‘b’ is the current element
*/

let flattenedArray = arrays.reduce((a, b) => a.concat(b), []);
console.log(flattenedArray);

// and get sum of the array using .reduce
let arraySum = flattenedArray.reduce((a, b) => a + b, 0);
console.log(arraySum);

// #2 Your Own Loop
// Your code here.
console.log("#2 Your Own Loop");

function loop(value, test, update, body) {
  if (!test(value)) return;
  else body(value);

  return loop(update(value), test, update, body);
}

loop(
  3,
  (n) => n > 0,
  (n) => n - 1,
  console.log
);
// → 3
// → 2
// → 1

// #3 Everything
console.log("#3 Everything");

//using the FOR loop
function every(array, test) {
  // Your code here.
  for (let i = 0; i < array.length; i++) {
    if (!test(array[i])) return false;
  }
  return true;
}

// using the SOME method
// function every(array, test) {
//   return array.some(test);
// }

console.log(every([1, 3, 5], (n) => n < 10));
// → true
console.log(every([2, 4, 16], (n) => n < 10));
// → false
console.log(every([], (n) => n < 10));
// → true

// #4 Dominant Writing Direction
// console.log("#4 Dominant Writing Direction");

// function dominantDirection(text) {
//   // Your code here.
//   let scripts = countBy(text, char => {
//     let script = characterScript(char.codePointAt(0));
//     return script ? script.direction : "none";
//   })
//    .filter(({name}) => name != "none");

//   return scripts.reduce((a,{name}) => name, 0);
// }

// console.log(dominantDirection("Hello!"));
// // → ltr
// console.log(dominantDirection("Hey, مساء الخير"));
// // → rtl
