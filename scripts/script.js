/* Scripts */

// Scroll to top button

let button = document.getElementById("top");

window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        button.style.display = "flex";
    } else {
        button.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Dark mode toggle

function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

// Email obfuscation

var email = 'elainedong520@gmail.com';
var encodedEmail = '';

for (var i = 0; i < email.length; i++) {
    encodedEmail += '&#' + email.charCodeAt(i) + ';';
}

document.getElementById('email').innerHTML = encodedEmail;