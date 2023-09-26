function showOutput(value) {
    document.getElementById("output").innerHTML = value;
}
//Clear button

document.getElementById("clear2").onclick = function () {
    showOutput("")
}

function clearInput() {

    document.getElementById("input").value = ""
}
// Input Value
function getValue() {
    return document.getElementById("input").value
}
// tostifyError


// Round A Number

function roundNum() {
    let number = getValue()
    let roundedNumber = Math.round(number);
    showOutput(roundedNumber)

}
// Ceil A Number
function ceilNum() {


    let number = getValue()
    let ceiledNumber = Math.ceil(number);
    showOutput(ceiledNumber)

}
// Floor A Number
function floorNum() {
    let number = getValue()
    let floorNumber = Math.floor(number)
    showOutput(floorNumber)
}

// Generate A Random Number

function randomNum() {
    let random = Math.random()
    showOutput(random)
}

// Throw a Dice

function throwDice() {
    let randomNum = Math.floor(Math.random() * 6) + 1;
    showOutput(randomNum)
}

// Generate a Strong Password
function generatePassword() {
    let Alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let numbers = "0123456789";
    let characters = Alphabets + numbers;
    let password = ""
    let length = getValue()
    
    for (let i = 0; i < length; i++){
        let randomNum = Math.floor(Math.random()* characters.length);
        password += characters.charAt(randomNum);
    }
    if(!password){
        alert("Please insert password length.")
        return
    }
    let html = '<p style = "color: red; font-size: 20px;">Here we are not using symbols.</p>'
    showOutput(password +  html  ) 
    
    
}
 // Converting To Strings

 function convertIntoString(){
    let num = getValue();
    if(!num){
        alert("Please enter some number.")
        return
    }    
    console.log(num)
    console.log(typeof num)
    num = Number(num)
    console.log(num)
    console.log(typeof num)
    showOutput("Check in console")


}
// Controlling Length

document.getElementById("control").onclick = function (){

    let num1 = getValue();
    let num2 = num1.toFixed(2);

    console.log(num2)
}


// Calculate GST 
function calculateGST(){
    let cost = getValue()

    if(!cost){
        alert("Please enter cost")
        return;
    }
    cost = Number(cost);
    let taxInput = +prompt("Enter your tax")

    let tax = cost * (taxInput / 100)
    let totalCost = cost + tax

    totalCost = Math.round(totalCost)
    let html = '<p style = "color: red;">Your total amount including tax is    </p>'
    showOutput(html + totalCost)
}







