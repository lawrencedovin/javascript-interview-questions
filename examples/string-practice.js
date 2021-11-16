// takes in a string
// 1 pointer at start of string
// 1 pointer at end of string
// if right pointer value doesn't equal to left pointer value returns not anagram
// if right and left pointer cross returns anagram after looping

function anagram(string) {
    let leftIndex = 0;
    let rightIndex = string.length - 1;

    while(leftIndex <= rightIndex) {
        if(string[leftIndex] !== string[rightIndex]) return -1;
        else {
            leftIndex += 1;
            rightIndex -=1;
        }
    }

    return `${string} is an Anagram!`;
}

console.log(anagram('ana'));
console.log(anagram('anb'));