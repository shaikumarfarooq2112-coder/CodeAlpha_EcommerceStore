document.getElementById("loginForm").addEventListener("submit", login);

function login(event) {

    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    fetch("http://localhost:3000/login", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            email: email,
            password: password
        })

    })

    .then(response => response.json())

    .then(data => {

        if (data.message === "Login Successful!") {

            alert("Login Successful!");

            window.location.href = "index.html";

        } else {

            alert(data.message);

        }

    })

    .catch(error => {

        console.error("Login Error:", error);

        alert("Unable to connect to the backend server.");

    });

}