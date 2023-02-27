'use strict';
/**
 * So strict mode is a special mode that we can activate in JavaScript,
 * which makes it easier for us to write a secure JavaScript code.
 * And when secure, we mean that strict mode makes it easier for us developers
 * to avoid accidental errors. 
 * So basically it helps us introduce the bugs into our code
 * and that's because of 2 reasons
 * FIRST, strict mode forbids us to do certain things
 * SECOND, it will actually create visible errors for us in certain 
 * situations in which without strict mode JavaScript will simply fail
 *  silently without letting us know that we did a mistake.
 */

// The FIRST reason, it forbids us to declare variable with future reserved keyword
const interface = 'word';
const private = 1988;

// The SCEOND reason
let hasDriversLicense = false;
const passTest = true;
if(passTest) hasDriverLicense = true;
if(hasDriversLicense) console.log('I can Drive Now');


