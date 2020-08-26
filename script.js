// Assignment Code

var generateBtn = document.querySelector("#generate");

//I decided to use the variables from the CharCode instead of typing everything in because it seems more inclusive.

var lowerChars = String.fromCharCode(97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122);
var upperChars = String.fromCharCode(65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90);
var numberChars = String.fromCharCode(48, 49, 50, 51, 52, 53, 54, 55, 56, 57);
var symbolChars = String.fromCharCode(33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47).concat(58, 59, 60, 61, 62, 63, 64).concat(91, 92, 93, 94, 95, 96);

//Listing that these variables to exist, to be used later on to determine if different CharSets to be included.

var passwordLength;
var upperSelect;
var lowerSelect;
var numberSelect;
var symbolSelect;

/*attempt at shortening the amount needed to fil in

var lowerChars = String.fromCharCode.lowToHigh(97, 122);
*/


/* Attempt at making it easier to input the range in the String.fromCharCode() to assign the variables

function lowToHigh (low, high){
    const range = [];
    for (let i = low; i <= high; i++){
    range.push(i)
    }
    return range
}
*/


//Function to determine the length
  function lengthFunc(){
    passwordLength = prompt("How long would you like password to be (Please choose number between 8-128)")

    if(passwordLength < 8){
      alert("The Password must be between 8-128 characters");
      lengthFunc();
    }
    else if(passwordLength > 128){
      alert("The Password must be between 8-128 characters");
      lengthFunc();
    }
    else if (isNaN(passwordLength)){
      alert("The Password must be between 8-128 characters");
      lengthFunc();
    }
    else {
    }
    return passwordLength;
  }





//Function for if uppercase to be used

function upperFunc(){
  upperSelect = prompt("Would you like password to contain uppercase letters? (Yes or No)");
  
  if (upperSelect === null || upperSelect === "" ){
    alert("Please answer Yes or No")
    upperFunc();
  }
  else if (upperSelect === "yes" || upperSelect === "y"){
    upperSelect = true;
    return upperSelect;
  }
  else if (upperSelect === "no" || upperSelect === "n"){
    upperSelect = false;
    return upperSelect;
  }
  else{
    alert("Please answer Yes or No")
    upperFunc();
  }

  return upperSelect;
}


//To determine if lowercase is needed.

function lowerFunc(){
  lowerSelect = prompt("Would you like password to contain lowercase letters? (Yes or No)");
  

  if (lowerSelect === null || lowerSelect === "" ){
    alert("Please answer Yes or No")
    lowerFunc();
  }
  else if (lowerSelect === "yes" || lowerSelect === "y"){
    lowerSelect = true;
    return lowerSelect;
  }
  else if (lowerSelect === "no" || lowerSelect === "n"){
    lowerSelect = false;
    return lowerSelect;
  }
  else{
    alert("Please answer Yes or No")
    lowerFunc();
  }

  return lowerSelect;
}


//To see if Numbers needed.

function numberFunc(){
  numberSelect = prompt("Would you like password to contain numbers? (Yes or No)");
  numberSelect = numberSelect.toLowerCase();

  if (numberSelect === null || numberSelect === "" ){
    alert("Please answer Yes or No")
    numberFunc();
  }
  else if (numberSelect === "yes" || numberSelect === "y"){
    numberSelect = true;
    return numberSelect;
  }
  else if (numberSelect === "no" || numberSelect === "n"){
    numberSelect = false;
    return numberSelect;
  }
  else{
    alert("Please answer Yes or No")
    numberFunc();
  }

  return numberSelect;
}

//To see if Symbols needed.

function symbolFunc(){
  symbolSelect = prompt("Would you like password to contain symbols? (Yes or No)");
  symbolSelect = symbolSelect.toLowerCase();

  if (symbolSelect === null || symbolSelect === "" ){
    alert("Please answer Yes or No")
    symbolFunc();
  }
  else if (symbolSelect === "yes" || symbolSelect === "y"){
    symbolSelect = true;
    return symbolSelect;
  }
  else if (symbolSelect === "no" || symbolSelect === "n"){
    symbolSelect = false;
    return symbolSelect;
  }
  else{
    alert("Please answer Yes or No")
    symbolFunc();
  }

  return symbolSelect;
}







//Functions that generate random (didnt work out, kept generating the same 4 characters over and over)
/*
function lowerRandom()  {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }
}

function upperRandom()  {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
  }

function numberRandom()  {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  }
    }

function symbolRandom()  {
    const symbols = "!#$%&()*+,-/:;<=>?@^_`~"
    return symbols[Math.floor(Math.random() * symbols.length)];
  }
      }

*/


//Function to check if all previous selections are to be included or not
function passwordGenerate(){
  lengthFunc();
  console.log(passwordLength);
  upperFunc();
  console.log(upperSelect);
  lowerFunc();
  console.log(lowerSelect);
  numberFunc();
  console.log(numberSelect);
  symbolFunc()
  console.log(symbolSelect);

    var characters; 
    var password = "";

    //There has to be a more efficient way to do this, will look at attempting to fix at a later date

    if (upperSelect && numberSelect && symbolSelect && lowerSelect){
      characters = upperChars + lowerChars + numberChars + symbolChars;
    }

    else if (lowerSelect && numberSelect && symbolSelect){
      characters = lowerChars + numberChars + symbolChars;
    }

    else if (upperSelect && numberSelect && symbolSelect){
      characters = upperChars + numberChars + symbolChars;
    }

    else if (upperSelect && numberSelect){
      characters = upperChars + numberChars;
    }

    else if (upperSelect && symbolSelect){
      characters = lowerChars + numberChars;
    }

    else if (lowerSelect && symbolSelect){
      characters = lowerChars + symbolChars;
    }

    else if (lowerSelect && numberSelect){
      characters = lowerChars + numberChars;
    }

    else if (lowerSelect && upperSelect){
      characters = lowerChars + upperChars;
    }

    else if (numberSelect && symbolSelect){
      characters = numberChars + symbolChars;
    }

    else if (lowerSelect){
      characters = lowerChars;
    }

    else if (numberSelect){
      characters = numberChars;
    }

    else if (symbolSelect){
      characters = symbolChars;
    }

    else {
      
    }
      
    
    
    //For loop to randomly select from the required Charsets.

    for(var i = 0; i < passwordLength; i++){
      password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return password;
}


// Write password to the #password input 


function writePassword() {
  var myPassword = "";
  myPassword = passwordGenerate();
  var passwordText = document.querySelector("#password");
  passwordText.value = myPassword;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)



  