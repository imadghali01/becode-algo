/*Given a string, reverse all the words which have odd length. The even length words are not changed.
Notes

There is exactly one space between each word and no punctuation is used.
Expected results

reverseOdd("Bananas") ➞ "sananaB"

reverseOdd("One two three four") ➞ "enO owt eerht four"

reverseOdd("Make sure uoy only esrever sdrow of ddo length")
➞ "Make sure you only reverse words of odd length"
*/
function reverseOdd(string){

    let stringSpliter = string.trim().split(/\s+/);
    stringSpliter.forEach(element => {
        if((element.length)% 2 !== 0 ){
            element.split('').reverse();
        }
    });
        
    return stringSpliter.join(' ');

}
console.log(reverseOdd("Bananas"));
console.log(reverseOdd("One two three four"));
console.log(reverseOdd("Make sure uoy only esrever sdrow of ddo length"));