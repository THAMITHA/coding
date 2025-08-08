function findMissingNumber(arr) {
    const n = arr.length;
    const totalNumbers = n + 1;
    const expectedSum = (totalNumbers * (totalNumbers + 1)) / 2;
    const actualSum = arr.reduce((sum, num) => sum + num, 0);
    return expectedSum - actualSum;
}

const arr1 = [3, 7, 1, 2, 8, 4, 5];
const arr2 = [1, 2, 4, 5, 6];

console.log(findMissingNumber(arr1)); 
console.log(findMissingNumber(arr2)); 