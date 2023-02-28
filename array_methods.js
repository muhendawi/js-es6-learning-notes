console.log('<<<<<<<<<<<<<<<<<<<< The Slice() Method >>>>>>>>>>>>>>>>>>>>');
/**
 * => The SLICE() method returns a slice or a subarray, of the specified array.
 * It's two arguments specify the STARTING INDEX (Included), and the 
 * ENDING INDEX (Excluded) of the slice to be returned.
 * => Slice() method doesn't modify the original array.
 * 1) The returned array contains the element specified by the first argument 
 * and all subsequent elements up to, <<BUT NOT INCLUDING>>, 
 * the element specified by the second argument.
 * 2) If only one argument is specified, the return array contains all
 * elements from the start position to the end of the array. 
 * 3) If either argument is negative, it specifies the array element relative to
 * the length of the array.
 */
const newArray = ['a', 'b', 'c', 'd', 'e', 'f'];
// 1) Retruns a new array conatains only 'b', 'c':
console.log(newArray.slice(1, 3));
// 2) Returns a new array from 'c' to the end of the array:
console.log(newArray.slice(2));
// 3) Returns a new array contains 'd' and 'e':
console.log(`NEW ${newArray.slice(-3, -1)}`);
console.log(`Equivalant to the previous Log: ${newArray.slice(newArray.length - 3, newArray.length - 1)}`);
// It dosen't modify the original array:
console.log(newArray);

// =========================================================================================
console.log('<<<<<<<<<<<<<<<<<<<< The Splice() Method >>>>>>>>>>>>>>>>>>>>');
/**
 * 1) splice() can delete elements from an array, insert new elements 
 * into an array, or perform both operations at the same time.
 * 2) splice() modifies/changes/mutates the array on which it is invoked.
 * 
 */

//<<<< DELETION >>>>//
// Returned an array with Removed items from 'f' to the end of the array ['f'], and mutate the original array to what it left ['a', 'b', 'c', 'd', 'e'].
console.log(newArray.splice(5));
console.log(newArray);
// Returned an array with Removed items ['d', 'e'], and mutate the original array to what it left ['a', 'b', 'c'].
console.log(newArray.splice(-2, 2));
console.log(newArray);

//<<<< INSERTION >>>>//
/**
 * => The first two arguments to splice() specify which array elements 
 * are to be deleted. 
 * => These arguments may be followed by any number of additional 
 * arguments that specify elements to be inserted into the array, 
 * starting at the position specified by the first argument.
 */
// Returned an Empty Array ((because of the second arg "0")), and modified the original array by inserting 1, 2, 3 at the index "2" which is after the 'b'.
console.log(newArray.splice(2, 0, 1, 2, 3));
console.log(newArray); //=> ['a', 'b', 1, 2, 3, 'c'].
// Returned an array with Removed items ['c'], and Modified the original array by inserting 4, 5 at index "5" whis is after 3.
console.log(newArray.splice(5, 1, 4, 5));
console.log(newArray); //=> ['a', 'b', 1, 2, 3, 4, 5].

// =========================================================================================
console.log('<<<<<<<<<<<<<<<<<<<< The Reverse() Method >>>>>>>>>>>>>>>>>>>>');
/**
 * The reverse() method DOES Changes/Modifies/Mutates the original array
 */
// My Own implementation to reverse array function.
function Revesing(params = []) {
    const reversedArray = [];
    for (let i = params.length - 1; i >= 0; i--) {
        reversedArray.push(params[i]);
    }
    return reversedArray;
}
console.log(Revesing(newArray));

// The Reverse() method in action, so simple that demands no explaination.
console.log(newArray.reverse()); //=> [5, 4, 3, 2, 1, 'b', 'a']
// Reverse() method DOES modified the original array
console.log(newArray); //=> [5, 4, 3, 2, 1, 'b', 'a']


// =========================================================================================
console.log('<<<<<<<<<<<<<<<<<<<< The Concat() Method >>>>>>>>>>>>>>>>>>>>');
/**
 * The Concat() method acts like The Spread opertor, Creates and returnes a new
 * array that contains the elements of the original arrayon which concat() was invoked,
 * followed by each of the arguments to concat().
 */
// Concat() DOES NOT modifies the original array.
const arr = ['Hello', 'World', '!'];
console.log(newArray.concat("Muhammad", "Hendawi")); //=> [5, 4, 3, 2, 1, 'b', 'a', 'Muhammad', 'Hendawi']

// Concat() flattened arrays passed to it but not nested arrays(arrays of arrays) passed to it.
console.log(newArray.concat(arr)); //=> [5, 4, 3, 2, 1, 'b', 'a', 'Hello', 'World', '!']
console.log(newArray.concat([15, 50, [22, 36]])); //=> [5, 4, 3, 2, 1, 'b', 'a', 15, 50, [22, 36]]


// =========================================================================================
console.log('<<<<<<<<<<<<<<<<<<<< The At() Method >>>>>>>>>>>>>>>>>>>>');
// ES2020
/**
 * The At() method acts exactly like THE BRACKET NOTATION[], but with slight differnece
 * in use case.
 * It specifies the array element relative to the length of the array. like in slice() method.
 * It works on Strings too.
 */
console.log(newArray.at(0));
// Getting the last item in an array with BRACKET NOTATION
console.log(newArray[newArray.length - 1]);
// Getting the last item in an array with at() method
console.log(newArray.at(-1));

// =========================================================================================
console.log('<<<<<<<<<<<<<<<<<<<< The forEach() Method >>>>>>>>>>>>>>>>>>>>');
/**
 * => The forEach() method iterates through an array, invoking a function you specify for each element 
 * and that function takes 3 arguments in order (element, index, array) at least element argument has to be passed.
 * => Continue and break statements don't work with forEach() loop method.
 * => The forEach() is aware of sparse arrays and does not invoke your function for elements that are not there.
 */

// Using For-of first to see the difference and the leverage of forEach() method.
// Math.abs() to get the absloute value of a number, meaning removing the minus (-) sign.
console.log('------------- FOR/OF() -------------');
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
for (const movement of movements) {
    movement > 0 ? console.log(`You deposited ${movement}`) : console.log(`You withdrew ${Math.abs(movement)}`);
}

console.log('------------- FOREACH() -------------');
movements.forEach(movement => movement > 0 ? console.log(`You deposited ${movement}`) : console.log(`You withdrew ${Math.abs(movement)}`));
// USING forEach() function arguments (element, index, array);
movements.forEach((movement, index) => {
    if (movement > 0) {
        console.log(`You deposited No.${index + 1}: ${movement}`);
    } else {
        console.log(`You withdrew No.${index + 1}: ${Math.abs(movement)}`);
    }
});

// Using All arguments by incrementing all array elements.
const numbers = [1, 2, 3, 4, 5, 6, 7];
console.log(numbers);
numbers.forEach((value, index, array) => console.log(array[index] += value));
console.log(numbers);

// ========================================================================
console.log('<<<<<<<<<<<<<<<<<<<< The map() Method >>>>>>>>>>>>>>>>>>>>');
/**
 * => The map() method passes each element of the array on which it is invoked to the function we specify, 
 * and returns an array Containing the values returned by our function.(That means map() doesn't modify the original array).
 * => map() is aware of sparse array, and it's function will not be called for the missing elements, BUT the 
 * returned array will be sparse, the same length and the same missing elements as the original. 
 */
let aa = [1, 2, 3, 4];
// map() returns a new array
let newAa = aa.map(x => x * x);
console.log(aa); //=> [1,2,3,4]
console.log(newAa); //=> [1,4,9,16]


// ========================================================================
console.log('<<<<<<<<<<<<<<<<<<<< The Sort() Method >>>>>>>>>>>>>>>>>>>>');

const noArray = [49, 35, 46, 92, 43, 38, 29];
// Ascending sorting, from lowr to highr
console.log(noArray.sort((a, b) => a - b));
// // Descending sorting, form higher to lower
console.log(noArray.sort((a, b) => b - a));



