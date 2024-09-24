/*Create a function that returns the sum of all positive numbers in an array. (negative numbers should be ignored). 
If only negative numbers are present, it should return 0

ex :

onlyPositives([1, 6, 2, -3, 5, -12]);
// Result : 14

onlyPositives([-3, -4, -2]);
// Result : 0*/
function onlyPositives(array){ let sum=0;array.forEach(element => { if(element > 0 ){sum+=element}});}