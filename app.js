/*A vehicle needs 10 times the amount of fuel than the distance it travels. However, it must always carry a minimum of 100 fuel before setting off.

Create a function which calculates the amount of fuel it needs, given the distance.
Notes

    Distance will be a number greater than zero.
    Return 100 if the calculated fuel turns out to be less than 100.

Expected results

calculateFuel(15) ➞ 150

calculateFuel(23.5) ➞ 235

calculateFuel(3) ➞ 100*/

let distance = prompt('give me some distance greater than 0');
while(isNaN(distance) || distance < 1 ){
    distance = prompt('i said greater than 0 and distance will be a number do^^..give me one this time plz!');
}
function fuelNeeded(dist){
    if((dist*10) < 100){
        return "100*/";
    }
    else{
        return dist*10;
    }
}
console.log(fuelNeeded(distance));