// jQuery
// chinh logo
// if (window.outerWidth < 992) {
//     // di chuyen the logo 
//     $(".logo").appendTo(".header-mid");
//     // xoa the logo tai vi tri class header-left
//     $(".header-left>.logo").remove();
// } else {
//     //nguoc lai o tren
//     $(".logo").appendTo(".header-left");
//     $(".header-mid>.logo").remove();
// }
function myFunction() {
    var x = document.getElementById('main');
    if (x.className === "main-content") {
        x.className += " responsive";
    } else {
        x.className = "main-content";
    }
}
// owl carousel
$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
                nav: true
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 4,
                nav: true,
                loop: false
            }
        }
    })
});