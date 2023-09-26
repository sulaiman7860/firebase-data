
let string = ""
let buttons = document.querySelectorAll('.col')
Array.from(buttons).forEach((col)=>{
    col.addEventListener('click',(e)=>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            document.querySelector("input").value = string;
        }
        else if(e.target.innerHTML == 'C'){
            string = ""
            document.querySelector("input").value = string;
        }
        else{
            console.log(e.target)
        string = string + e.target.innerHTML;
        document.querySelector('input').value = string
        }
    })
})

