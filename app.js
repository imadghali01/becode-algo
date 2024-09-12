/*Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. 
For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
Notes

    Expect any positive number between 1 and 1000.

Expected results

addUp(4) ➞ 10

addUp(13) ➞ 91

addUp(600) ➞ 180300
|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.
Notes

    All test arrays will have at least one element and are valid.

Expected results

minMax([1, 2, 3, 4, 5]) ➞ [1, 5]

minMax([2334454, 5]) ➞ [5, 2334454]

minMax([1]) ➞ [1, 1]

*/
function sumToTheSpot(aNumber){
    let totalSum=0;
    for(i=1 ; i<= aNumber; i++){
        totalSum = totalSum+i;
    }
    return totalSum;
}
console.log(sumToTheSpot(4));

function minMaxInArray(anArray){
    let max=anArray[0];
    let min=anArray[0];
    for(i=0 ; i < anArray.length ; i++){
        if(anArray[i] > max){
            max = anArray[i];
        }
        else if (anArray[i] < min){
            min = anArray[i];
        }
    }
    let minMaxArray = [min, max];
    return minMaxArray;
}
console.log(minMaxInArray([1, 2, 3, 4, 5]));
console.log(minMaxInArray([2334454, 5]));
console.log(minMaxInArray([1]));

