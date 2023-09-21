/* src/app.js */

// Styles
import "/assets/scss/_main.scss";

let button = document.getElementById("form-button");
let inputName = document.getElementById("input-name");
let inputEmail = document.getElementById("input-email");
let inputMessage = document.getElementById("input-message");

button.onclick = (e) => {
    fetch("https://api.byteplex.info/api/test/contact/", {
        method: "POST", 
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: inputName.value,
            email: inputEmail.value,
            message: inputMessage.value
        }),
    });

    e.preventDefault();
}
