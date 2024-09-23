/*Check if Two Arrays Contain the Same Values

ex :

const arr1 = [1, 2, 3, 4];
const arr2 = [3, 1, 4, 2];
const arr3 = [1, 2, 3];

areEqual(arr1, arr2);
// Result : true

areEqual(arr1, arr3);
// Result : false*/
const array1 = [1, 2, 3, 4];
const array2 = [3, 1, 4, 2];
const array3 = [1, 2, 3];
const areEqual = (arr1, arr2) => arr1.length === arr2.length && arr1.every((el) => arr2.includes(el));

console.log(areEqual(array1, array2));
console.log(areEqual(array1, array3));

