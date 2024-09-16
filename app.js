/*Create a function that takes two numbers and a mathematical operator + - / * and will perform a calculation with the given numbers.
Notes

If the input tries to divide by 0, return: "Can't divide by 0!"
Expected results

calculator(2, "+", 2) ➞ 4

calculator(2, "*", 2) ➞ 4

calculator(4, "/", 2) ➞ 2

*/
function calculator(nbr1, operator, nbr2){
    switch(operator){
        case '+' :
            return nbr1 + nbr2;
        break;

        case '-' :
            return nbr1 - nbr2;
        break;

        case '*' :
            return nbr1 * nbr2;
        break;

        case '/' :
            if(nbr2 == 0){
                return "Can't divide by 0!";
            }
            else{
                return nbr1 / nbr2;
            }
        break;
        
        default : 
            return "this operation is not possible!";
    }

}
console.log(calculator(2, "+", 2));
console.log(calculator(2, "*", 2));
console.log(calculator(4, "/", 2));
console.log(calculator(4, "/", 0));
console.log(calculator(4, "x", 2));
