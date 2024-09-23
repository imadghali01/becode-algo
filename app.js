/*capitalize("belgium");
// Result : "Belgium"

capitalize("brazil");
// Result : "Brazil"

capitalize("brussels");
// Result : "Brussels"*/
function capitalize(string){let capitLetter = string[0].toUpperCase(); console.log(string.replace(string.charAt(0), capitLetter));}

capitalize("belgium");
capitalize("brazil");
capitalize("brussels");