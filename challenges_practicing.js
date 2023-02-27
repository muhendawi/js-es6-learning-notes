'user strict';
//===========

console.log('-------------------------- Strings Practicing --------------------------');
// const textArea = document.querySelector('textarea');
// const btn = document.getElementById('btn');
// btn.addEventListener('click', () => {
//     const rows = textArea.value.split('\n');
//     for (const [index, row] of rows.entries()) {
//         const [first, second] = row.toLowerCase().trim().split('_');
//         const output = `${first}${second.replace(second[0], second[0].toUpperCase())}`;

//         let final = output.padEnd(20, ' ');
//         console.log(final + '👍'.repeat(index + 1));
//     }
// });

// btn.addEventListener('click', () => {
//     let finalString = ``;
//     let singleTextArray = textArea.value.split('\n'); //=> Splits the text into single element array
//     for (const element of singleTextArray) {
//         let newElementArray = element.trimStart().split('_');
//         let editedArray = [];
//         let lowerCasedItemArray = [];
//         for (const item of newElementArray) {
//             lowerCasedItemArray.push(item.toLowerCase())
//         }
//         let camelCaseItem = lowerCasedItemArray[1].replace(lowerCasedItemArray[1][0], lowerCasedItemArray[1][0].toUpperCase());
//         editedArray.push(lowerCasedItemArray[0]);
//         editedArray.push(camelCaseItem);
//         // console.log(lowerCasedItemArray[0], camelCaseItem);
//         finalString += `${lowerCasedItemArray[0]}${camelCaseItem}\n`;
//         //     let finalWord = editedArray.join('');
//         // finalString = `${finalString}${finalWord}\n`;
//         // finalString = finalString.padEnd(finalString.length + 5, ' ');
//     }
//     console.log(finalString);
// })


const flights =
    '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)
const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
    let [status, from, to, time] = flight.replaceAll('_', ' ').trim().split(';');
    // let finalFrom = from.slice(0, 3).toUpperCase();
    // let finalTo = to.slice(0, 3).toUpperCase();
    // let finalTime = time.replace(':', 'h');
    // Next Comes the power of TERNARY LOGICAL OPERATOR
    const output = `${status.startsWith('Delayed') ? '🔴' : ''} ${status} from ${getCode(from)} to ${getCode(to)} (${time.replace(':', 'h')})`.padStart(45);
    console.log(output);
}
