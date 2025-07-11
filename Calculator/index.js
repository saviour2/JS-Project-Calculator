let display = document.getElementById('display');
let value = "";
let num = 0;
let op = "";

// Number button function
function shownum(char) {
    if (value == "+" || value == "-" || value == "*" || value == "/") {
        value = "";
    }
    if (value.length <= 10) {
        value += char;
    }

    display.innerText = value;
}

// Operator button function
function showop(operator) {

    num = parseInt(value);
    value = operator;
    op = operator
    display.innerText = value;
    value = "";
}

// Clear function
function clearDisplay() {
    value = "";
    display.innerText = value;
}

// Result function
function result() {

    if (value === "") {
        display.innerText = "";
    } else {
        if (op === "+") {
            num = num + parseInt(value);
        }
        else if (op === "-") {
            num = num - parseInt(value);
        }
        else if (op === "*") {
            num = num * parseInt(value);
        }
        else if (op === "/") {
            if (value === "0") {
                value = "";
                op = "";
                alert("Division by 0 not possible");
                display.innerText = "";
                return;
            }
            else {
                num = Math.trunc(num / parseInt(value));
            }

        }
        display.innerText = num;
        value = String(num);
        op = "";
    }


}

// Add event listeners efficiently
document.getElementById('num0').addEventListener("click", () => shownum("0"));
document.getElementById('num1').addEventListener("click", () => shownum("1"));
document.getElementById('num2').addEventListener("click", () => shownum("2"));
document.getElementById('num3').addEventListener("click", () => shownum("3"));
document.getElementById('num4').addEventListener("click", () => shownum("4"));
document.getElementById('num5').addEventListener("click", () => shownum("5"));
document.getElementById('num6').addEventListener("click", () => shownum("6"));
document.getElementById('num7').addEventListener("click", () => shownum("7"));
document.getElementById('num8').addEventListener("click", () => shownum("8"));
document.getElementById('num9').addEventListener("click", () => shownum("9"));

document.getElementById('sum').addEventListener("click", () => showop("+"));
document.getElementById('dif').addEventListener("click", () => showop("-"));
document.getElementById('prod').addEventListener("click", () => showop("*"));
document.getElementById('quo').addEventListener("click", () => showop("/"));

document.getElementById('clear').addEventListener("click", clearDisplay);
document.getElementById('result').addEventListener("click", result);