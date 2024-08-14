// JavaScript source code

var mouse;

window.onload = function () {
    ite();
}

function ite() {
    mouse = document.getElementById("tento");
    mouse.onclick = function () {
        mouse.src = "naki.png";
    };
}