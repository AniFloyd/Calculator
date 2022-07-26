let input = document.getElementById("screen");
let buttons = document.querySelectorAll("button");
let inputValue = "";
for (item of buttons){
    item.addEventListener("click",function(e){
        buttonText = e.target.innerText;
        if(buttonText == "C"){
            inputValue = "";
            input.value = inputValue;
        }
        else if (buttonText == "="){
            input.value = eval(inputValue);
        }
        else{
            inputValue += buttonText;
            input.value = inputValue;
        }
    });
}