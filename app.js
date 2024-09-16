/*Create a function that takes in a number as a string n and returns the number without trailing and leading zeros.

    Trailing Zeros are the zeros after a decimal point which don't affect the value (e.g. the last three zeros in 3.4000 and 3.04000).
    Leading Zeros are the zeros before a whole number which don't affect the value (e.g. the first three zeros in 000234 and 000230).

Notes

    Return a string.
    If you get a number with .0 on the end, return the integer value (e.g. return "4" rather than "4.0").
    If the number is 0, 0.0, 000, 00.00, etc... return "0".

Expected results

removeLeadingTrailing("230.000") ➞ "230"

removeLeadingTrailing("00402") ➞ "402"

removeLeadingTrailing("03.1400") ➞ "3.14"

removeLeadingTrailing("30") ➞ "30"
*/

function removeLeadingTrailing(number){
    
    const tNumber = numStr => Number(number).toString().replace(/(\.\d*?)0+$/, '$1').replace(/\.$/, '');
    return tNumber();
  /*  let tArray = number.split("");
    let pointIndex = tArray.indexOf(".");
    let count = 0;
    while(tArray[count] == "0"){
        tArray.splice(count, 1);   
        count++;
    }
    if(pointIndex !== -1){
        for (let i = tArray.length-1 ; i >= pointIndex; i--) {
            if(tArray[i] == "0" || tArray[i] == "."){
                tArray.pop();
            }
            else{
                break
            }  
        }
    }
    return tArray.toString().replace(/,/g , "");*/
}

const tNumber = numStr => Number(number).toString().replace(/(\.\d*?)0+$/, '$1').replace(/\.$/, '');

console.log(removeLeadingTrailing("230.000"));
console.log(removeLeadingTrailing("000000402"));
console.log(removeLeadingTrailing("03.1400"));
console.log(removeLeadingTrailing("30"));