/*You will be given an array of drinks, with each drink being an object with two properties: name and price. Create a function that has the drinks array as an argument and return 
the drinks objects sorted by price in ascending order.

Assume that the following array of drink objects needs to be sorted:

Expected results

The output of the sorted drinks object will be:

sortDrinkByPrice(drinks) ➞ [
    {name: "water", price: 3},
    {name: "coke", price: 8},
    {name: "lemonade", price: 10 },
    {name: "lime" , price: 10},
    {name: "vodka", price: 17},
]
*/
drinks = [
    {name: "lemonade", price: 10},
    {name: "lime", price: 10},
    {name: "coke", price: 8},
    {name: "vodka", price: 17},
    {name: "water", price: 3},
  ]
function arrayCleaner(anArray){
    
    let ordredArray = [anArray[0]];

    for(let i=0 ; i<anArray.length ; i++) {
        if(anArray[i].price < ordredArray[0].price){
            ordredArray.unshift(anArray[i]);
        }
        else if(anArray[i].price >= ordredArray[ordredArray.length-1].price && anArray[i].name !== ordredArray[ordredArray.length-1].name){
            ordredArray.push(anArray[i]);
        }
    }
    
    return ordredArray;
}

console.log(arrayCleaner(drinks));