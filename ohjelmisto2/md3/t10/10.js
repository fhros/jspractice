document.getElementById("source").addEventListener("submit", function (event) {
    event.preventDefault();

    const firstName = document.querySelector('input[name="firstname"]').value.trim();
    const lastName = document.querySelector('input[name="lastname"]').value.trim();

    const target = document.getElementById("target");
    if (firstName && lastName) {
        target.textContent = `Your name is ${firstName} ${lastName}`;
    } else {
        target.textContent = "Please fill in both your first and last name.";
    }
});
