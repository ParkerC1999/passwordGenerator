// Assignment Code
var generateBtn = document.querySelector("#generate");

var charLC = "abcdefghijklmnopqrstuvwxyz";
var charUC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var charSpec = "!@#$%^&*,.";
var charNum = "0123456789";
var charChoice = "";


function generateString(numberOfSelChars){
  var result = "";
  var charChoiceLength = charChoice.length;

  for ( var i = 0; i < numberOfSelChars; i++ ) {
    result  += charChoice[Math.floor(Math.random() * charChoiceLength)];
  }
  return result;
}


// Write password to the #password input
function writePassword() {

  var numberOfChars = window.prompt("How many characters? (8 min and 128 max)");
  var numberOfSelChars = parseInt(numberOfChars);
  if (numberOfChars === null || numberOfChars === "" || numberOfChars === NaN) {
    alert("You a need to use a number!");
    return;
  } else if (8 > numberOfSelChars || numberOfSelChars > 128) {
    alert("You need to select a number between 8 and 128!");
    return;
  } else {

    var numbers = window.confirm("Do you want numbers?");
    if (numbers) {
      alert("Numbers WILL be added");
      
      charChoice += charNum;

  
    } else {
      alert("Numbers WON'T be added");
    }

    var upperCase = confirm("Do you want uppercase letters?");
    if (upperCase) {
      alert("Uppercase letters WILL be added");

      charChoice += charUC;
  
    } else {
      alert("Uppercase letters WON'T be used");
    }

    var lowerCase = confirm("Do you want lowercase letters?")
    if (lowerCase) {
      alert("Lowercase letters will be used");

      charChoice += charLC;

    } else {
      alert("Lowercase letters WON'T be used");

    }

    var special = confirm("Do you want special characters?");
  
    if (special) {
      alert("Special characters WILL be added")

      charChoice += charSpec;
  
    } else {
      alert("Special characters WON'T be added")
    }

    if (special === false && numbers === false && upperCase === false && lowerCase === false) {
      alert("The password can only generate if you confirm atleast one of questions. Try again!")
      return
    } else {
      let result = generateString(numberOfSelChars);
      document.getElementById("password").value = result;
    }
    
  }
  
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
