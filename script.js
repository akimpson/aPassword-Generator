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

function lowercaseCharactersPrompt() {
    const lowercaseCharacters = window.prompt(
        "Would you like lowercase lettercase? Enter 'YES' or 'NO' to make your choice"
    );
    if (lowercaseCharacters === 'YES' || lowercaseCharacters === 'yes') {
        return lowercaseString;
    } else {
        return;
    }
}