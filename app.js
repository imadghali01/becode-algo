/*Create a function that takes a string parameter and return another string with all the words inversed.
Notes

Attention !

    The order of the words doesn't change, just the letters of each word

Expected results

"This is a string of words" ----> "siht si a gnirts fo sdrow"*/

function wordReverser(string){
const stringspl = string.split(' ');
let newA = stringspl.map((e)=>{
    return e.split('').reverse().toString().replace(/,/g , '');
});
return newA;
}
console.log(wordReverser("This is a string of words"));