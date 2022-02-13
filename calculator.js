const displays = document.getElementById("display");
const buttons = document.getElementById("buttons");
const clearButtons = document.getElementById("clear");
const backButton = document.getElementById("backspace");
const minusButton = document.getElementById("minus");
const plusButton = document.getElementById("plus");
const divideButton = document.getElementById("divide");
const multiplyButton = document.getElementById("multiply");
const equalButton = document.getElementById("equal");
const rootButton = document.getElementById("root");

let lastOperation = '';
let memory = 0;

buttons.addEventListener("click", inputNumber);

function inputNumber(event) {
    if (displays.textContent.length > 15) {
        return;
    }
    let data = event.target.dataset.input;
    if (data === ".") {
        if (data) {
            if (!displays.textContent.includes(".")) {
                displays.textContent += data
            }
        }
    } else {
        displays.textContent += data;
        if (!displays.textContent.includes(".")) {
            displays.textContent = Number(displays.textContent);
        }
    }
}

clearButtons.addEventListener("click", () => {
    displays.textContent = 0;
    lastOperation = '';
    memory = 0;
});
minusButton.addEventListener("click", () => {
    lastOperation = 'minus';
    memory = Number(displays.textContent);
    displays.textContent = 0;
})

