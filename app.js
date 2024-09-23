/*Find the average between multiple numbers using reduce method.

ex:

average(1, 2, 3, 4);
// Result: 2.5*/
const average = (...numbers) => numbers.reduce((a, b) => a + b, 0) / numbers.length;


console.log(average(1, 2, 3, 4));
