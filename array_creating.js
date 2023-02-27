'use strict';
console.log('<<<<<<<<<<<<<<<< Using The Spread Operator >>>>>>>>>>>>>>>>');
// ES2018
/**
 * => The spread operator MAINLY spreads out the values/items of arrays/objects 
 * separated by commas into another Array/Object or as arguments into a method call.
 * => Spread operator is not a true javascript operator. instead it is a special-case
 * syntax available only within object literals
 */
// NOTE Spread operator works with arrays created by constructor as well
// Copying an array to a new array (Shallow Copy).
const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const numberArrayCopy = [...numberArray];
console.log(numberArrayCopy);

// Copying an array into another array.
const newNumberArray = [0, ...numberArray, 10, 11, 12, 13, 14, 15];
console.log(`Copying array into array: ${newNumberArray}`);

// Modifying the copy does not change the original
numberArrayCopy[0] = 0;
console.log(`The Copy: ${numberArrayCopy}`);
console.log(`The Original: ${numberArray}`);



// =========================================================================================
console.log('<<<<<<<<<<<<<<<< Creating Array Using Constructor >>>>>>>>>>>>>>>>');

// Creating empty array with constructor
const a = new Array();

// Creating an empty array with specific length with constructor
// NOTE one numeric argument, used as array length
// NOTE that specifying the length doesn't strict the array for only specific number of elements, 
// it just specifying the length to at least that number (10), so the array can grow more than the specified number
const b = new Array(10);
console.log(b);
console.log(b.length);

// NOTE more than one argument used as array elements or one non-numeric element
const c = new Array(1, 2, 3, 4);
console.log(c);
// THE ISSUE WITH CREATING ARRAY WITH CONSTRUCTOR THAT: CONSTRUCTOR CANNOT CREATE AN ARRAY WITH A SINGLE NUMERIC VALUE.

// =========================================================================================
console.log('<<<<<<<<<<<<<<<< Creating Array Using Array.of() >>>>>>>>>>>>>>>>');// ES6
// NOTE Array.of() solve the issue of one numeric value with Constructor

// Creating an empty Array
const d = Array.of();

// Creating array with a single numeric value = 10
const e = Array.of(10);
console.log(`The one numeric value array: ${e}`);

// Creating array with multiple values
const f = Array.of(1, 2, 3, 4, 5, 6);

// =========================================================================================
console.log('<<<<<<<<<<<<<<<< Creating Array Using Array.from() >>>>>>>>>>>>>>>>');
// ES6
/**
 * Array.from() expects an ITERABLE or ARRAY-LIKE object as its first argument and returns a new array
 * that contains the elements of that object.
 * It works exactly like the spread operator too
 */
// it is also important because it defines a way to make a true-array copy of an array-like object:
let stringVar = 'Hendawi';
const arrayFromString = Array.from(stringVar);
console.log(arrayFromString);

// =========================================================================================
console.log('<<<<<<<<<<<<<<<< Deleting Array Elements >>>>>>>>>>>>>>>>');
// Deleting Elements or a oportion of an array using Array Length
const arrayLength = ['a', 'b', 'c', 'd', 'e'];
console.log(arrayLength);
/**
 * Setting array length to a lower value than the actual one, reduce the length of the
 * array to the given value, and deletes all elements that exceeds that lower value.
 */
arrayLength.length = 4;
console.log(arrayLength);
arrayLength.length = 2;
console.log(arrayLength);

// Using delete keyword to delete elements from arrays
// using delete to delete array elements results in a sparse array.
delete arrayLength[1];
console.log(arrayLength.length, arrayLength);
// Boolean index Search in arrays
console.log(1 in arrayLength);

// =========================================================================================
console.log('<<<<<<<<<<<<<<<< Stacks and Queues with push(), pop(), shift(), and unshift() >>>>>>>>>>>>>>>>');
// array.push() adds an element at the ends of the array
// returns the new length of the array
const arrayMethods = new Array();
let newArrayLength = arrayMethods.push('World');
console.log(newArrayLength, arrayMethods);

// array.unshift() add an element at the beginning of the array
// retruns the new length of the array
arrayMethods.unshift('Hello');
console.log(arrayMethods.length, arrayMethods);

// array.pop() removes the last element at the end of the array.
// retruns the removed elements
let theRemovedElement = arrayMethods.pop();
console.log(arrayMethods.length, theRemovedElement);

// array.shift() romves the first element at the beginning of the array
// returns the removed element
theRemovedElement = arrayMethods.shift();
console.log(arrayMethods.length, theRemovedElement);

// =========================================================================================
console.log('<<<<<<<<<<<<<<<< Iterating Arrays >>>>>>>>>>>>>>>>');

// ES6
// for/of looping method
/**
 * The for/of loop works with iterable objects
 * ITERABLE OBJECTS: like <ARRAYS>, <STRINGS>, <SETS> and <MAPS>: they represent a sequence
 * or set of elements that you can loop or iterate through using a for/of loop.
 */
let stringWord = 'Hello World!'
let data = [...stringWord], sum = '';
// let data = [1,2,3,4,5,6,7,8,9], sum = 0;
for (const element of data) {
    sum += element;
}
console.log(`The Sum of the Data: ${sum}`);

// Looping backward using the old/regular for loop
let backwardSum = '';
for (let i = data.length - 1; i >= 0; i--) {
    backwardSum += data[i];
}
console.log(`The reversed sum of Data: ${backwardSum}`);


// the forEach() method, it offers a functional approach to array iteration.
/**
 * You pass a function of the forEach() method of an array, and forEach() invokes
 * your function once on each element of the array.
 */

// =========================================================================================
console.log('<<<<<<<<<<<<<<<< Continue and Break Statments >>>>>>>>>>>>>>>>');
/**
 * the Continue statment restarts the loop at the next iteration.
 * The Continue Statement can be used only within the body of a loop,
 * Using it anywhere is causing a syntax error.
 */
// READ JUMPS statments in <<JavaScript the definitive guide>> in chapter 5

// here we excluded the years greater than or equal to 2010
// So this loop accepts only from 2009 and lower.
const years = [1991, 2007, 1969, 2020, 1988];
const now = new Date().getFullYear();
const ages = [];
for (const element of years) {
    if (element >= 2005) continue;
    ages.push(now - element);
}
console.log(ages);

/**
 * BREAK causes the innermost enclosing loop or switch statements
 * to exit immediately 
 */
// Using BREAK statement when looping in a sparse Array.
const sparseArray = [];
sparseArray[0] = 'Hello';
sparseArray[2] = 'My firend';
sparseArray[4] = 'Long time no see';
console.log(sparseArray);

// This loop only prints "Hello" string.
for (const element of sparseArray) {
    if (element === undefined) break;
    console.log(element);
}




