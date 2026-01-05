


//binary to decimal SOMETHING
let binaryNum = "01111000 01111001 01111010" 
let desimaltall = parseInt(binaryNum, 2)   
console.log(`desimaltall:`, binaryNum, `tilsvarer desimaltall`, desimaltall);


function toBinary(number) { 
  return number.toString(2).padStart(8, "0") 
} 
 const tekst = "Elise";

for (let i = 0; i < tekst.length; i++) {
  const ch = tekst[i];
  const asciiCode = ch.charCodeAt(0);
  const binary = asciiCode.toString(2).padStart(8, "0"); // padStart adds leading zeros

  console.log(`Tegn: ${ch} | ASCII: ${asciiCode} | Binært: ${binary}`);
} 
console.log(`All together: ${tekst} in binary is: ${tekst.split('').map(c => toBinary(c.charCodeAt(0))).join(' ')}`);
console.log(`-----------------------------`);
function caesarEncrypt(text, shift) {
  shift = shift % 26;
  return text.split('').map(char => {
    if (char >= 'A' && char <= 'Z') {
      const code = char.charCodeAt(0);
      return String.fromCharCode(((code - 65 + shift + 26) % 26) + 65);
    }
    if (char >= 'a' && char <= 'z') {
      const code = char.charCodeAt(0);
      return String.fromCharCode(((code - 97 + shift + 26) % 26) + 97);
    }
    return char;
  }).join('');
}
console.log(`Caesar Cipher Tests:`);
let something = "hey!";
console.log("Normal:", (something) );
console.log("Caesar:",caesarEncrypt((something), 3));
console.log("Kode 7tihupcw");
// Rock Paper Scissors Game
const choices = ["rock", "paper", "scissors"];
function getComputerChoice() { 
}


let username;
document.getElementById(`mySubmit`).onclick = function() {
    username = document.getElementById(`myText`).value;
     if (username.toLowerCase() === "mika") {
        document.getElementById(`myH4`).textContent = `There can only be one Mika!`;
    } else {
        document.getElementById(`myH4`).textContent = `Hello ${username}!!!`;
    }
}




console.log("a console log is basically just a print statement or a message to the console");
// console.log prints messages to the console for debugging or informational purposes
const pi = 3.14159;
console.log("The value of pi is approximately " + pi);
// const is used to declare variables that won't change
food=11;
console.log(`I love ${food}`);
// Variables store data values food is assigned the string "tacos" this can be changed later or reassigned
food = "tacos";
console.log(`I love ${food}`);
// let is used to declare variables that can change
let age = 25;
// Variables are used to store data values that can be referenced and manipulated later

function happyBirthday(username, age) {
    console.log("Happy Birthday to You!");
    console.log("Happy Birthday to You!");
    console.log(`Happy Birthday dear ${username}!`);
    console.log("Happy Birthday to You!");
    console.log(`You are now ${age} years old! Hurray!`);
}
// When you use ${variable} inside backticks `` not ""
// Function is something that can be repeatedly called with different inputs

happyBirthday("Elise", 16);
// Calling the function with different arguments


function add(a, b) {
    let result = a + b;
    return (`${a} plus ${b} equals ${result}`);
}
function subtract(a, b) {
    let result = a - b;
    return (`${a} minus ${b} equals ${result}`);
}
function multiply(a, b) {
    let result = a * b;
    return (`${a} times ${b} equals ${result}`);
}
function divide(a, b) {
    let result = a / b;
    return (`${a} divided by ${b} equals ${result}`);
}
console.log(add(5, 8));
console.log(subtract(10, 4));
console.log(multiply(6, 7));
console.log(divide(20, 5));


// Each function performs a basic arithmetic operation and returns a formatted string
// The functions are then called with example arguments and the results are logged to the console

function rollDice() {
    let die1 = Math.floor(Math.random() * 6) + 1; // Random number between 1 and 6. +1 to shift range from 0-5 to 1-6
    let die2 = Math.floor(Math.random() * 10) + 1; // Random number between 1 and 10. +1 to shift range from 0-9 to 1-10. * is to scale the range
    let total = die1 + die2;
    return (`You rolled a ${die1} and a ${die2} for a total of ${total}`);
}
console.log(rollDice());

// This function simulates rolling two dice (one 6-sided and one 10-sided) and returns the result

const birthdayMonth= 3; // March
const birthdayDay= 7;

function updateCountdown() {
    const now = new Date();
    let year = now.getFullYear();
    let birthday = new Date(year, birthdayMonth, birthdayDay); // Months are 0-indexed in JavaScript Date
    if (now > birthday) {
        birthday = new Date(year + 1, birthdayMonth, birthdayDay);
    }
const diff = birthday - now;

if (diff <= 0) {
    document.getElementById("countdown").innerHTML = "Happy Birthday!";
    return;
}
const days = Math.floor(diff / (1000 * 60 * 60 * 24));
const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
const minutes = Math.floor((diff / (1000 * 60)) % 60);
const seconds = Math.floor((diff / 1000) % 60);
document.getElementById("countdown").innerHTML =
    `Time until Mika's birthday!: ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds.`;
}
setInterval(updateCountdown, 1000); //1000 milliseconds = 1 second
// This code creates a countdown timer to a specific birthday date and updates it every second
updateCountdown(); // Initial call to display the countdown immediately