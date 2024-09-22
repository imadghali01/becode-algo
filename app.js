/*Write a function that takes as argument an array of numbers numArray and the sum we want to obtain.

Your function should return every pair of numbers from numArray that adds up to the 'sum'
Notes

    The result should be an array of arrays.
    Any number in the array can be used in multiple pairs (look at the "4" in the exemple below)

Expected results

// For "sum" = 7
[1, 6, 4, 5, 3, 3] ---> [[6,1], [3,4], [3,4]]*/
function twoSums(array, sum){
    /*let newArray=[];
    for (let i = 0; i < array.length-1; i++) {
       for (let j = 1; j < array.length; j++) {
            if (array[i]+array[j] == sum && i !== j){
                newArray.push([array[i],array[j]]);
            }
        }
    }
    return newArray;*/
    let newArray = [];
    let seen = new Set();

    for (let i = 0; i < array.length; i++) {
        let complement = sum - array[i]; // La valeur que nous cherchons

        // Si le complément existe dans le Set, nous avons trouvé une paire
        if (seen.has(complement)) {
            newArray.push([array[i], complement]);
        }

        // Ajouter l'élément courant dans le Set
        seen.add(array[i]);
    }

    return newArray;
}
console.log(twoSums([1, 6, 4, 5, 3, 3], 7));
console.log(twoSums([1, 6, 11, 2, 2, 3, 9, 10], 12));





