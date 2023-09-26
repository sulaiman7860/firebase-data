function showOutput(output) {
    document.getElementById("output").innerHTML = output
}

// ---------------------------------------------------------------------------------------------------
const whereWeAt = () => {
    console.log(window)
}
const goToGoogle = () => {
    window.location.href = "https://www.google.com"
}
const replace = () => {
    window.location.replace("https://www.google.com")
}

var popup = ""

const openPop = () => {
popup = window.open("","","width=500,height=500")    
}
const fillContent = () => {
popup.document.write("<h1>Popups</h1><p>This is a Popup Page</p>")    
}
const assignPop = () => {
popup.location.assign("https://www.google.com")   
}
const closePop = () => {
popup.close()   
}
const alertPop = () => {
try {
    alert("This Is Working")
    showToast("This is Working", "success")
}
catch (error) {
    showToast("Something Went Wrong While Adding User", "error")
    console.log(error)
}  
}




// ---------------------------------------------------------------------------------------------------
const clearOutput = () => {
    let clearOutput = document.getElementById("output").innerHTML;

    if (!clearOutput) {
          showToast("Output Is Already Clear", "error")
    } else {
        showOutput("")
        showToast("Output Has Been Cleared", "success")

    }
}
function showToast(msg, type) {
    let bgColor 
    switch (type) {
        case "error":
            bgColor = "linear-gradient(to right, #1a2a6c, #b21f1f, #f64f59)"
            break;
        case "success":
            bgColor = "linear-gradient(to right, #12c2e9, #c471ed, #f64f59)"
            break;
        default:
            bgColor = "#000"
            break;
    }

    Toastify({
        text: msg,
        duration: 3000,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        style: {
          background: bgColor,
        },
      }).showToast();
}