
// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });

// image show hide

var fixedimg = document.querySelector("#fixed-image");
var elemc = document.querySelector(".elem-container");

elemc.addEventListener("mouseenter", function () {
    fixedimg.style.display = "block"; // Show the image when mouse enters
});

elemc.addEventListener("mouseleave", function () {
    fixedimg.style.display = "none"; // Hide the image when mouse leaves
});

var elems = document.querySelectorAll(".elem");

var elems = document.querySelectorAll(".elem");
elems.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
        var imageData = elem.getAttribute('data-image');
        // ${} template literals
        fixedimg.style.backgroundImage = `url('${imageData}')`;
    });
});

var menu = document.querySelector("nav h3")
var full = document.querySelector("#full-menu")
menu.addEventListener("click", function () {
    full.style.top = 0
})