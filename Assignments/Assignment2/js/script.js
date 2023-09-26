document.getElementById("concatenation").onclick = function(){
    let text;
    let name = prompt("please enter your name")
    text = "Hello " + name + "!..." + " how are you?"
    if(name == 0 ){
        return
    }
    document.getElementById("output").innerHTML = text
    document.getElementById("statement").innerHTML = name
    // alert("Hello " + name + "!..." + " how are you?")
}

document.getElementById("clear2").onclick = function(){
    document.getElementById("output").innerText = ""
}

document.getElementById("clear").onclick = function(){
    document.getElementById("statement").innerText = ""
}

// ask user name

document.getElementById("userName").onclick = function(){
    let text;
    let firstName = prompt("First Name")
    let lastName = prompt("Last Name")
    fullName = firstName + " " + lastName
    if (firstName == 0) {
        return
    } 
    text = fullName + " " + "Welcome here!" 

    document.getElementById("statement").innerHTML = fullName
    document.getElementById("output").innerHTML = text

}
// Comparison of Operators

document.getElementById("comparison").onclick = function(){
    let num1 = 10
    let num2 = 15
    // text = num1 + "=" + num2
    if(num1 = num2){
    alert("false")
    }
   
}
// IF ELSE IF

document.getElementById("ifElse").onclick = function (){
    // let x = 43;
    // if (x < 0){
    //     console.log("x is negative")
    // }
    // else if (x === 0){
    //     console.log("x is zero")
    // }
    // else { 
    //     console.log("x is positive")
    // }
    // document.getElementById("output").innerText = "Check result in console "

    let name = "usman jazib"
    let user = prompt("My name?")
    if(user == name){
        document.getElementById("output").innerHTML = "You know me."

    }else {
        document.getElementById("statement").innerHTML = "You don't know me."
    }
}

//Testing of conditions

document.getElementById("testing").onclick = function(){
    var age = +prompt("Your age?")
    var weight = +prompt("Your weight")

    if(age >= 18 || weight <= 70){
        document.getElementById("output").innerHTML = "You are a smant boy"
        document.getElementById("statement").innerHTML = "Your age is" + " " + age +" "+ "and weight is"+" "+ weight
    }
    if(age == 0 || weight == 0){
        document.getElementById("statement").innerHTML = "Please insert value."
        document.getElementById("output").innerHTML = ""
    }
    else if (age >=18 && weight >= 70){
        document.getElementById("output").innerHTML = "You are a fat boy"
        document.getElementById("statement").innerHTML = "Your age is" + " " + age +" "+ "and weight is"+" "+ weight
    
    }
    else {
        document.getElementById("output").innerHTML = "You are a baby"
        document.getElementById("statement").innerHTML = "Your age is" + " " + age +" "+ "and weight is"+" "+ weight
    
    }

}
// If Statement Nested





// Login
document.getElementById("login").onclick = function(){
    document.getElementById("statement").innerHTML = "username is admin & password is 123"
    let username = prompt("Enter your username:")
    let password = prompt("Enter your password:")
    let correctUsername = "admin"
    let correctPassword = "123"


    
    if( username === correctUsername){
        if(username === 0){
            return
        }
        if(password === correctPassword){
            alert("Welcome," + username + "!")
        }
        else{
            alert("Incorrect Password. Please try again.")
        }
    }
    else{
        alert("Incorrect Username. Please try again.")
        
    }
}

//Check

document.getElementById("check").onclick = function(){
    let num1 = prompt("Enter a number")
    document.getElementById("statement").innerHTML = num1
    if (num1 % 2 === 0 ){
        document.getElementById("output").innerHTML = "Your number is even"
        
    }else{
        document.getElementById("output").innerHTML = "Your number is odd"
    }


}

