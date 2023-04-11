'use strict';
console.log('<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< SETS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
/**
 * => A SET is a collection of values, like an array is.
 * UNLIKE array:
 * => Sets are not ordered or indexed.
 * => They do not allow duplicates. (only unique values).
 * => Set allows for mixed type values.
 * A value is either a member of a set or it is not a member, it is not possible to
 * ask how many times a value appears in a SET.
 */

// Creating a Set object with the Set() Constuctor:
let s = new Set();   //=> A new empty Set
// The ARGUMENTS to the Set() Constructor can be any iterable(Arrays, Strings, Maps, and Sets)
let t = new Set([1, s]); //=> a new Set with two members, one them is another Set.
let tt = new Set(s); //=> A new set that copies the elements of another set 's'.
let unique = new Set('Mississipi'); //=> Returns 4 elements: 'm', 'i', 's' and 'p'. 
console.log(unique);


// The SIZE property of a set is like the length property of an array.
console.log(unique.size, t.size); //=> 4, 2

console.log('--------- Destrcuturing Set ---------');
//==================================================
let [mLetter, iLetter, sLetter, pLetter] = unique;
console.log(mLetter, iLetter, sLetter, pLetter); //=> Prints: M i s p


console.log('--------- Set Methods ---------');
//=================================================
// Sets methods: add(), delete(), clear() and has().
//=================================================
// ADD()
/**
 * => the add() method takes a single argument; 
 * => If you pass an array, it adds the array itself to the set, not the individual array
 * element.
 * => add() always returns the Set it is invoked on.
 * => If we want to add multiple values to a Set, you can used chained method calls.
 */
console.log(s.size); //=> Returns 0.
s.add(1); //=> Adds 1 to the s Set.
console.log(s.size);
console.log(s.add(1)); //=> Adds nothing and this line has no effect on the Set.
console.log(s.size);
s.add([1, 2, 3]); //=> Adding Array to the Set, The array itself was added not it's elements
console.log(s.size);
console.log(s);
s.add(true); //=> Remember that Sets allows for mixed types.
console.log(s.size);
console.log(s);
s.add(5).add(6).add(7); //=> Chained method calls
console.log(s.size);

// DELETE()
/**
 * => Delete() Returns TRUE if it actaully finds and deletes the given member from
 * a Set, and returns FALSE if it doesn't finds the given member to delete.
 * => Only deletes a single Set element/member at a time.
 */
s.delete(5);
s.delete(6);
s.delete(7);
let result = s.delete('test'); //=> Returns FALSE 
console.log(result);
let result2 = s.delete(true); //=> Returns TRUE
console.log(result2);
console.log(s.size); //=> Size is back down to 2
let delArray = s.delete([1, 2, 3]); //=> Returns FALSE, it consider it different array.
console.log(delArray);

// CLEAR()
// Clear() simply Removes(wiped) everyhting from the Set, It just sized down to an empty Set.
console.log(s.clear());
console.log(s.size); //=> Returns 0 as the Set size.

/**
 * <<<<<<< IMPORTANT NOTE >>>>>>>>>
 * => The Set membership is based on strict equality checks, like the === operator 
 * performs, So A Set can contain both the number 1 and the string '1', because strict
 * consider them distinct values.
 * If the values are objects (or arrays or functions), they are also compared as if 
 * with ===. ((That's why we were unable to delete the array element from the set before))
 */


// HAS()
/**
 * The most important thing we do with Sets is not to add or remove elements, but to 
 * check to see whether a specified value is a member of the Set.
 */
const hasSet = new Set([1, 2, 3, 4, 5, 6, 7, 8]);
console.log(hasSet.has(10)); //=> Returns FALSE: 10 is not a member
console.log(hasSet.has(4)); //=> Returns TRUE: 4 is a member in hasSet Set.


console.log('--------- For/Of Set ---------');
// The Set Class is iterable, so can use for/of loop to iterate through it.
// lets see how to get a specific value (7) from a Set using for/of loop
let targetValue;
for (const member of hasSet) {
    member === 7 && (targetValue = member);
}
console.log('The Target Value', targetValue);

console.log('--------- Spread Operator with Set ---------');
/**
 * => Because Set are iterable, you can convert them to arrays and arguments lists with
 * the ...Spread Operator.
 */
const arrFromSet = [...hasSet]; //=> The set converted to an array
console.log(arrFromSet); //=> [1, 2, 3, 4, 5, 6, 7, 8]
console.log(Math.max(...hasSet)); //=> Returns 8: The Set elements passed as arguments.


console.log('--------- Set forEach() ---------');
/**
 * => It also implements a forEach() method that is similar to the array method of the
 * same name.
 * => NOTE: Becasue Set is not indexed, it passes the element/member value as both
 * the FIRST and the SECOND argument.
 */
let specificValue;
hasSet.forEach(m => m === 7 && (specificValue = m));
console.log(specificValue);

// PASSING ARRAY TO SET CONSTRUCTOR IS DIFFERENT THAN ADDING ARRAY BY ADD() METHOD:
const newArr = [1, 2, 3, 4, 6, 7, 8];
const newSet = new Set(newArr);
newSet.add(newArr);
console.log(newSet);


console.log('<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< MAPS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
//===================================================================================
/**
 * => A Map object represents a set of values known as "KEYS", where each key has another
 * value associated with/mapped to it.
 * A key in the Map may only occur once; it is unique in the Map's collection.
 * => Maps allow us to use arbitrary-values(any javaScript value) as Keys.
 */

// Creating a Map object with the Map() Constuctor:
/**
 * The optional argument to the Map() constructor should be an iterable object that yields
 * two element [key, value] arrays.
 * IN PRACTICE: this means that if we want to initialize a map when you create it, we'll
 * typically write out the DESIRED KEYS and ASSOCIATED VALUES as an array of arrays.
 */
let m = new Map(); //=> Create a new, empty Map.
let n = new Map([['one', 1], ['two', 2]]); //=> A new map initialized with string keys mapped to numbers

/**
 * We can use Map() constructor to:
 * => Copy other maps.
 * => copy the property names and values from an existing object by using
 * Object.entries() that returns an array of arrays.
 */
let copy = new Map(n); //=> A new map with the same keys and values as map n.
let obj = { x: 1, y: 2 };
let p = new Map(Object.entries(obj)); //=> Same as new Map([['x',1],['y',2]]).


console.log('--------- Map Methods ---------');
//========================================================
// Maps methods: set(), get(), delete(), clear() and has().
//========================================================
// Set()
/**
 * Used to ADD a new key/value pair to the Map.
 * => Allows for chained method calls.
 * => Set() always returns the Map it is invoked on.
 * => Calling set() with a KEY that already exist in the Map, updates/changes the value
 * associated with that key.
 */
let mm = new Map().set('first', 1).set('second', 2).set('third', 3);
console.log(mm.set('fourth', 4));
console.log(mm.size); //=> Returns 4: the size of the Map
console.log(mm.set('third', 33)); //=> updates the value associated with the THIRD key to 33 and returns the whole map

// GET()
/**
 * Used to QUERY the value associated with a given key
 * => Returns the VALUE associated with the given key if the key is in the set.
 * => Returns UNDEFINED if it couldn't find the key in the set.
 */
console.log(mm.get('third')); //=> Returns 33 
console.log(mm.get('fifth')); //=> Returns UNDEFINED

// has(), deletes(), clear() are exaclty like we use them in Sets.
console.log(mm.has('sixth')); //=> Returns FALSE, because the key isn't there.
console.log(mm.has('fourth')); //=> Returns TRUE, Because the key is there. 

console.log(mm.delete('third')); //=> Returns TRUE: the key existed and deleted.
console.log(mm.size); //=> Returns 3
console.log(mm.delete('sixth')); //=> Returns FALSE: the key is not founded. failed to delete a nonexistent key

mm.clear(); //=> Wiped everything in the Map, map size now is zero.
console.log(mm.size);


console.log('--------- Destructuring Map ---------');
//==================================================
let mapObject = new Map().set('first', 1).set('second', 2).set('third', 3).set('fourth', 4);
// Destructuring both keys and values.
let [[firstKey, firstValue], [secondKey, secondValue]] = mapObject; //=> Returns: first 1 second 2
console.log(firstKey, firstValue, secondKey, secondValue);
// Destructuring only one them
let [[,], [,], [thirdKey,], [, fourthValue]] = mapObject; //=> Returns: third 4
console.log(thirdKey, fourthValue);
// Destructuring based on KEYS or VALUES:
let [key1, key2, key3, key4] = mapObject.keys(); //=> Returns: first second third fourth
console.log(key1, key2, key3, key4);
let [value1, value2, value3, value4] = mapObject.values(); //=> Returns: 1 2 3 4
console.log(value1, value2, value3, value4);
// Converting Obejct to a map
const objToMap = {
    first: 1,
    second: 2,
    third: 3
}
const newMap = new Map(Object.entries(objToMap)); //=> Returns a new map from object.
console.log(newMap);


console.log('--------- Spread Operator with Map ---------');
//=========================================================
// Converting Map to array of arrays using Spread Operator
let allMap = [...mapObject]; //=> Returns: [['first',1],['second',2],['third',3],['fourth',4]] The same as [...object.entries()]
console.log(allMap);
let keyedMap = [...mapObject.keys()]; //=> Returns: [first, second, third, fourth]
console.log(keyedMap);
let valuedMap = [...mapObject.values()]; //=> Returns: [1, 2, 3, 4]
console.log(valuedMap);


console.log('--------- For/Of with Map ---------');
//=================================================
/**
 * => Like Map Destructuring, we can use keys() and Values() methods that return iterable objects to iterate
 *  keys or values, in insertion order.
 * => The entries() method returns an iterable object that iterates key/value pair, but this is exactly the
 * same as iterating the map directly.
 */
for (const [key, value] of mapObject) { //=> Iterates key/value pairs
    console.log(key, value);
}

for (const key of mapObject.keys()) { //=> Iterates Keys only
    console.log(key);
}

for (const value of mapObject.values()) { //=> Iterates Values only
    console.log(value);
}

console.log('--------- Map forEach() ---------');
//==============================================
mapObject.forEach((value, key) => console.log(key, value));


console.log('------------------ Practical Use of Map -----------------');
//======================================================================
// Quiz
// const question = new Map([
//     ['question', 'What is the best programming language in the world?'],
//     [1, 'C'],
//     [2, 'Java'],
//     [3, 'JavaScript'],
//     ['correct', 3],
//     [true, 'Correct 🥳'],
//     [false, 'Try again!']
// ]);
// let quizMessage = `${question.get('question')}\n`;
// for (const [key, value] of question) {
//     if (typeof key === 'number') quizMessage += `${key}: ${value}\n`;
// }
// let h1Answer = question.get(question.get('correct') === Number(prompt(quizMessage)));
// document.querySelector('h1').textContent = h1Answer;


// Chalenge:
const gameEvents = new Map([
    [17, '⚽️ GOAL'],
    [36, '🔁 Substitution'],
    [47, '⚽️ GOAL'],
    [61, '🔁 Substitution'],
    [64, '🔶 Yellow card'],
    [69, '🔴 Red card'],
    [70, '🔁 Substitution'],
    [72, '🔁 Substitution'],
    [76, '⚽️ GOAL'],
    [80, '⚽️ GOAL'],
    [92, '🔶 Yellow card'],
]);

// Challenge 1:
const events = [...new Set(gameEvents.values())];
console.log(events);

// Challenge 2:
gameEvents.delete(64);
console.log(gameEvents);

// Challenge 3:



// Challenge 4:
for (const [key, value] of gameEvents) {
    key <= 45 ? console.log(`[FIRST HALF] ${key}: ${value}`) : console.log(`[SECOND HALF] ${key}: ${value}`);
}

