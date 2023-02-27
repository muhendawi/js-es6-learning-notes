'use strict';
/** 
 * => We Always use logical operators to combine/examine two boolean values.
 * => Logical Operators can use ANY DATA TYPE, they can RETURN ANY DATA TYPE,
 * and they can do SHORT CIRCUITING
 * => Now we gonna use && and || operator in short circuiting.
 * 
 * => In OR (||) Operator: 
 * If the first operand(on the left) is TRUTHY, it will immediately return it 
 * and javaScript will skip the other operand(on the right) whatsoever TRUTHY
 * or FALSY, and that's called Short Circuiting
 * If the first operand(on the left) is FALSY, the OR (||) operator returns
 * the other operand(on the right) whatsoever TRUTHY or FALSY.
 * If there is more than two operand, the OR(||) operator will evaluate operands 
 * from left to right untill it met a TRUTHY value or Returns the last operand,
 * whatsoever TRUTHY or FALSY.
 * FALSY Values {Undefined, null, Nan, '', 0} otherwise is TRUTHY
 */
console.log(3 || 'hello'); //=> Returns 3
console.log('' || 'Hello'); //=> Returns Hello
console.log(false || '' || 0 || undefined || 'Muhammad' || 3); //=> Returns Muhammad

/**
 * => In AND (&&) Operator: Is the exact opposite of OR(||) Operator.
 * If the first operand(on the left) is FALSY, it will immediately return it
 * and all the other operands will be skipped/ignored, whatsoever FALSY or TRUTHY.
 * If the first operand(on the left) is TRUTHY, the AND(&&) operator will evaluate
 * the next operand(on the right), if it FALSY return it, if it TRUTHY skip it and
 * move to the next operand(on the right).... and so on, until the last operand 
 * return it whatsoever TRUTHY or FALSY.
 */
console.log(0 && ''); //=> Returns 0
console.log(true && "Muhammad" && false && null && 45); //=> Returns false
console.log(true && "Muhammad" && 45); //=> Returns 45


console.log('<<<<<<<<<<<<<<<<< PRACTICAL EXAMPLES >>>>>>>>>>>>>>>>>');
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
    order: function (starterIndex = 1, mainIndex = 0) {
        console.log([this.starterMenu[starterIndex], this.mainMenu[mainIndex]]);
    },
    orderDelivery: function ({ mainIndex = 0, starterIndex = 0, time, address }) {
        console.log(this.mainMenu[mainIndex], this.starterMenu[starterIndex], time, address);
    }
};
// The OR (||) Operator

// The AND (&&) Operator
// All returns the same results
if (restaurant.order) restaurant.order(2, 2); //=> returns [ 'Garlic Bread', 'Risotto' ]
restaurant.order && restaurant.order(2, 2); //=> returns [ 'Garlic Bread', 'Risotto' ]
restaurant.order?.(2, 2); //=> returns [ 'Garlic Bread', 'Risotto' ]

console.log('<<<<<<<<<<<<<<<< NULLISH COALESCING OPERATOR >>>>>>>>>>>>>>>>>');
/**
 * The NULLISH Operator(??) acts like The OR(||) operator, but it Works on NULL 
 * or UNDEFINED only not on TRUTHY or FALSY like the the OR Operator. 
 * => If the left operand is NULL or UNDEFINED, it moves to the second operand,
 * and so on untill it finds a not NULL or UNDEFINED value to return.
 * => SO, The NULLISH Operator solves the problem with ZERO, EMPTY STRING "", and 
 * FALSE, which are FALSY values but in some circumstances they are perfectly valid
 * values and needed.
 */
let options = { timeout: 0, title: "", verbose: false, n: null };
console.log(options.timeout ?? 1000); //=> Returns 0
console.log(options.title ?? 'Untitled'); //=> Returns ""
console.log(options.verbose ?? true); //=> Returns false
console.log(options.quit ?? false); //=> Returns false
console.log(options.n ?? 100); //=> Returns 100

//======
// NOTE:
//======
/**
 * The ?? NULISH Operator is similar to the && and || operators but does not have
 * higher precedence or lower precedence than they do.
 * If we use it in an expression with either of those operators, we must use explicit 
 * parentheses to specifiy which operation we want to perform first. 
 */
console.log((options.timeout ?? 1000) || 2000); //performing ?? first//=> Returns 2000
console.log(options.timeout ?? (1000 || 2000)); //performing || first//=> Returns 0

console.log('<<<<<<<<<<<<<<<<<<<<< ES2021 USE OF && || ?? >>>>>>>>>>>>>>>>>>');
// Let's have two objects to explain:
const italianRestaurant = {
    name: 'Capri',
    numGuests: 20,
    mealsNum: 0,
}
const frenchRestaurant = {
    name: 'toastBakery',
    owner: 'Giovanni Rossi',
}

// THE OR(||) Operator
// BEFORE ES2021
console.log('---- THE LOGICAL ASSIGNEMENT OR(||) Operator ----');
console.log('---- BEFORE ES2021 ----');
italianRestaurant.numGuests = italianRestaurant.numGuests || 10; //=> Sets numGuests to 20
frenchRestaurant.numGuests = frenchRestaurant.numGuests || 10; //=> Creates and Sets numGuests to 10

console.log(italianRestaurant);
console.log(frenchRestaurant);

// AFTER ES2021
console.log('---- AFTER ES2021 ----');
italianRestaurant.numGuests ||= 10; //=> Sets numGuests to 20
frenchRestaurant.numGuests ||= 10; //=> Creates and Sets numGuests to 10

console.log(italianRestaurant);
console.log(frenchRestaurant);

// THE NULLISH(??) Operator
console.log('---- THE LOGICAL ASSIGNEMENT NULLISH(??) Operator ----');
italianRestaurant.mealsNum ??= 30; //=> Sets mealsNum to 0
frenchRestaurant.mealsNum ??= 30; //=> Creates and Sets mealsNum to 30

console.log(italianRestaurant);
console.log(frenchRestaurant);


console.log('---- THE LOGICAL ASSIGNEMENT AND(&&) Operator ----');
// BEFORE ES2021
italianRestaurant.owner = italianRestaurant.owner && '<ANONYMOUS>'; //=> Creates and Sets owner to UNDEFINED
frenchRestaurant.owner = frenchRestaurant.owner && '<ANONYMOUS>'; //=> Sets owner to '<ANONYMOUS>'

console.log(italianRestaurant);
console.log(frenchRestaurant);

// AFTER ES2021
italianRestaurant.owner &&= '<ANONYMOUS>'; //=> Creates and Sets owner to UNDEFINED
frenchRestaurant.owner &&= '<ANONYMOUS>'; //=> Sets owner to '<ANONYMOUS>'

console.log(italianRestaurant);
console.log(frenchRestaurant);

// We can use &&, || and ?? to replace if statement in many places
// always remember they are logical operators.