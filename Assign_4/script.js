function appendToDisplay(value) {
    let display = document.getElementById("display");
    let currentValue = display.value;
    let lastChar = currentValue.slice(-1);

    if ("+-*/%".includes(lastChar) && "+-*/%".includes(value)) return;
    if (currentValue === "" && "+*/%".includes(value)) return;
    if (value === "." && currentValue.split(/[\+\-\*\/%]/).pop().includes(".")) return;

    if (display.value === "Error") display.value = "";
    display.value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function backspace() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    let display = document.getElementById("display");
    let expression = display.value.trim();

    if (expression === "") {
        alert("Please enter an expression first!");
        return;
    }
    if (expression.includes("/0")) {
        alert("Division by zero is not allowed!");
        return;
    }

    try {
        display.value = eval(expression);
    } catch {
        alert("Invalid expression");
        display.value = "Error";
    }
}

function calculateSquare() {
    let display = document.getElementById("display");
    let value = parseFloat(display.value);
    if (isNaN(value)) {
        alert("Enter a valid number!");
        return;
    }
    display.value = value ** 2;
}

function calculateSqrt() {
    let display = document.getElementById("display");
    let value = parseFloat(display.value);
    if (isNaN(value) || value < 0) {
        alert("Enter a non-negative number!");
        return;
    }
    display.value = Math.sqrt(value);
}

function calculateReciprocal() {
    let display = document.getElementById("display");
    let value = parseFloat(display.value);
    if (isNaN(value) || value === 0) {
        alert("Invalid reciprocal!");
        return;
    }
    display.value = 1 / value;
}

function calculateFactorial() {
    let display = document.getElementById("display");
    let value = parseInt(display.value);
    if (isNaN(value) || value < 0) {
        alert("Enter a positive integer!");
        return;
    }
    let fact = 1;
    for (let i = 1; i <= value; i++) {
        fact *= i;
    }
    display.value = fact;
}

function calculateTrig(func) {
    let display = document.getElementById("display");
    let value = parseFloat(display.value);

    if (isNaN(value)) {
        alert("Enter a valid number for trigonometric function.");
        return;
    }

    let radians = (value * Math.PI) / 180;
    let result = 0;

    switch (func) {
        case "sin":
            result = Math.sin(radians);
            break;
        case "cos":
            result = Math.cos(radians);
            break;
        case "tan":
            if (Math.abs(value % 180) === 90) {
                alert("Tan is undefined at 90° and 270°.");
                return;
            }
            result = Math.tan(radians);
            break;
    }
    display.value = result.toFixed(6);
}
