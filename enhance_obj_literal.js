'use strict';

/**
 * In ES6: the property name can take any of the forms that are legal in
 * an Object literal: String literals, Computed property names and Symbol
 * property names:
 */
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
    // The following are Computed property names:
    [weekdays[3]]: {
        open: 12,
        close: 22,
    },
    [weekdays[4]]: {
        open: 11,
        close: 23,
    },
    [weekdays[2 + 3]]: {
        open: 0,
        close: 24,
    },
};

const extVar = 1988;

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    /**
     * Suppose we have an OBJECT or values stored VARIABLES and we want
     * to include them in an object: Prior to ES6 we do That:
     */
    // openingHours: openingHours;
    // extVar = extVar;
    /**
     * In ES6: we do it in a much simpler way:
     */
    openingHours,
    extVar,
    /**
     * Prior to ES6: we define methods just as we would define any other property
     * of an Object:
     */
    // order: function(starterIndex, mainIndex){ 
    //          console.log(`${this.starterMenu[starterIndex]}, ${this.mainMenu[mainIndex]}`)};
    /**
     * In ES6: the FUNCTION keyword and the COLON are omitted. Resulting a code 
     * much cleaner as follows: 
     */
    order(starterIndex = 1, mainIndex = 0) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    }
};

// Check for the openingHours Object and the extVAr varaible:
console.log(restaurant);
// Check for the order() Method.
console.log(restaurant.order());