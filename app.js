/*In this challenge you will be given an array similar to the following:

[[3], 4, [2], [5], 1, 6]

In words, elements of the array are either an integer or 
an array containing a single integer. We humans can clearly see that 
this array can reasonably be sorted according to "the content of the elements" as:

[1, [2], [3], 4, [5], 6]

Create a function that, given an array similar to the above, 
sorts the array according to the "content of the elements".
Notes

To reiterate, elements of the array will be either integers or 
arrays with a single integer.
Expected results

sortIt([4, 1, 3]) ➞ [1, 3, 4]

sortIt([[4], [1], [3]]) ➞ [[1], [3], [4]]

sortIt([4, [1], 3]) ➞ [[1], 3, 4]

sortIt([[4], 1, [3]]) ➞ [1, [3], [4]]

sortIt([[3], 4, [2], [5], 1, 6]) ➞ [1, [2], [3], 4, [5], 6]
*/
function sortIt(array){

    let sortedArray = [];
    
    for(let i=0 ; i<array.length ; i++) {
        if (Array.isArray(array[i])){
            if(array[i][0] < sortedArray[i]){
                sortedArray.unshift(array[i]);
            }
            else if(array[i][0] > sortedArray[sortedArray.length-1]){
                sortedArray.push(array[i]);
            }
        }
        else{
            if(array[i] < sortedArray[0]){
                sortedArray.unshift(array[i]);
            }
            else if(array[i] > sortedArray[sortedArray.length-1]){
                sortedArray.push(array[i]);
            }
        }
    }

    return sortedArray;
}
console.log(sortIt([4, 1, 3]));
console.log(sortIt([[4], [1], [3]]));
console.log(sortIt([4, [1], 3]));
console.log(sortIt([[4], 1, [3]]));
console.log(sortIt([[3], 4, [2], [5], 1, 6]));