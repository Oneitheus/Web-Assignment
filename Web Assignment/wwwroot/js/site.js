// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

function slide() {
    var id = null;
    var element = document.getElementById("animate");
    var pos = 500;
    console.log(pos + "%");
    clearInterval(id)
    id = setInterval(frame, 5);
    function frame() {
        if (pos == 0) {
            clearInterval(id)
        } else {
            pos--;
            element.style.marginLeft = -pos + "%";
        }
    }
}