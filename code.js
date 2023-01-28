window.onload = function() {
    document.getElementsByClassName("svgMenu")[0].onclick = function() {
        document.getElementsByClassName("modal-menu")[0].classList.remove("hide");
        document.getElementById("container").classList.add("dark");
        document.getElementsByClassName("svgClose")[0].onclick = function() {
            document.getElementsByClassName("modal-menu")[0].classList.add("hide");
            document.getElementById("container").classList.remove("dark");
        }
    }
}