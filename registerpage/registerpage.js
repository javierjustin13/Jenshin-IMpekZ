function showError(errorElement, errorMessage) {
    document.querySelector("." + errorElement).classList.add("display-error");
    document.querySelector("." + errorElement).innerHTML = errorMessage;
}

function clearError() {
    let errors = document.querySelectorAll(".error");
    for (let error of errors){
        error.classList.remove("display-error");
    }
}

function clearSuceess() {
    let success = document.querySelector(".success");
    success.classList.remove("display-success");
}

let form = document.forms["registerform"];

form.onsubmit = function (event) {
    
    clearSuceess();
    clearError();

    if (form.name.value === "") {
        showError("name-error", "Name must be filled");
        return false;
    }
    if (form.email.value === "") {
        showError("email-error", "Email must be filled");
        return false;
    }
    if (form.email.value.indexOf("@") === -1) {
        showError("email-error", "Email must contain @");
        return false;
    }
    if (form.password.value === "") {
        showError("password-error", "Password must be filled");
        return false;
    }
    if (form.password.value.length < 8) {
        showError("password-error", "Password must be at least 8 characters");
        return false;
    }
    if (form.age.value === "") {
        showError("age-error", "Age must be filled");
        return false;
    }
    if (form.age.value < 18) {
        showError("age-error", "Age must be at least 18 years old");
        return false;
    }
    if (!form.agree.checked) {
        showError("agree-error", "You must agree to the terms and conditions");
        return false;
    }

    document.querySelector(".success").classList.add("display-success");
    document.querySelector(".success").innerHTML = "Your registration was successful!";

    event.preventDefault();
}
