window.onload = function() {
    document.getElementsByClassName("svgMenu")[0].onclick = function() {
        document.getElementsByClassName("modal-menu")[0].classList.remove("hide");
        document.getElementsByClassName("svgClose")[0].onclick = function() {
            document.getElementsByClassName("modal-menu")[0].classList.add("hide");
        }
    }
}