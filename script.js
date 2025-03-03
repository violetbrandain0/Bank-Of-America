document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll("footer button");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            buttons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
        });
    });
});




document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Set login credentials
    const correctUserId = "Violetelizabeth122@gmail.com";
    const correctPassword = "Brandani815";

    // Get user input
    const userId = document.getElementById("userId").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("errorMessage");

    if (userId === correctUserId && password === correctPassword) {
        window.location.href = "home.html"; // Change to your actual website
    } else {
        errorMessage.textContent = "Invalid User ID or Password!";
    }
});

