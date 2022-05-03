// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

const numbersString = '0123456789';
const lowercaseString = 'abcdefghijklmnopqrstuvwxyz';
const specialCharacterString = '!@#$%^&*()';
const uppercaseString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function passwordLengthPrompt() {
    const passwordLength = window.prompt('Enter Password Length between 8-128');

    return passwordLength;
}

