/*Find the days between 2 given days

ex :

dayDif(new Date("2020-10-21"), new Date("2021-10-22"));
// Result : 366*/

function dayDif(date1, date2){console.log(Math.abs((date1.getTime()) - (date2.getTime()))/(60*60*24*1000));}

dayDif(new Date("2020-10-21"), new Date("2021-10-22"));