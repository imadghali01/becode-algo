/*Create a function that takes an array and reverses it.
Notes

    Don't use reverse()
    Don't create a new array and push elements to it.
*/
function arrayReverser(array){
    for (let i = 0; i <= Math.floor((array.length-1)/2) ; i++) {
        let switchs = array[i];
        array[i]=array[(array.length-1)-i];
        array[(array.length-1)-i] = switchs;
        
    }
    return array;
}
console.log(arrayReverser([1, 2, 3, 4, 5]));
console.log(arrayReverser(["ddh", "mmm", "sgt"]));
