// JavaScript Document
console.log("hi");

document.getElementById("menu-toggle").addEventListener("click", function() {
    var menu = document.getElementById("menu-content");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
});