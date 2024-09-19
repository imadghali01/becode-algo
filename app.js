/*Given what is supposed to be typed and what is actually typed, write a function that returns the broken key(s). The function looks like:
Notes

    Broken keys should be ordered by when they first appear in the sentence.
    Only one broken key per letter should be listed.
    Letters will all be in lower case.

Expected results

findBrokenKeys("happy birthday", "hawwy birthday") ➞ ["p"]

findBrokenKeys("starry night", "starrq light") ➞ ["y", "n"]

findBrokenKeys("beethoven", "affthoif5") ➞ ["b", "e", "v", "n"]
*/
function findBrokenKeys(string1, string2){
    function stringSpliter(strings){
        return strings.split('');
    }
    let sOneArray = stringSpliter(string1);
    let sTwoArray = stringSpliter(string2);
    let comparArray=[];
    for (let i = 0; i < sOneArray.length; i++) {
        if(sOneArray[i] !== sTwoArray[i] && !(comparArray.includes(sOneArray[i]))){
            comparArray.push(sOneArray[i]);
        }
    }
    return comparArray;
    
}
console.log(findBrokenKeys("happy birthday", "hawwy birthday"));
console.log(findBrokenKeys("starry night", "starrq light"));
console.log(findBrokenKeys("beethoven", "affthoif5"));