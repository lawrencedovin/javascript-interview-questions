// Create a 2D Array
let numbers =   [
                    [1,2,3],
                    [4,5,6],
                    [7,8,9]
                ];

// Loop a 2D Array
    // numbers.length represents the amount of rows
for(let row = 0; row < numbers.length; row++){
    // numbers[row].length represents the length of the individual rows
    for(let col = 0; col < numbers[row].length; col++) {
        console.log(numbers[row][col]);
    }
}