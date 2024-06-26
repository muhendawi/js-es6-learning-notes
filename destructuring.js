'use strict';

console.log('<<<<<<<<<<<<<<<<<<<<<< DESTRUCTURING >>>>>>>>>>>>>>>>>>>>>>');
/**
 * => In Destructuring Assignment, the value on the righthand side of the equals
 * sign is an ARRAY or OBJECT(a STRUCTURED value), and the lefthand side specifies
 * one or more variable names using a syntax that mimics array or object literal syntax
 * => It doesn't actually require an array! You can use any iterable object on the
 * righthand side of the assignment, which means "any object that can be used with 
 * for/of loop can also be destructed"
 */
console.log('-------------------------- ARRAYS --------------------------');
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
    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
    orderDelivery: function ({ mainIndex = 0, starterIndex = 0, time, address }) {
        console.log(this.mainMenu[mainIndex], this.starterMenu[starterIndex], time, address);
    }
};

//=========================================================================
const arrayOfValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// a, b, c, d are variables names.
// If we want to skip values or pick some distant values, we just type commas/meaning leaving holes between variables to get to the target values.
// Printing 1 2 3 4 
let [a, b, c, d] = arrayOfValues;
console.log(a, b, c, d);
// Printing 1 and 7
let [x, , , , , , y] = arrayOfValues;
console.log(x, y);

//=================================================
/* Switching variables is easy with Destructuring */
//=================================================
let [pizza, pasta] = restaurant.mainMenu;
console.log(pizza, pasta);
// Without Destructuring
// let temp = pizza;
// pizza = pasta;
// pasta = temp;
// console.log(pizza, pasta);
// With Destructuring
[pasta, pizza] = [pizza, pasta];
console.log(pizza, pasta);
// Destructuring Doesn't flattend nested arrays/array of arrays
const nested = [2, 4, [5, 6]];
let [i, , p] = nested;
console.log(i, p);
// Nested Destructuring
let [ii, , [pp, kk]] = nested;
console.log("YOYO", ii, pp, kk);
//=================================================
/* Destructuring Default Values */
//=================================================
// This becomes useful when retreiving data from APIs.
const [q = 1, w = 1, e = 1] = [7, 8];
// here (e) will print out it's default value (1):
console.log(q, w, e);
//=================================================
/* The Rest Pattern in Destructuring */
//=================================================
// The rest pattern must be the last item in destructuring lefthand side
// Collecting all the remaining values after the first assignment and/or skipping values.
let [, secondItem, , ...theRestAsArray] = [1, 2, 3, 4, 5, 6, 7, 8];
console.log("HoHo", secondItem, theRestAsArray);
// "any object that can be used with for/of loop can also be destructed"
let [firsty, ...rest] = 'Welcome!';
console.log(firsty, rest);


//<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>
console.log('---------------------------- OBJECTS -----------------------------');
// To destruct an object in a simple way like arrays, we must provide the exact name of
// the property as variable name, as follows:
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);
// To have our own named variable from Object, we renaming the properties when destructuring
const { name: restaurantName, openingHours: hours, categories: tags } = restaurant;
console.log(restaurantName, hours, tags);
// Nested Objects, or arrays of objects or objects of arrays:
// Arrays of objects: here we must rename because of the duplicated property names.
let points = [{ x: 1, y: 2 }, { x: 3, y: 4 }];
let [{ x: x1, y: y1 }, { x: x2, y: y2 }] = points;
console.log(x1, y1, x2, y2);

// Objects of Arrays:
const dots = { p1: [1, 2], p2: [3, 4] };
let { p1: [xx1, yy1], p2: [xx2, yy2] } = dots;
console.log(xx1, yy1, xx2, yy2);
let dotss = { p1: [xx1, yy1], p2: [xx2, yy2] };
console.log(dotss.p1[1]);

// Default values for Object destructuring 
const { menu = [], starterMenu: starter = [] } = restaurant;
console.log(menu, starter);

// Nested Object Destructuring
const { fri: { open, close } } = restaurant.openingHours;
console.log(open, close);



//=================================================
// PRACTICAL USE OF DESTRUCTURING ARRAYS;
//=================================================
// Returning and array from a function and then destruct the result immediatly.
function toArray(x, y) {
    return [x * x, y * y];
}
// Getting these values without Desctructuring.
const xyArray = toArray(12, 20);
let xx = xyArray[0], yy = xyArray[1];
console.log(xx, yy);
// Getting these values with Desctructuring.
const [xxx, yyy] = toArray(12, 20);
console.log(xxx, yyy);


const [first, second] = restaurant.categories;
console.log(first, second);
//===========================================================================
// PRACTICAL USE OF DESTRUCTURING OBJECTS;
//===========================================================================
/**
 * the idea here is to make it easy to pass arguments with object destructuring 
 * and to not commit with parameters passing order like in normal parameters.
 */
restaurant.orderDelivery({ time: '22:30', address: 'Via Del Sole, 21' });
