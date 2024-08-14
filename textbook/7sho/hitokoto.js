// JavaScript source code

var mouse;

window.onload = function () {
    ite();
}

function ite() {
    mouse = document.getElementById("hitokoto");
    mouse.onclick = function () {
        mouse.innerHTML = "<p style='color:red;font-size:32px;'>でも優しく頼むね</p>";
    };
}
