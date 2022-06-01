
const prompt = require('prompt-sync')({sigint: true});


let num1 = Math.floor(Math.random() * 100);
console.log(num1)
let guess = Number(prompt("Im thinking of a number between 1 & 100. Try to guess it: "));
let count = 0;


while(guess !== num1 && count <= 2){
    count++;
     guess = Number(prompt(" Try again: "))
     if (guess === num1){
console.log(" You have guessed correct")
     } if (guess > num1){
         console.log("Sorry. Too high. Guess again! ")
     } if (guess < num1){
         console.log("Sorry.Too Low. Guess again! ")
     }  if (count === 3){
         console.log("Sorry, I was thinking of " + num1)
     }
        
     }  


