// Assignment Code
var generateBtn = document.querySelector("#generate");
// use Math.random to 
let specialChar = ["!", ".", "/", "$", "%", "^", "&", "*", "<", ">", "-", "+", ","];
let numbers = [1,2,3,4,5,6,7,8,9,0];
let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let alphabetUpperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

function generatePassword() {
  let userOptions = prompt("Enter a number from 8 to 128.");
  // parseInt changes strings into numbers.
  let passwordChoice = parseInt(userOptions);

  let wantsNumbers = false;
  let wantsLowercase = false;
  let wantsUppercase = false;
  let wantsSpecialCharacters = false;

  if (isNaN(passwordChoice) || passwordChoice < 8 || passwordChoice > 128) {
    window.alert("Invalid input! Password length must be a number from 8 to 128.");
    return;
  }

  if (window.confirm("Do you want numbers in your password?")) {
    wantsNumbers = true;
  }
  if (window.confirm("Do you want lowercase letters in your password?")) {
    wantsLowercase = true;
  }
  if (window.confirm("Do you want uppercase letters in your password?")) {
    wantsUppercase = true;
  }
  if (window.confirm("Do you want special characters in your password?")) {
    wantsSpecialCharacters = true;
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

