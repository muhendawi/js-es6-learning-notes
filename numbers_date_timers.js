'use strict';
/**
 * 
 */
console.log('<<<<<<<<<<<<<<<<<< Separators in Numeric Literals >>>>>>>>>>>>>>>>>');
//================================================================================
// Underscore as a thousand separator.
console.log(1_000_000_000); //=> Prints: 1000000000 "One Billion"
// It works as byte separator also.
console.log(0x89_AB_CD_EF); //=> Prints: 9022413
// Also works as a nibble separator.
console.log(0b0001_1101_0111); //=> Prints: 471
// and on fractions too.
console.log(0.123_456_789); //=> Prints: 0.123456789


console.log('<<<<<<<<<<<<<<<<<< The Remainder Operator >>>>>>>>>>>>>>>>>');
//================================================================================

console.log(25 ** 0.5);
const isEven = n => n % 2 === 0;
console.log(isEven(23));
console.log(isEven(24));


console.log('<<<<<<<<<<<<< Arbitrary Precision Integers with BigInt >>>>>>>>>>>>>>>');
//===================================================================================
/**
 * => Numbers are represented internally as 64 bits, and thats means that there are exactly
 * a 64 ones and zeros to represents any given number, BUT with these 64 bitsonly 53 are
 * used to actually store the digits themselves, and the rest are for storing the position
 * of the decimal points and the sign:
 * => So if there is only 53 to store the digits of a number means there are limits to how big
 * the number could be.
 *
 */

// The biggest number that JS can represents:
console.log(2 ** 53 - 1); //=> Prints: 9007199254740991
console.log(Number.MAX_SAFE_INTEGER); //=> Prints: 9007199254740991
console.log(2 ** 53 + 1);
console.log(2 ** 53 + 2);
console.log(2 ** 53 + 3);
console.log(2 ** 53 + 4);

/**
 * The code above is why bigInt is invented, to accuratelly represents
 * 64 bits numbers.
 * => Just adding n after the number to make it bigInt number.
 * => bigInt do mixed with strings ONLY while concatenation.
 */
console.log(471340303290839009234992098038492n); //=> Prints: 471340303290839009234992098038492



console.log('<<<<<<<<<<<<<<<<<<<<<<<<<< Date in JS >>>>>>>>>>>>>>>>>>>>>>>>>>');
//=============================================================================
/**
 * => Create a Date object with the Date constructor, with no arguments, it returns
 * a Date object that represents the current date and time.
 */
// The current time as a Date Object.
let now = new Date();
console.log(now); //=> Prints: 2023-03-11T22:48:54.427Z as an Object
console.log(new Date(now.setFullYear(now.getFullYear() + 1)));
/**
 * => If we pass one numeric argument, The Date() constructor interprets that argument
 * as the number of milliseconds since the 1970 epoch=era.
 */
let epoch = new Date(0);
console.log(epoch); //=> Prints: 1970-01-01T00:00:00.000Z which is Midnight Jan 1st, 1970, GMT
/**
 * If you specify two or more integer arguments, they are interpreted as the "year", 
 * "month", "day-of-month", "hour", "minute", "second", and "millisecond" in your local time zone
 */
let century = new Date(2100, //=> Year 2100
    0,                       //=> January
    1,                       //=> 1st
    2, 3, 4, 5);             //=> 02:03:04.005, local time
console.log(century);
console.log(new Date(Date.UTC(2100, 0, 1)));

// The current time as a timestamp (a number)
let timeStamp = Date.now();
console.log(timeStamp); //=> Prints: 1678574934427 [Notice] this number increases every milliseciond
// Converting the "now" Date object to a milliseconds timestamp 
let ms = now.getTime();
console.log(ms); //=> Prints: 1678574934427 [Notice] this number increases every milliseciond
// Converting the "now" Date object to a string in standard format
let iso = now.toISOString();
console.log(iso); //=> Prints: 2023-03-11T22:48:54.427Z as a STRING

const startDateTime = new Date(2023, 2, 14, 12, 0, 0, 500).getTime();
console.log(startDateTime);
const triggerDateTime = (new Date(2023, 2, 15, 12, 0, 0, 500)).getTime();
console.log(triggerDateTime);

console.log('<<<<<<<<<<<<< NEW >>>>>>>>>>>>>');
const newNow = new Date(Date.UTC());
console.log(newNow.setUTCFullYear(2100, 2, 6));
console.log(newNow.getUTCFullYear());
console.log(newNow.getUTCMonth());
console.log(newNow.getUTCDate());
console.log(newNow);
// newNow.setUTCHours(15, 15, 15, 15);
console.log(newNow.getTime());
newNow.setUTCDate(24);
console.log(Date.now());
const monDate = new Date();
console.log(+monDate);
console.log(monDate);
