'use strict';

let s = 'Hello, world';
console.log(s.length);
// Getting a character at a specific index like Arrays, using bracket notation.
console.log(s[0]); //=> Returns: 'H'
console.log(s[s.length - 1]); //=> Returns: 'd'
console.log('A320'[0]); //=> Returns: A
console.log('B737'['B737'.length - 1]); //=> Returns: 7

console.log('--------------- Obtaining Portions of a String --------------');
//==========================================================================
console.log(s.substring(1, 4)); //=> Returns: 'ell'
// the Slice() is exactly the same as in Array.
console.log(s.slice(1, 4)); //=> Returns: 'ell' The same thing as Substring 
console.log(s.slice(0, s.indexOf('l') + 1)); //=> Returns: 'Hel'
/**
 * => The Split() method takes a character/divider that acts as a delimiter, and breaks the string
 * into parts based on the delimiter, and Returns these parts in a new array.
 * => Only characters can act as a delimiter, letters are not allowed, and that character/divider/delimiter
 * must be including in the original string and excluded in the result 'new array'.
 * => Passing empty string '' to Split(''), splits the string into an array of single 
 * characters.
 */
console.log(s.split(',')); //=> Returns: ['Hello', 'world']
// Destructuring with split() method.
const [firstWord, secondWord] = s.split(',');
console.log('Desctructuring with slpit()', firstWord, secondWord);
console.log(s.split('')); //=> Returns: ['H', 'e', 'l', 'l', 'o', ',', ' ', 'w', 'o', 'r', 'l', 'd']

console.log('--------------- Searching a String --------------');
//==============================================================
// IndexOf() returns the index if the first result letter or substring, if it there and -1 if it not there.
console.log(s.indexOf('l')); //=> Returns: 2, the first 'l' letter in the whole string.
// Search the index at or after a specific number of indexes.
console.log(s.indexOf('l', 3)); //=> Returns: 3 the first 'l' letter at or after the index 3
console.log(s.indexOf('rld')); //=> Returns: 9 the substring rld start at index 9
// Search the last index of a given character, the opposite of indexOf().
console.log(s.lastIndexOf('l')); //=> Returns: 10 the index of the last letter 'l'.


console.log('--------------- Boolean Searching Methods in ES6 and Later --------------');
//======================================================================================
// These methods Returns TRUE or FALSE
// Checks whether a String starts with a letter or a substring:
console.log(s.startsWith('Hel')); //=> Returns: TRUE
// Checks whether a String ends with a letter or a substring:
console.log(s.endsWith('!')); //=> Returns: FALSE
// Checks whether a letter or a substring exist in a string:
console.log(s.includes('or')); //=> Returns: TRUE


console.log('--------------- Creating Modified Versions of a String --------------');
//==================================================================================
/**
 * => The first argument is the current substring/letter, and the second argument is the new 
 * text/letter.
 * => Replace() method replaces only the first value that match it's first argument.
 * => Replace(), toLowerCase() and toUpperCase() methods Returns a new modified string,
 * and it doesn't modified the original, because Strings are immutable data,
 * cannot be modified.
 */
console.log(s.replace('llo', 'y')); //=> Returns: 'Hey, world'.
/**
 * If the first argument is not exist in the string, replace() ignores arguments and returns the 
 * original string.
 */
console.log(s.replace('gdg', 'ded')); //=> Returns: 'Hello, world' The original string
// ReplaceAll() replaces every string that match it's first argument in the whole string.
console.log(s.replace('l', 'd')); //=> Returns: 'Hedlo, world' / It only replace the first 'l' that it encounters.
const announcment = 'All passengers com to the boarding door 23, Boarding door 23';
console.log(announcment.replaceAll('door', 'gate')); //=> 'All passengers com to the boarding gate 23, Boarding gate 23'
console.log(s.toUpperCase()); //=> Returns: 'HEY, WORLD'.
console.log(s.toLowerCase()); //=> Returns: 'hey, world'.


console.log('--------------- String Padding Methods in ES2017 --------------');
//============================================================================
/**
 * To pad a string at the start or the end:
 * It hase to be The String Length + The Desired Padding Space.
 */
console.log(s.padStart(s.length + 5, '*')); //=> Returns: '*****Hello, world'
console.log(s.padEnd(s.length + 5)); //=> Results: 'Hello, world     '

// Practical use of pad methods:
//=============================
// Formating money
const dollars = 20;
const cents = 1;
// So $20.1 is not the right way to represent cents, so lets fix it with pad method
const fixedCents = cents.toString().padStart(2, '0');
console.log(`$${dollars}:${fixedCents}`);

console.log('--------------- Space Trimming methods --------------');
//====================================================================
const test = '  Test  ';
console.log(test.trim()); //=> Results: 'Test' / Remove spaces at start and end.
console.log(test.trimStart()); //=> Results: 'Test  '  / Remove spaces at the start only, trims left.
console.log(test.trimEnd()); //=> Results: '  Test'  / Remove spaces at the end only, trims right.


console.log('--------------- Miscellaneous String  Methods --------------');
//========================================================================
// concat() adds/concatenates another string to the current string.
console.log(s.concat('!')); //=> Returns: 'Hello, world!'
// repeat() ES6 method that repeats the string according to the given number.
// The result is a single string not multiple strings (concatenate n copies).
console.log(s.repeat(3)); //=> 'Hello, worldHello, worldHello, world'



console.log('------------------ Practical use on String manipulation ---------------');
//====================================================================================
// A function to capitalize words:
const capitalizeThis = stringVar => {
    let finalCapString = [];
    let splittedStringVar = stringVar.split(' ');
    for (const element of splittedStringVar) {
        finalCapString.push(element.replace(element[0], element[0].toUpperCase()));
    }
    return finalCapString.join(' ');
}
console.log(capitalizeThis('muhammad abd-elshafy muhammad hendawi'));


// Mask Creditcard Number:
const maskCreditCard = creditNumber => {
    return creditNumber.toString().slice(-3).padStart(10, '*');;
}
console.log(maskCreditCard(6363623634634));


// My own implementation to REPEAT() Method
const repeatYaboya = (stringValue, numberToRepeat) => {
    let repeatedValue = '';
    for (let i = 0; i < numberToRepeat; i++) {
        repeatedValue += stringValue;
    }
    return repeatedValue;
}
console.log(repeatYaboya('engeghrba', 4));


// My Own implementation to REVERSE() Method
const reverseInput = inputToReverse => {
    let result = '';
    let inputToString = inputToReverse.toString();
    for (let i = inputToString.length - 1; i >= 0; i--) {
        result += inputToString[i];
    }
    return result;
}
console.log(reverseInput('abcdefghijklmnopqrstuvwxyz'));
console.log(reverseInput('zyxwvutsrqponmlkjihgfedcba').toUpperCase());