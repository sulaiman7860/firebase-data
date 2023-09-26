var originalText = "I love my country Pakistan.<br>I like my city Faisalabad.<br>I love my Homeland";
var cities = ["Faisalabad", "Lahore", "Karachi", "Islamabad", "Burewala", "Sheikhupura", "Kashmir"];

document.getElementById("inputGroup").innerHTML = originalText;

function lowerCase() {
    let lowerCaseText = originalText.toLowerCase();
    document.getElementById("outPut").innerHTML = lowerCaseText;
}

function upperCase() {
    let upperCaseText = originalText.toUpperCase();
    document.getElementById("outPut").innerHTML = upperCaseText;
}

function capitalize() {
    let capitalizeText = '<span style="text-transform: capitalize;">' + originalText + '</span>';
    document.getElementById("outPut").innerHTML = capitalizeText;
}

function betterForm() {
    let value = document.getElementById("inPut").value
    if (!value) {
        alert("Enter Someting")
        return
    }
    value = value.toLowerCase()
    document.getElementById("outPut").style.textTransform = 'capitalize'
    document.getElementById("outPut").innerHTML = value

}

function printCities() {
    document.getElementById("outPut").innerHTML = ""
    for (let i = 0; i < cities.length; i++) {
        document.getElementById("outPut").innerHTML += i + 1 + ")" + " " + cities[i] + "<br>"
    }
}

function addCity() {
    let city = document.getElementById("inPut").value;
    if (city.length < 3) {
        alert("Enter Your City Name");
        return;
    }
    let cityFirstLetters = city.charAt(0).toUpperCase();
    let cityAllLetters = city.slice(1).toLowerCase()

    let capitalLetters = cityFirstLetters + cityAllLetters

    let cityFound = false;
    for (let i = 0; i <cities.length; i++)  {
        if (cities[i] === capitalLetters) {
            cityFound = true;
            let html = '<span style="color: #e63946;">' + "'" + capitalLetters + "'" + '</span>' + " " + "is already in the List"
            document.getElementById("outPut").innerHTML = html;
        }
    }
    if (cityFound === false) {
        cities.push(capitalLetters)
        let html = '<span style="color: #00b4d8;">' + "'" + capitalLetters + "'" + '</span>' + " " + "is successfully added into the List"
        document.getElementById("outPut").innerHTML = html;
    }
}

function checkCity() {
    let city = document.getElementById("inPut").value;
    if (city.length < 3) {
        alert("Enter Your City Name");
        return;
    }
    let cityFirstLetters = city.charAt(0).toUpperCase();
    let cityAllLetters = city.slice(1).toLowerCase()

    let capitalLetters = cityFirstLetters + cityAllLetters

    let cityFound = false;
    for (let i = 0; i <cities.length; i++)  {
        if (cities[i] === capitalLetters) {
            cityFound = true;
            let html = '<span style="color: #e63946;">' + "'" + capitalLetters + "'" + '</span>' + " " + "is added in the List"
            document.getElementById("outPut").innerHTML = html;
        }
    }
    if (cityFound === false) {
        let html = '<span style="color: #00b4d8;">' + "'" + capitalLetters + "'" + '</span>' + " " + "is not in the List" + "<br>Click" + " " + '<span style="color: #0f0;">' + "'Add Your City In The List'" + '</span>' + " " + "to add your City"
        document.getElementById("outPut").innerHTML = html;
    } 
}

function findWord() {
    let newText = originalText.toLowerCase()
    let word = document.getElementById("inPut").value
    if (!word) {
        alert("Enter Word to Find")
        return
    }
   word = word.toLowerCase();
   var findWord = newText.indexOf(word)
   if (findWord !== -1) {
    let html = '<span style="color: #e63946;">' + "'" + word + "'" + '</span>' + " " + "found at index" + " " + '<span style="color: #0ff;">' + findWord + '</span>'
    document.getElementById("outPut").innerHTML = html;
   }
    else {
        let html = '<span style="color: #e63946;">' + "'" + word + "'" + '</span>' + " " + "does not found in index"
        document.getElementById("outPut").innerHTML = html;

    }
}

function replaceWord() {
    let newText = originalText.toLowerCase()
    let word = document.getElementById("inPut").value
    if (!word) {
        alert("Enter Word to Replace")
        return
    }

    let replaceWith = prompt("Enter the word to replace")
    if (!replaceWith) {
        alert("Plz Enter a Word")
        return;
    }
    word = word.toLowerCase();
    word = new RegExp(word, "g");
    replaceWith = replaceWith.toLowerCase();
    let replaceWord = newText.replace(word, replaceWith)
    document.getElementById("outPut").innerHTML = replaceWord;
}

function clearA() {
    document.getElementById("inPut").value = ""
}
function clearOutput() {
    document.getElementById("outPut").innerText = ""
}