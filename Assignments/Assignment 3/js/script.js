document.getElementById("alert").onclick = function () {
    alert("This is simple Alert.")
}

document.getElementById("printName").onclick = function () {

    let text = document.getElementById("value1").value

    if (text == null || text == "") {
        alert("please enter your name.")
        document.getElementById("output").innerText = ""
        return
    }
    else {
        document.getElementById("output").innerHTML = text
    }

}

document.getElementById("printCity").onclick = function () {
    let cities = ["Faislabad", "Lahore", "Karachi", "Islamabad", "Burewala", "Multan", "Kashmir",]
    let value = document.getElementById("value1").value;
    if (value === String ) 
    {
        document.getElementById("output").innerHTML = ""
        return
    }
    else {
        for (let index = 0; index < 7; index++)
        document.getElementById("output").innerHTML += index + 1 + ")" + " " + cities[index] + "<br>"
    }
}


document.getElementById("addCity").onclick = function () {
    let cities = ["Faislabad", "Lahore", "Karachi", "Isalamabad", "Burewala", "Multan", "Kashmir",]
    let newcity = document.getElementById("value1").value
    cities.push(newcity)
    for (let i = 0; i <= 7; i++)
        if (newcity == null || newcity == "") {
            alert("Please Enter Your City Name.")
            document.getElementById("output").innerText = ""
            return
        }
        else {
            document.getElementById("output").innerHTML += i + 1 + ")" + " " + cities[i] + "<br>"
        }
}

document.getElementById("generate").onclick = function () {
    var t = document.getElementById("value1").value
    for (var i = 1; i <= 10; i++)
        if (t == null || t == "") {
            alert("Enter any number to get table.")
            document.getElementById("output").innerText = ""
            return
        }
        else {
            console.log(t + "*" + i + "=" + t * i)
            document.getElementById("output").innerHTML += t + "*" + i + "=" + t * i + "<br>"
        }


}
document.getElementById("clear2").onclick = function(){
    document.getElementById("output").innerHTML = ""
    document.getElementById("value1").value = " "

}
// Clear button
document.getElementById("clear1").onclick = function (){
    document.getElementById("value1").value = " "
}


