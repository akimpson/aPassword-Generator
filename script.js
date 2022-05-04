// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

const numbersString = "0123456789";
const lowercaseString = "abcdefghijklmnopqrstuvwxyz";
const specialCharacterString = "!@#$%^&*()";
const uppercaseString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function passwordLengthPrompt() {
  const passwordLength = window.prompt("Enter Password Length between 8-128");

  return passwordLength;
}

function upperaseCharactersPrompt() {
  const uppercaseCharacters = window.prompt(
    "Would you like uppercase letters? Enter 'YES' or 'NO' to make your choice"
  );
  if (uppercaseCharacters === "YES" || uppercaseCharacters === "yes") {
    return uppercaseString;
  } else {
    return;
  }
}

function lowercaseCharactersPrompt() {
  const lowercaseCharacters = window.prompt(
    "Would you like lowercase letters? Enter 'YES' or 'NO' to make your choice"
  );
  if (lowercaseCharacters === "YES" || lowercaseCharacters === "yes") {
    return lowercaseString;
  } else {
    return;
  }
}

function numericCharactersPrompt() {
    const numericCharacters = window.prompt(
        "Would you like number options? Enter 'YES' or 'NO' to make your choice"
    );
    if(numericCharacters === 'YES' || numericCharacters === 'yes' {
        return numbersString;
    } else {
        return;
    }
}

function specialCharactersPrompt( ) { 
    const specialCharacters = window.prompt(
    "Would you like special characters? Enter 'YES' or 'NO' to make your choice"
    );
if (specialCharacters ==='YES' || specialCharacters === 'yes') {
    return specialCharacters
    } else {
      return;  
    }
}    

function generatePasswordCharacterString(passwordReq) {
    let passwordString = '';

    if (passwordReq.uppercase) {
        passwordString += uppercaseString;
    }
    if (passwordReq.lowercase) {
        passwordString += lowercaseString;
    }
    if (passwordReq.numeric) {
        passwordString += numbersString;
    }

    return passwordString;
}

function generatePassword(passwordString, passwordLength) {
    let password = '';

    for (let i = 1; i <= passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * passwordString.length);
        password += passwordString[randomIndedx];
    }

    return password;
}
