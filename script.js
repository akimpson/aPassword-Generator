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

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);