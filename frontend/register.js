document.getElementById("registerForm").addEventListener("submit", register);

function register(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    fetch("http://localhost:3000/register", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            name: name,
            email: email,
            password: password
        })

    })

    .then(response => response.json())

    .then(data => {

        alert(data.message);

        if (data.message === "Registration Successful!") {

            window.location.href = "login.html";

        }

    })

    .catch(error => {

        console.error("Registration Error:", error);

        alert("Unable to connect to the backend server.");

    });

}