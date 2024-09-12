/*Create a function that will return an integer number 
corresponding to the amount of digits in the given integer num.
Expected results

num_of_digits(1000) ➞ 4

num_of_digits(12) ➞ 2

num_of_digits(1305981031) ➞ 10

num_of_digits(0) ➞ 1
*/
function numOfDig(nbr){
    let divCount = 1;
    while(nbr >= 10){
        divCount++;
        nbr/=10;
    }
    return divCount;
}
console.log(numOfDig(1000));
console.log(numOfDig(12));
console.log(numOfDig(1305981031));
console.log(numOfDig(0));