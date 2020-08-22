// Assignment Code

var generateBtn = document.querySelector("#generate");

// Write password to the #password input 

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

}

function lowerRandom()  {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);

}

function upperRandom()  {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  
  }

function numberRandom()  {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
    
    }

function symbolRandom()  {
    const symbols = "!#$%&()*+,-/:;<=>?@^_`~"
    return symbols[Math.floor(Math.random() * symbols.length)];
      
      }



console.log(lowerRandom());
console.log(upperRandom());
console.log(numberRandom());
console.log(symbolRandom());


 /*
  var passwordLength = prompt("How long would you like password to be (Please choose number between 8-128)")
  var numSelect = confirm("Would you like password to contain numbers?");
  var symSelect = confirm("Would you like password to contain symbols?");
  var upperSelect = confirm("Would you like password  contain upper case letters?");
  var lowerSelect = confirm("Would you like password to contain lower case letters?");
  */



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

  