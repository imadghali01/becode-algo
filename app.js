/*Caesar Cipher is a way of "encrypting" a text that, supposably, Julius Caesar used in his communication.

We switch every letter with, for example, two letters before in the alphabet.

The Caesar cipher function will take two parameters str and num; str represents the text we want to cipher and num de amount of letters you want to go forward or backward (using negative numbers)
Notes

    Make it case incensitive
    You should be able to loop back or forward into de the alphabet (if you have to go 3 from z, it would be c)

Expected results

caesarCipher("zoo keeper", 2) ----> "bqq mggrgt"

caesarCipher("bqq mggrgt", -2) ----> "zoo keeper"

caesarCipher("My name is Henrique", 3) ----> "pb qdph lv khqultxh "
*/
function caesarCipher(string, number){
    let stringSpliter = string.toLowerCase().split('');
    let alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
    let stringToAr = stringSpliter.filter((el)=>{
        return (el !== " ");
    });
    const newceasar = stringToAr.map( (e)=>{
        let switchLetter = alphabet.indexOf(e);
        if(switchLetter >= alphabet.length-(number-1) && number > 0){
            return e = alphabet[(switchLetter+number)-alphabet.length];
        }
        else if(switchLetter < 0+(number-1) && number < 0){
            return e = alphabet[alphabet.length-(switchLetter+number)]
        }
        return e = alphabet[switchLetter+number];
    })
    return newceasar;

}
console.log(caesarCipher("My name is Henrique", 3));
