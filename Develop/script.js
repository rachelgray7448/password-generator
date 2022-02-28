// Gen Password Button
var generateBtn = document.querySelector("#generate");

var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@",",","^", "_", "`", "{", "|", "}", "~"];
var passwordCharacters = "";
var password = "";

function generatePassword() {

  //prompt length of password 8-128
  var promptLength = window.prompt("Choose a password length between 8 and 128 characters.")
    if (promptLength < 8 || promptLength > 128) {
      window.alert ("You need to provide a valid answer!");
      return null;
    }
    else {}  

  //prompt lowercase
  var promptLowercase = window.confirm("Does your password need to include lowercase characters?");
    if (promptLowercase) {
      passwordCharacters += lowercase ;
    }

  //prompt uppercase
  var promptUppercase = window.confirm("Does your password need to include uppercase characters?");
    if (promptUppercase) {
      passwordCharacters += uppercase;
    }

  //prompt special char
  var promptSpecial = window.confirm("Does your password need to include special characters?");
    if (promptSpecial) {
      passwordCharacters += special;
    }

  //prompt numbers
  var promptNumbers = window.confirm("Does your password need to include numbers?");
    if (promptNumbers) {
      passwordCharacters += numbers;
    }

  var passwordTotal = {
    promptLength: promptLength,
    promptLowercase: promptLowercase,
    promptUppercase: promptUppercase,
    promptSpecial: promptSpecial,
    promptNumbers: promptNumbers,
  }
    
  return passwordTotal;
    
}

var randomChar = function(min, max) {
  var value = Math.floor(Math.random() * (max-min +1));
  return value;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
