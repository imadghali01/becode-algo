/*Create a function that takes an array and reverses it.
Notes

    Don't use reverse()
    Don't create a new array and push elements to it.
*/
function arrayReverser(array){
    array.forEach(element => {
        let switchs = element;
        element=array[array.lenght-index];
        array[array.lenght-index] = switchs;
    });
    return array;
}
console.log(arrayReverser([1, 2, 3, 4, 5]));
console.log(arrayReverser(["ddh", "mmm", "sgt"]));
