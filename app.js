const display = document.querySelector("#display");
const button = document.querySelectorAll("button");
const specialCharactors = ["%","/","x","-","+","="]
let output = "";

const calculator = (btnValue) => {
if(btnValue === "=" && output !== ""){
    output = eval (output.replace("%", "/100"));
}else if (btnValue === "Clear All"){
output = ""
}else if (btnValue === "Clear"){
    output = output.toString().slice(0,-1);
}else{
    if(output === "" && specialCharactors.includes(btnValue)) return;
    output += btnValue;
}
    display.value = output;
}

button.forEach((button) => {
    button.addEventListener("click", (e) => calculator(e.target.dataset.value));
})