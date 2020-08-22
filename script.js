// Assignment Code

var generateBtn = document.querySelector("#generate");

// Write password to the #password input 
/*
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

}
*/

 




const randomFunction = {
  lower: lowerRandom,
  upper: upperRandom,
  number: numberRandom,
  symbol: symbolRandom
};




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
  upperSelect = upperSelect.toLowerCase();

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


//Lowercase determination
function lowerFunc(){
  lowerSelect = prompt("Would you like password  contain lowercase letters?(Yes or No)");
  lowerSelect = lowerSelect.toLowerCase();

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


//Numer determination
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

//Symbol determination
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


lengthFunc();
upperFunc();
lowerFunc();
numberFunc();
symbolFunc();


console.log(passwordLength);
console.log(upperSelect);
console.log(lowerSelect);
console.log(numberSelect);
console.log(symbolSelect);


//Functions that generate random

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
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword){

}

  */