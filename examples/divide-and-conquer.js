const binarySearch = (numArr, value)  => {
    let rightIndex = numArr.length - 1;
    let leftIndex = 0;

    while(rightIndex >= leftIndex) {
        let middleIndex = Math.round((rightIndex + leftIndex) / 2);
        let middleValue = numArr[middleIndex];

        if(value > middleValue) leftIndex = middleIndex + 1;
        else if(value < middleValue) rightIndex = middleIndex - 1;
        else return `Found! value of ${value} at: ${middleIndex}`;
    }

    return -1;
}

console.log(binarySearch([1,2,3,4], 3));
console.log(binarySearch([1,2,3,4], 5));