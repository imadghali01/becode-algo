/*Create a function that takes the age in years and returns the age in days.
Notes

    Use 365 days as the length of a year for this challenge.
    Ignore leap years and days between last birthday and now.
    Expect only positive integer inputs.

Expected results

calcAge(65) ➞ 23725

calcAge(0) ➞ 0

calcAge(20) ➞ 7300
*/
function ageInDays (ageInYears){
    return ageInYears*365;
}
console.log(ageInDays(37));
console.log(ageInDays(10));