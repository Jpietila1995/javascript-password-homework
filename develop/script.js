// Assignment Code
var generateBtn = document.querySelector("#generate");
const characters = {
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    number: "0123456789",
    symbol: "!@#$%^&*()_+{}:<>?"
}

// Write password to the #password input
function writePassword() {
    var passwordSelection = "";
    var length = prompt("How long will your password be? pick number between 8-128.")
    var uppercase = confirm("would you like uppercase letters?")
    if (uppercase) {
        passwordSelection += characters.uppercase
    };
    var lowercase = confirm("would you like lowercase letters?")
    if (lowercase) {
        passwordSelection += characters.lowercase
    };
    var Number = confirm("would you like numbers?")
    if (Number) {
        passwordSelection += characters.Number
    };
    var Symbol = confirm("would you like special characters?")
    if (special) {
        passwordSelection += characters.Symbol
    };
    var passwordFinal =""
    for (let i=0; i<length; i++){
        passwordFinal += passwordSelection[Math.floor(math.random() *passwordSelection.length)]
    }
    document.getElementById("password").innerHTML = passwordFinal;
  
    }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);