// document.getElementById("alert").onclick= 
// <p style= 'text-align: center;'>
// This paragraph is in  center
// </p>
document.getElementById("alert").onclick= function (){
    alert("Assignment By Usman Jazib")

}    
document.getElementById("aNum").onclick= function(){
     alert(2+3) 
}
document.getElementById("vari").onclick= function () {
    var var1 = "Hello";
    alert(`The name of the variable is: ${ var1}`)
}

//Addition
document.getElementById("add2").onclick = function ( ){
    document.getElementById("statement").innerHTML ="5 + 4"
    num1 = 5
    num2 = 4
    let sum = num1 + num2
    document.getElementById("output").innerText= sum
}
// Subsraction
document.getElementById("sub2").onclick = function ( ){
    document.getElementById("statement").innerHTML ="6 - 3"
    num1 = 6 
    num2 = 3
    sum = num1 -num2
    document.getElementById("output").innerText = sum
}
// multiply
document.getElementById("multi2").onclick = function ( ){
    document.getElementById("statement").innerHTML ="5 * 4"
    let num1 = 5 
    let num2 = 4
    let sum = 5 * 4
    document.getElementById("output").innerText= sum
}
// Divide
document.getElementById("div2").onclick = function(){
    document.getElementById("statement").innerText = "6 / 3"
    num1 = 6
    num2 = 3
    sum = num1 / num2
    document.getElementById("output").innerText = sum
}
// Get the button element
document.getElementById("cal").onclick = function(){
    document.getElementById("statement").innerText = "6*3 + (30 / 3) - 4"
    num1 = 6 
    num2 = 3
    num3 = 30
    num4 = 3
    num5 = 4
    sum = num1*num2+(num3/num4) - num5
    document.getElementById("output").innerText = sum 

}
//Show camelCase
document.getElementById("camel").onclick = function(){
    document.getElementById("statement").innerHTML = "Convert <b>(getelementbyid)</b> to camelcase"
    document.getElementById("output").innerHTML = "<b>getElementById</b>"
}
//clear the divs

var button = document.getElementById("clear1")
button.addEventListener("click", clearDiv)
function clearDiv(){
  statement.innerHTML = "&emsp;<br>&emsp;"
  statement.innerHTML = "&emsp;<br>&emsp;"

}
//clear the divs
var button = document.getElementById("clear2")
button.addEventListener("click", clearDiv)
function clearDiv(){
  statement.innerHTML = "&emsp;<br>&emsp;"
  output.innerHTML = "&emsp;<br>&emsp;"


}




