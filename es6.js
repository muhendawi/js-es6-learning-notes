/*=====================< ARROW FUNCTION in-Depth >======================*/

// The Syntax:
const multiply = (x, y) => {
    return x * y;
}
console.log(`${multiply(2, 5)}`);

// Arrow function rules:
// --------------------
/**
 * if it has ONE PARAMETER, we can remove parentheses.
 * and if it has ONE LINE OF CODE,
 * 1) we can remove the curly braces
 * 2) we can remove the RETURN keyword, it will always return the value
 * of that statement without the use of RETURN keyword.
 */
/**
 * WE REMOVE THE PARENTHESES WITH <<SINGLE PARAMETER>> ONLY, 
 * NOT, NO PARAMETERS OR MULTIPLE PARAMETERS
 */
const multiplyX = x => x * x;

// parentheses are needed for more than one parameter.
const calcAge = (birthYear, theCurrentYear) => theCurrentYear - birthYear;
console.log(`My Age: ${calcAge(1988, 2053)}`);

// Curly braces needed for more than one line of code
const retirementYearsLeft = (personName, legalRetirementAge, birthYear, theCurrentYear) => {
    const currentAge = calcAge(birthYear, theCurrentYear);
    return `${personName} retires in ${legalRetirementAge - currentAge} years.`;
}
console.log(`${retirementYearsLeft('Muahmmad', 65, 1988, 2023)}`);

// Arrow function with ternary operator
const calcTip = billValue => billValue >= 50 && billValue <= 300 ? billValue * (15 / 100) : billValue * (20 / 100);
const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills);
console.log(tips);
console.log(total);

