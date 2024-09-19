/*A palindrome is any word or phrase that spells the same way both backward and forward.

For example : race car is a palindrome. (don't take spaces, periods, dots, etc in consideration)

Other examples : Madam, I'm Adam, radar, kayak, etc.

You should create a function isPalindrome that takes a parameter text and returns a boolean indicating if the provided text is a palindrome or not.
Notes

    You should be able to to ignore all special characters, spaces, dots, periods, etc. and be case insensitive

Expected results

isPalindrome("kayak") ---> true
isPalindrome("race car") ---> true
isPalindrome("hello world") ---> false
isPalindrome("Madam, I'm Adam") ---> true*/

//effacer les espaces/, et autre signes / comparer en partant du charactere au centre du tableau si la chaine de character a la fin de la string == l inverse d une chaine  au debut

function isPalindrome(string){
    let stringsplit = string.split('');
    let stringToA = arrayCleaner(stringsplit).filter(function(chaine) {
        return chaine !== ''; 
      });;
    let count = 0;
    function arrayCleaner(array) {
        return array.map(function(chaine) {
          return chaine.replace(/[\W_]+/g, '').toLowerCase()
        });
    }
    for (let i = stringToA.length-1; i > (stringToA.length/2); i--) {
        if(!(stringToA[i] == stringToA[count])){
            return false;
        }
        count++;
    }
    return true;
}
console.log(isPalindrome("kayak"));
console.log(isPalindrome("race car"));
console.log(isPalindrome("hello world"));
console.log(isPalindrome("Madam, I'm Adam"));