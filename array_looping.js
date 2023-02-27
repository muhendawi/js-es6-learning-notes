'use strict';
console.log('<<<<<<<<<<<<<<<<<<<<<< FOR/OF LOOP >>>>>>>>>>>>>>>>>>>>>>');

//=======================================================================
console.log('-------------------- For/Of with Arrays -----------------');
//=======================================================================
//========================================================
// ES6
// For/Of loop works with ITERABLE objects (Arrays, Strings, Maps and Sets).

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

const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
for (const item of menu) console.log(item);

// TO use the array current index with For/Of loop, we use entries() method on the array.
// menu.entries() returns an array including the element's index and the element itself[0, element]
for (const item of menu.entries()) {
    console.log(item);
}
// So here comes the power of DESTRUCTURING:
for (const [index, item] of menu.entries()) {
    console.log(`${index + 1}: ${item}`);
}

//=======================================================================
console.log('-------------------- For/Of with Objects -----------------');
//=======================================================================
/**
 * => Objects are not iterable by default. 
 * => To iterate through the PROPERTIES of an object, we use Object.key() method.
 */
const obj = { x: 1, y: 2, z: 3 };
for (const item of Object.keys(obj)) {
    console.log(item);
}

/**
 * => To iterate through THE CORRESPONDING VALUES of properties of an object, we
 * use Object.values() method
 */
for (const value of Object.values(obj)) {
    console.log(value);
}
/**
 * => To iterate throught both KEY and VALUE of an object's properties, we use 
 * Object.entries() 
 * => Object.entries() returns an array of arrays.
 */
console.log(Object.entries(obj));
for (const [key, value] of Object.entries(obj)) {
    console.log(`${key}: ${value}`);
}

//=======================================================================
console.log('-------------------- For/Of with Strings -----------------');
//=======================================================================
/**
 * NOTE: 'I💛🐪' each emoji character requires two UTF-16 character to represent, 
 * That's why each emoji length is 2, but in for/of loop it deal with it as 
 * a single character, which is not the same with regular for loop because it depends
 * on the length to loop.
 */
const stringWord = "mississippi";
for (const [index, letter] of Object.entries(stringWord)) {
    console.log(`${/*Number(index)*/+index + 1}:${letter}`);
}
console.log(Object.entries(stringWord));

/**
 * Iterating through a string of emojies
 */
const emoji = 'I💛🐪';
console.log(emoji.length);
for (const letter of emoji) {
    console.log(letter);
}


//=======================================================================
console.log('-------------------- For/Of with Sets and Maps ------------------');
//=======================================================================

//=======================================================================
console.log('----------- Asynchronous iteration with for/await ------------');
//=======================================================================


