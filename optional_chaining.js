'use strict';
// ES2020
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24,
        },
    },
};
/**
 * ** Consider the expression 'restaurant.openingHours.mon?.open':
 * => If 'mon' is NULL or UNDEFINED, then the expression evaluates to UNDEFINED 
 * without any attempt to access the property 'open'.
 * => If 'mon' is some other value, then 'mon?.open' evaluates to whatever 
 * 'mon.open' would evaluates to (and If 'mon' doesn't have a property named 'open',
 * then the vslue will again be UNDEFINED). 
 */
// The following expression evaluates to TypeError, because we cannot access a property of UNDEFINED
// Comment the following:
// console.log(restaurant.openingHours.mon.open);
// The following evaluates to UNDEFINED, because 'mon' doesn't exist.
console.log(restaurant.openingHours.mon?.open);
// and the following also evaluates to UNDEFINED, because 'break' is not exist.
console.log(restaurant.openingHours.sat.break);

/**
 * SO THE RULE HERE:
 * If the subexpression to the left of ?. evaluate to NULL or UNDEFINED, then
 * the entire expression immediately evaluates to NULL or UNDEFINED without any 
 * further property access attempt.
 */

/**
 * This is an easier way than using the If statement:
 * So here: we check if the 'menu' is NULL or UNEFINED if yes so the entire expression
 * evaluates to NULL or UNDEFINED, if its not, we move to 'breakFast' to check if it
 * NULL or UNDEFINED if yes the entire expression will be NULL or UNDEFINED, if its
 * not we move to 'two'.
 * and thats exactly how the optional chaining works
 */
console.log(restaurant.menu?.breakFast?.two);

console.log('<<<<<<<<<<<<<<<<< CONDITIONAL INVOCATION >>>>>>>>>>>>>>>>');
/**
 * => Normally when we invoke a function,if the expression to the left of the parentheses is NULL
 * or UNDEFINED or any other non-function, A TypeError is Thrown.
 * => Now we can invoke a function using CONDITIONAL INVOCATION ?.() instead of ()
 * => With the new ?.() invocation syntax, if the expression to the left of the ?. evaluates
 * to NUL or UNDEFINED, then the entire invocation expression evaluates to UNDEFINED and no
 * exception is thrown.
 */
let notExistingFunc = null;
// The following invcation throw a TypeError
// notExistingFunc();

// but with CONDITIONAL INVOCATION ?.() no exeption is throw and it evaluates to UNDEFINED
console.log(notExistingFunc?.());


// NOTE: of course we can combine The Optional Chaining and The Conditional Invocation.

