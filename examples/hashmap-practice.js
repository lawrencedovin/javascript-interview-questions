// function that intakes a string
// returns the characters with the highest count

function maxFrequencyCharacter(string) {
    let characterFrequencyMap = new Map();
    let maxFrequencyCharacterValue = 0;
    let maxFrequencyCharacters = [];

    // Loop through string and return Map of Characters with corresponding frequency values
    // 'aabcd' transforms into: a => 2, b => 1, c => 1, d => 1
    // if character is in characterFrequencyMap then set value to current value + 1 
    // if character does not already exist then set value to 1
    for(let i = 0; i < string.length; i++) {
        if(characterFrequencyMap.get(string[i])){
            characterFrequencyMap.set(string[i], characterFrequencyMap.get(string[i]) + 1);
        }
        else {
            characterFrequencyMap.set(string[i], 1);
        }
    }

    // Loop characterFrequencyMap update maxFrequencyCharacterValue to max value found in Map
    for(const [key, value] of characterFrequencyMap.entries()) {
        if(value > maxFrequencyCharacterValue) maxFrequencyCharacterValue = value;
    }

    // If character frequency value is equal to maxFrequencyCharacterValue then push character 
    // to maxFrequencyCharacters
    for(const [key, value] of characterFrequencyMap.entries()) {
        if(value === maxFrequencyCharacterValue) maxFrequencyCharacters.push(key);
    }

    return maxFrequencyCharacters;
}

console.log(maxFrequencyCharacter('aabcd'));
console.log(maxFrequencyCharacter('aabccd'));