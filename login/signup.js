document.getElementById("signup-form").addEventListener("submit", async function(event) {
    event.preventDefault();

    const role = document.getElementById("role").value;
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const response = await fetch("http://127.0.0.1:5000/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ role, username, email, password }),
    });

    const result = await response.json();

    if (response.ok) {
        alert("Signup successful! Redirecting to login...");
        window.location.href = "login.html";
    } else {
        alert("Signup failed: " + result.message);
    }
});