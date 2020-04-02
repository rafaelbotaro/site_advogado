function openNav() {

    var x = document.getElementById("nav");

    if (x.className === "nav") {
        x.className += " menujs";
        document.getElementById("line3-icon").innerHTML = "&Cross;";
    } else {
        x.className = "nav";
        document.getElementById("line3-icon").innerHTML = "&#9776;";
    }
}