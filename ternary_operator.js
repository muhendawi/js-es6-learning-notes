/*====================< THE TERNARY OPERATOR >=====================*/
// Formally Named: THE CONDITIONAL OPERATOR
/**
 * It called <Ternary operator> because it is the only javascript operator
 * that takes three operands, A CONDITIONAL followed by a question mark (?),
 * then an expression to execute if the condition is truthy followed by a colon (:),
 * and finally the expression to execute if the condition is falsy.
 */
// It's act like an alternative/shorthand of if...else statement
const age = 25;
age >= 20 ? console.log('Yes it is 😁') : console.log('No it isn\'t ☹️');

// Using Ternary Operator to DECLARE VARIABLES.
/**
 * According to this syntax and the previous one, if The IF PART and ELSE PART 
 * are statements, one of them will be executed according to the result of the conditional
 * IF they are values, one of them will be returned as a result of the ternary expression, 
 * according to the result of the conditional, so it can be stored in a variable like:
 */
const year = 1995;
let result = year == 1995 ? 'Yes 😁' : 'No ☹️';
console.log(result);

/**
 * Because TERNARY OPERATOR is an expression and expressions produces value,
 * we can Use it in a template literal
 */
console.log(`${year == 1995 ? 'Yes 😁' : 'No ☹️'}`);

/**
 * ALSO we can use TERNARY OPERATOR chained, 
 * similar to an if...else if ...else if ...else 
 */

let measure = 0;
measure >= 1 ? console.log('The measure is  Positive')
    : measure === 0 ? console.log('The measure is Zero')
        : console.log('The measure is Negative');
// This is the same as follows
if (measure >= 1) {
    console.log('The measure is  Positive')
} else if (measure === 0) {
    console.log('The measure is Zero')
} else {
    console.log('The measure is Negative')
}

/**
 * TERNARY OPERATOR shines in places where javascript expects an expression and a logic is need,
 * which if...else statement can't be there.
 */
let bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * (15 / 100) : bill * (20 / 100);
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value was ${bill + tip}`);