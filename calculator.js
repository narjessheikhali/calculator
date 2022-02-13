const displays = document.getElementById("display");
const buttons = document.getElementById("buttons");
const clearButtons = document.getElementById("clear");
const backButton = document.getElementById("backspace");
const minusButton = document.getElementById("minus");
const plusButton = document.getElementById("plus");
const divideButton = document.getElementById("divide");
const multiplyButton = document.getElementById("multiply");
const equalButton = document.getElementById("equal");
const squareButton = document.getElementById("square");
const rootButton = document.getElementById("root");

let lastOperation = '';
let memory = 0;

buttons.addEventListener("click", inputNumber);

function inputNumber(event) {
    if (displays.textContent.length > 15) {
        return;
    }
    let data = event.target.dataset.input;
    if (data) {
        if (data === ".") {
            if (!displays.textContent.includes(".")) {
                displays.textContent += data
            }
        } else {
            displays.textContent += data;
            if (!displays.textContent.includes(".")) {
                displays.textContent = Number(displays.textContent);
            }
        }
    }
}

clearButtons.addEventListener("click", () => {
    displays.textContent = "0";
    lastOperation = '';
    memory = 0;
});
minusButton.addEventListener("click", () => {
    lastOperation = 'minus';
    memory = Number(displays.textContent);
    displays.textContent = "0";
});
plusButton.addEventListener("click", () => {
    lastOperation = "plus";
    memory = Number(displays.textContent);
    displays.textContent = "0";
});
divideButton.addEventListener("click", () => {
    lastOperation = "divide";
    memory = Number(displays.textContent);
    displays.textContent = "0";
});
multiplyButton.addEventListener("click", () => {
    lastOperation = "multiply";
    memory = Number(displays.textContent);
    displays.textContent = "0";
});
equalButton.addEventListener("click", () => {
    if (lastOperation !== '') {
        let number = Number(displays.textContent);
        if (lastOperation === "minus") {
            displays.textContent = memory - number;
        } else if (lastOperation === "plus") {
            displays.textContent = memory + number;
        } else if (lastOperation === "multiply") {
            displays.textContent = memory * number;
        } else if (lastOperation === "divide") {
            displays.textContent = memory / number;
        }
        lastOperation = '';
    }
});
backButton.addEventListener("click", () => {
    if (displays.textContent.length == 1) {
        displays.textContent = "0";
    } else {
        displays.textContent = displays.textContent.substring(0, displays.textContent.length - 1)
    }
});
squareButton.addEventListener("click", ()=>{
    displays.textContent **= 2;
    lastOperation = "";
});
rootButton.addEventListener("click", ()=>{
    displays.textContent = Math.sqrt(displays.textContent)
});
