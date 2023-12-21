/* let i = 0;
while (i < 10) {
  i++;
  console.log(i);
} */
/* 
const SECRET = "BabyHippo";

let guess = prompt("Enter the secret code...");
while (guess !== SECRET) {
  guess = prompt("enter the secret code...");
}
console.log("Congrats you got the secret!");
 */

/* for (let i = 0; i < 1000; i++) {
  console.log(i);
  if (i === 100) break;
}
 */

let maximum = parseInt(prompt('Enter the maximum number!'));
while (!maximum) {
  maximum = parseInt(prompt('Enter a valid number!'));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);

let guess = parseInt(prompt('enter your first guess!'));
let attempts = 1;

while (parseInt(guess) !== targetNum) {
  if (guess === 'q') break;
  attempts++;
  if (guess > targetNum) {
    guess = prompt('Too high! Enter a new guess:');
  } else {
    guess = prompt('Too low! Enter a new guess:');
  }
}
if (guess === 'q') {
  console.log('Ok, you quit.');
} else {
  console.log(`You got it! It took you ${attempts} times to guess`);
}
