console.log('<<<<<<<<<<<<<<<<<<<<<< Spread Operator with Arrays >>>>>>>>>>>>>>>>>>');
/**
 * => The SPREAD OPERATOR is used where we would otherwise write VALUES separated by commas.
 * => The SPREAD OPERATOR doesn't create new variables, It uses an Existing one. 
 */
/**
 * ES6
 * => Using the spread operator (...) to include the elements of one array within
 * an array literal.
 * => The spread operator is a convenient way to create a (shallow) copy of an array:
 * => Spread operator works on iterables, that is anything that can works with for/of loop,
 * Iterables in JavaScript are: Arrays, Strings, Maps and Sets.
 */
// copying the values of an array one by one to another THE OLD WAY, like this:
const a = [1, 2, 3];
const oldWay = [0, a[0], a[1], a[2], 4];
console.log(oldWay);
// the new way with spread operator:
const newWay = [0, ...a, 4];
console.log(newWay);
// To log the individual elements of an array and not the whole array:
console.log(...newWay);

// shallow copying an array
const newShallowCopy = [...a];
console.log(newShallowCopy);

// Converting a string into an array of single-character strings.
let stringVar = 'Muhammad Hendawi';
// const singleCharArray = [...'Muhammad Hendawi']
const singleCharArray = [...stringVar];
console.log(`${singleCharArray}`);

// Spread Operator as Parameters
const params = ['welcome', 'back', 'again', '!'];
function printString(par1, par2, par3, par4) {
    console.log(`${par1} ${par2} ${par3}${par4}`);
}
printString(...params)
//===================================================================================
console.log('<<<<<<<<<<<<<<<<<<<<<< Spread Operator with Objects >>>>>>>>>>>>>>>>>>');
/**
 * => if the object that is spread and the object that is spread into both have a property
 * with the same name, then the value of that property will be the one that comes later
 * => The spread operator only spreads the own properties of an object, not the inherited
 * ones.
 */
// NOTE: when duplicate properties, the value that comes later take place.
let o = { x: 1 };
let p = { x: 0, ...o };
// here x = 1 because x:1 comes later with spread operator
console.log(p.x);
let q = { ...o, x: 0 };
// here x = 0 because it comes later after the spread operator which contains x:1
console.log(q.x);

// The inherited properties:
let po = Object.create({ x: 2 });
let poNew = { ...po };
// here po.x = undefined because spread operator doesn't spread the inherited
// properties only the own ones.
console.log(poNew.x);
