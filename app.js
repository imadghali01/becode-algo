/*Create a function that takes two arguments. Both arguments are integers, a and b. Return true if one of them is 10 or if their sum is 10.
Notes

Don't forget to return the result.
Expected results

makesTen(9, 10) ➞ true

makesTen(9, 9) ➞ false

makesTen(1, 9) ➞ true
*/

function areThenOrNot (argOne, argTwo){
    if(argOne !== 10 && argTwo !== 10 && (argOne + argTwo) !== 10){
        return false;
    }
    else{
        return true;
    }
}
console.log(areThenOrNot(6,8));
console.log(areThenOrNot(10,8));
console.log(areThenOrNot(6,4));