/*Create a function that converts Celsius to Fahrenheit and vice versa.
Notes

    Round to the nearest integer.
    If the input is incorrect, return "Error".
    Look on Google how to convert F to C and vice-versa

Expected results

convert("35°C") ➞ "95°F"

convert("19°F") ➞ "-7°C"

convert("33") ➞ "Error"
*/
//Celsius * 9/5 + 32
function convert(string){
    let verifData = string.match(/(\d+)(°[FC])/);
    if(!verifData){
        return "Error";
    }
    let temp = parseInt(verifData[1]);
    let unit = verifData[2];
    let calcul;
    if(unit === "°C"){
        calcul = temp * 9/5 + 32;
        return `${Math.round(calcul)}°F`;
    }
    else if(unit === "°F"){
        calcul= (temp- 32) * 5/9;
        return `${Math.round(calcul)}°C`;
    }
    else{
        return "Error";
    }
}

console.log(convert("35°C"));
console.log(convert("19°F"));
console.log(convert("33"));
