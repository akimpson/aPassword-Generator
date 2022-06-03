// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

const numbersString = "0123456789";
const lowercaseString = "abcdefghijklmnopqrstuvwxyz";
const specialCharacterString = "!@#$%^&*()";
const uppercaseString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Add a function to enter password length
function passwordLengthPrompt() {
  const passwordLength = window.prompt("Enter Password Length between 8-128");

  return passwordLength;
}

// Add functions to answer questions that will define the characters for the password
function lowercaseCharactersPrompt() {
  const lowercaseCharacters = window.prompt(
    "Would you like lowercase letters? Enter 'YES' or 'NO' to choose"
  );
  if (lowercaseCharacters === "YES" || lowercaseCharacters === "yes") {
    return lowercaseString;
  } else {
    return;
  }
}

function uppercaseCharactersPrompt() {
  const uppercaseCharacters = window.prompt(
    "Would you like uppercase letters? Enter 'YES' or 'NO' to choose"
  );
  if (uppercaseCharacters === "YES" || uppercaseCharacters === "yes") {
    return uppercaseString;
  } else {
    return;
  }
}

function specialCharactersPrompt() {
  const specialCharacters = window.prompt(
    "Would you like special characters? Enter 'YES' or 'NO' to choose"
  );
  if (specialCharacters === "YES" || specialCharacters === "yes") {
    return specialCharacters;
  } else {
    return;
  }
}

function numericCharactersPrompt() {
  const numericCharacters = window.prompt(
    "Would you like numeric letters? Enter 'YES' or 'NO' to choose"
  );
  if (numericCharacters === "YES" || numericCharacters === "yes") {
    return numbersString;
  } else {
    return;
  }
}

// Add a function to generate passwords string characters
function generatePasswordCharacterString(passwordReq) {
  let passwordString = "";

  if (passwordReq.lowercase) {
    passwordString += lowercaseString;
  }
  if (passwordReq.uppercase) {
    passwordString += uppercaseString;
  }
  if (passwordReq.specialCharacters) {
    passwordString += specialCharacterString;
  }
  if (passwordReq.numeric) {
    passwordString += numbersString;
  }

  return passwordString;
}

// Add a function that generates the password
function generatePassword(passwordString, passwordLength) {
  let password = "";

  for (let i = 1; i <= passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * passwordString.length);
    password += passwordString[randomIndex];
  }

  return password;
}

// Write the password to the #password input

function writePassword() {
  const passwordLength = passwordLengthPrompt();

  const passwordString = generatePasswordCharacterString({
    lowercase: lowercaseCharactersPrompt(),
    uppercase: uppercaseCharactersPrompt(),
    specialCharacters: specialCharactersPrompt(),
    numeric: numericCharactersPrompt(),
  });

  const password = generatePassword(passwordString, passwordLength);
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add an event listener to generate a button
generateBtn.addEventListener("click", writePassword);
