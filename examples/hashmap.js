// let phoneBook = new Map([
//     ['Jerry', '610-590-1232'],
//     ['Chocolat', '123-543-1234'],
//     ['Pizza', '431-312-1234']
// ])

// for(const [key, value] of phoneBook.entries()) {
//     if(value === '610-590-1232') phoneBook.set('Jerry', 'Uknown');
// }

// let idk = {};
// console.log(typeof(idk));
// console.log(phoneBook.get('Jerry'));

// let characters = new Map();
// let string = 'acbbas';
// let maxFrequencyChar = 0;
// let maxFrequencyCharArr = [];

// for(let i = 0; i < string.length; i++) {
//     if(characters[string[i]]) {
//         characters[string[i]] = characters[string[i]] + 1;
//     }
//     else {
//         characters[string[i]] = 1;
//     }
// }

// for(const [key, value] of Object.entries(characters)) {
//     console.log(key, value);
//     if(value > maxFrequencyChar) maxFrequencyChar = value;
// }

// for(const [key, value] of Object.entries(characters)) {
//     if(value === maxFrequencyChar) maxFrequencyCharArr.push(key);
// }

// console.log(maxFrequencyCharArr);


let characters = new Map();
let string = 'acbbas';
let maxFrequencyChar = 0;
let maxFrequencyCharArr = [];

for(let i = 0; i < string.length; i++) {
    if(characters.get(string[i])) {
        characters.set(string[i], characters.get(string[i]) + 1)
    }
    else {
        characters.set(string[i], 1);
    }
}

for(const [key, value] of characters.entries()) {
    console.log(key, value);
    if(value > maxFrequencyChar) maxFrequencyChar = value;
}

for(const [key, value] of characters.entries()) {
    if(value === maxFrequencyChar) maxFrequencyCharArr.push(key);
}

console.log(maxFrequencyCharArr);
