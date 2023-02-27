'use strict';
/**
 * => The REST PATTERN is used where we would otherwise write VARIABLE NAMES 
 * separated by commas.
 * => The REST PATTERN is creating new variables 
 */
//=================================================================================
console.log('<<<<<<<<<<<<<<<<<<< PRACTICAL USE OF REST PATTERN >>>>>>>>>>>>>>>');
//=================================================================================
// PASSING MULTIPLE ARGUMENTS INTO FAUNCTION ALL AT THE SAME TIME.
// passing arbitrary amount of arguments and multiply them and return the total result.
function multiply(...numbers) {
    let results = 1;
    for (const number of numbers) {
        if (isNaN(number)) continue;
        results = results * number;
    }
    return results;
}
console.log(multiply("w", 2, 5));
console.log(multiply(2, 5, 6, 7));
console.log(multiply(2, 5, 8, 9, 3, 5, 6));