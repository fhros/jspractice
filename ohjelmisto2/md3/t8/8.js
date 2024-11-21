document.getElementById("start").addEventListener("click", function () {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operation = document.getElementById("operation").value;
    const resultElement = document.getElementById("result");

    if (isNaN(num1) || isNaN(num2)) {
        resultElement.textContent = "Please enter valid numbers.";
        return;
    }

    let result;
    switch (operation) {
        case "add":
            result = num1 + num2;
            break;
        case "sub":
            result = num1 - num2;
            break;
        case "multi":
            result = num1 * num2;
            break;
        case "div":
            if (num2 === 0) {
                resultElement.textContent = "Cannot divide by zero.";
                return;
            }
            result = num1 / num2;
            break;
        default:
            resultElement.textContent = "Invalid operation.";
            return;
    }

    resultElement.textContent = `Result: ${result}`;
});
