/*Create a function that takes an array and reverses it.
Notes

    Don't use reverse()
    Don't create a new array and push elements to it.
*/
function arrayReverser(array){
    array.forEach(element, i => {
        let switchs = element;
        element=array[array.lenght-i];
        array[array.lenght-i] = switchs;
    });
    return array;
}
console.log(arrayReverser([1, 2, 3, 4, 5]));
console.log(arrayReverser(["ddh", "mmm", "sgt"]));
