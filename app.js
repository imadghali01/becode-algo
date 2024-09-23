/*
Create a function that generates a random rgb value. The outcome should be the same as we declare it in CSS : rgb(?, ?, ?)

ex :

randomRGB();
// Result : "rgb(232, 115, 164)"*/

const randomRGB = () => {let random=[];for(let i = 0; i < 3; i++) { random[i] = Math.floor(Math.random()*256) } return "rgb("+random[0]+", "+random[1]+", "+random[2]+")"};
console.log(randomRGB());
console.log(randomRGB());
console.log(randomRGB());
