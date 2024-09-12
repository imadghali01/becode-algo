/*Create a function which returns the number of true values there are in an array.
Notes

    Return 0 if given an empty array.
    All array items are of the type bool (true or false).

Expected results

countTrue([true, false, false, true, false]) ➞ 2

countTrue([false, false, false, false]) ➞ 0

countTrue([]) ➞ 0
*/
function trueCounter(array){
    let trueCount=0;
    array.forEach(element => {
        if(element == true){
            trueCount++;
        }
    });
    return trueCount;
}

console.log(trueCounter([true, false, false, true, false]));
console.log(trueCounter([false, false, false, false]));
console.log(trueCounter([]));