// showOutput() function
function showOutput(value) {
    document.getElementById("output").innerHTML = value;
}
//clear button
document.getElementById("clear2").onclick = function () {
    showOutput("")

}
function clearInput() {

    document.getElementById("input").value = ""
}
function getValue() {
    return document.getElementById("input").value
}

//window.onload function 
// Current Date 

let date = new Date();
document.getElementById("string").innerHTML = date

// Name of Today

function todayName() {
    let date = new Date();
    let dayOfWeek = date.getDay();

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let dayName = days[dayOfWeek];
    showOutput(dayName)
}

// Calculate days passed since i born 

function calculateDays() {
    let date = new Date(getValue())
    if (!getValue()) {
        alert("Please inert your date of birth")
        return showOutput('')
    }
    let currentDate = new Date();
    let msDiff = currentDate - date;

    let daysPassed = Math.floor(msDiff / (1000 * 60 * 60 * 24));
    let html = "You have wasted your "
    showOutput(html + daysPassed + ' days.');

}

// When is your next birthday? 

function birthday() {
    let dob = getValue()
    if (!dob) {
        alert("Please Enter your date of birth first ")
        return;
    }
    let date = new Date();
    let nextBirthday = new Date(dob);

    let msDiff = nextBirthday.getTime() - date.getTime()
    let daysDiff = msDiff / (1000 * 60 * 60 * 24);

    let html = "Your next birthday is '" + Math.floor(daysDiff) + "' days"

    showOutput(html)

}
// Greet User

function greetUser() {
    let userName = prompt("Your Name:")
    let date = new Date()
    let hours = date.getHours();

    let greetingMsg = "Good "
    if(hours >= 4 && hours < 12){
        greetingMsg += "Morning!" 
    } else if( hours >= 12 && hours < 17){
        greetingMsg += "Afternoon!"
    } else if( hours >= 17 && hours < 20 ){
        greetingMsg += "Evening!"    
    }
    else{
        greetingMsg += "Night!"
    }
    let msg = greetingMsg + " "+ userName
    showOutput(msg)    
}


// Show Time

function tellTime() {
    let date = new Date();
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    let currentTime = hours + ':' + minutes + ':' + seconds;
    showOutput(currentTime)
}

// Calculate Tax

document.getElementById("Tax").onclick = function (){
    let price = +prompt("Enter your price")
    let taxRate = 17
    var tax = price * (taxRate / 100)
    let totalPrice = price + tax;
    totalPrice = Math.round(totalPrice);
    



    let html = "Tax: " + totalPrice 
    showOutput(html);
}

// Calculate Total Price & Tax:

function calculateTotal(){

    let price = +prompt("Enter your price")
    let taxRate = 17 
    var tax = price * (taxRate / 100)
    let totalPrice = price + tax;
    totalPrice = Math.round(totalPrice);
    



    let html ="Your price is "+ price + " & "+ "Tax is " + totalPrice 
    showOutput(html);
}