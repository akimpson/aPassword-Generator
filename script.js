// Add an array of letters (uppercase & lowercase), numbers, and symbols
   
// prettier-ignore
uppercaseArray = ['A', 'B', 'C','D', 'E', 'F', 'G', 'H', 'I','J', 'K', 'L', 'M', 'N', 'O','P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y','Z'];
// prettier-ignore
lowercaseArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i','j', 'k', 'l', 'm', 'n', 'o','p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y','z'];
// prettier-ignore
symbolsArray = ['!', '?', '@', '#', '$', '%', '/', '<', '>','&', '*'];
// prettier-ignore
numbersArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8'];


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");




// Write password to the #password input
// Get criteria for the password and assign a password with querySelector to be generated on screen in browser
var getPassword = function () {
  getCriteria();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

};

// Generate a password once criteria has been input by user
var generatePassword = function () {
    var password = "";
    for (let i = 0; i < length; i++) {
        var randomCharacters = Math.floor(Math.random() * passwordOptions.length);
        password = password + passwordOptions[randomCharacters];
    }
    return password;
};

// Create a function to ask for password criteria
var getCriteria = function () {
    // Each time a password generates it will reset the array
    passwordOptions = [];

    // Ask the user for input on password length, require a valid input value, call the function again if input is invalid
    length = parseInt(
        window.prompt(
            "Choose the number of characters for your new password. Please choose betweem 8 and 127 characters."
        )
    );
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);