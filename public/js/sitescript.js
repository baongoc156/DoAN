// owl carousel
$(document).ready(function() {
    //services carousel
    $('#owl1').owlCarousel({
        loop: false,
        dots: false,
        nav: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            480: {
                items: 2,
            },
            766: {
                items: 3,
            },
            992: {
                items: 4,
            }
        }
    });
    // info user carousel
    $('#owl4').owlCarousel({
        items: 1,
        loop: false,
        dots: true,
        nav: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,

            },
            600: {
                items: 1,

            },
            1000: {
                items: 1,


            }
        }
    });
    //latest news
    $('#owl5').owlCarousel({
        items: 3,
        loop: false,
        dots: false,
        nav: true,
        navText: ["<i class='material-icons'>arrow_back</i>", "<i class='material-icons'>arrow_forward</i>"],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,

            },
            600: {
                items: 2,

            },
            1000: {
                items: 3,
                nav: true

            }
        }
    });
    //tab-content 
    $('.owl-carousel').owlCarousel({
        items: 4,
        loop: false,
        dots: false,
        nav: true,
        navText: ["<i class='material-icons'>arrow_back</i>", "<i class='material-icons'>arrow_forward</i>"],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            480: {
                items: 2,
            },
            766: {
                items: 3,
            },
            992: {
                items: 4,
            }
        }
    });

});
// set parallax 
const parallax = document.querySelectorAll(".parallax");
window.addEventListener("scroll", function() {
    let offset = window.pageYOffset;
    if (this.window.innerWidth > 1199) {
        parallax.forEach(function(prllx, i) {
            prllx.style.backgroundPositionY = (offset - prllx.offsetTop - 300) * 0.7 + "px";
        })
    }
});

// swiper brand
var mySwiper = new Swiper('.swiper-container', {
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        1199: {
            slidesPerView: 5
        },

        991: {
            slidesPerView: 4
        },

        767: {
            slidesPerView: 4
        },

        480: {
            slidesPerView: 3
        }
    },
});

// movetop

document.querySelector('#goToTop').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('header').scrollIntoView({ behavior: 'smooth' });
});
//sticky header
$(document).ready(function() {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 500 && window.innerWidth >= 1200) {
            $(".header").sticky({ topSpacing: 0, zIndex: 99999, });
        } else {
            $(".header").unstick();
        }
    });
});