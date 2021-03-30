const navbar = document.getElementById('luxbar')
const sticky = navbar.offsetTop;
const nav = document.querySelector(".luxbar-navigation");
const navIcon = document.getElementById('nav-icon');






window.onscroll = function() {
    myFunction()
};


function myFunction() {
    if (window.pageYOffset > sticky + 700) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}





















/////////////////////////////////////////
////////////////////// owl CAROUSEL

$('#owl-example').owlCarousel({
    items: 1,
    smartSpeed: 450,
    loop: true,
    nav: true,
    autoplay: true
});