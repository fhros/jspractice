document.getElementById("start").addEventListener("click", function () {
    const input = document.getElementById("calculation").value.trim();
    const resultElement = document.getElementById("result");

    if (!input) {
        resultElement.textContent = "Please enter a valid calculation.";
        return;
    }

    let operator, numbers;

    if (input.includes("+")) {
        operator = "+";
        numbers = input.split("+");
    } else if (input.includes("-")) {
        operator = "-";
        numbers = input.split("-");
    } else if (input.includes("*")) {
        operator = "*";
        numbers = input.split("*");
    } else if (input.includes("/")) {
        operator = "/";
        numbers = input.split("/");
    } else {
        resultElement.textContent = "Invalid operation. Use +, -, *, or /.";
        return;
    }

    const num1 = parseInt(numbers[0], 10);
    const num2 = parseInt(numbers[1], 10);

    if (isNaN(num1) || isNaN(num2)) {
        resultElement.textContent = "Invalid numbers. Please enter integers.";
        return;
    }

    let result;
    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if (num2 === 0) {
                resultElement.textContent = "Cannot divide by zero.";
                return;
            }
            result = Math.floor(num1 / num2);
            break;
    }

    resultElement.textContent = `Result: ${result}`;
});
