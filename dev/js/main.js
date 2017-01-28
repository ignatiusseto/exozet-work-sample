/**
 * Created by ignatius on 26.01.17.
 */

var nameField = document.getElementById("name");
var emailField = document.getElementById("email");
var phoneField = document.getElementById("phone");
var commentaryField = document.getElementById("commentary");

function formValidator() {
    nameField.addEventListener("keyup", function (event) {
        if (nameField.validity.typeMismatch) {
            nameField.setCustomValidity("Bitte geben Sie nur Buchstaben ein - z.B. Max Mustermann");
        } else {
            nameField.setCustomValidity("");
        }
    });
    emailField.addEventListener("keyup", function (event) {
        if (emailField.validity.typeMismatch) {
            emailField.setCustomValidity("Bitte geben Sie eine richtige E-Mail-Adresse - z.B. abc@def.de");
        } else {
            email.setCustomValidity("");
        }
    });
    phoneField.addEventListener("keyup", function (event) {
        if (phoneField.validity.typeMismatch) {
            phoneField.setCustomValidity("Bitte geben Sie nur Zahlen ein - z.B. 030123456");
        } else {
            phoneField.setCustomValidity("");
        }
    });
    commentaryField.addEventListener("keyup", function (event) {
        if (commentaryField.validity.typeMismatch) {
            commentaryField.setCustomValidity("Sie können maximal 500 Zeichen eingeben.");
        } else {
            commentaryField.setCustomValidity("");
        }
    });
}

window.onload = function () {
    formValidator();
};