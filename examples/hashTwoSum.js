function hashSum(array, sum) {
    let hash = {}

    for(let i in array) {
        let sumDifference = sum - array[i];

        if(sumDifference in hash) {
            return [array[i], sumDifference];
        }

        hash[array[i]] = 1;
    }

    
}

console.log(hashSum([1,2,3,-1], 0));
