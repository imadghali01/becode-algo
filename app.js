/*Carlos is a huge fan of something he calls smooth sentences.

A smooth sentence is one where the last letter of each word is identical to the first letter the following word (and not case sensitive, so "A" would be the same as "a").

The following would be a smooth sentence "Carlos swam masterfully" because "Carlos" ends with an "s" and swam begins with an "s" and swam ends with an "m" and masterfully begins with an "m".

Create a function that determines whether the input sentence is a smooth sentence, returning a boolean value true if it is, false if it is not.
Notes

    The last and first letters are case insensitive.
    There will be no punctuation in each sentence.

Expected results

isSmooth("Marta appreciated deep perpendicular right trapezoids") ➞ true

isSmooth("Someone is outside the doorway") ➞ false

isSmooth("She eats super righteously") ➞ true
*/

function isSmooth(string){
    let sToArray = string.split(' ');
    let tOrF = true;
    sToArray.forEach(element => {
        element.split('');
    });
    for (let i = 0; i < sToArray.length-2; i++) {
        if(!(sToArray[i][sToArray[i].length-1] == sToArray[i+1][0])){
            tOrF = false;
            break;
        }
    }
    return tOrF;
}
console.log(isSmooth("Marta appreciated deep perpendicular right trapezoids"));
console.log(isSmooth("Someone is outside the doorway"));
console.log(isSmooth("She eats luper righteously"));