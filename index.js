//coding
console.log("Hello, World!");
console.log("This is Mika's index.js file.");

let username;
document.getElementById(`mySubmit`).onclick = function() {
    username = document.getElementById(`myText`).value;
     if (username.toLowerCase() === "mika") {
        document.getElementById(`myH4`).textContent = `There can only be one Mika!`;
    } else {
        document.getElementById(`myH4`).textContent = `Hello ${username}!!!`;
    }
}



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
