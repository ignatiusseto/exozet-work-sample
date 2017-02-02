var nameField = document.getElementById("name");
var emailField = document.getElementById("email");
var phoneField = document.getElementById("telephone");
var commentaryField = document.getElementById("commentary");

function formValidator() {
    nameField.addEventListener("keyup", function (event) {
        if (nameField.validity.typeMismatch) {
            event.preventDefault();
            nameField.setCustomValidity("Bitte geben Sie nur Buchstaben ein - z.B. Max Mustermann");
        } else {
            event.preventDefault();
            nameField.setCustomValidity("");
        }
    });
    emailField.addEventListener("keyup", function (event) {
        if (emailField.validity.typeMismatch) {
            event.preventDefault();
            emailField.setCustomValidity("Bitte geben Sie eine richtige E-Mail-Adresse - z.B. abc@def.de");
        } else {
            event.preventDefault();
            email.setCustomValidity("");
        }
    });
    phoneField.addEventListener("keyup", function (event) {
        if (phoneField.validity.typeMismatch) {
            event.preventDefault();
            phoneField.setCustomValidity("Bitte geben Sie nur Zahlen ein - z.B. 030123456");
        } else {
            event.preventDefault();
            phoneField.setCustomValidity("");
        }
    });
    commentaryField.addEventListener("keyup", function (event) {
        if (commentaryField.validity.typeMismatch) {
            event.preventDefault();
            commentaryField.setCustomValidity("Sie k&ouml;nnen maximal 500 Zeichen eingeben.");
        } else {
            event.preventDefault();
            commentaryField.setCustomValidity("");
        }
    });
}

window.onload = function () {
    formValidator();
};