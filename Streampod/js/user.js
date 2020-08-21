particlesJS("container", {
    "particles": {
        "number": {
            "value": 180,
            "density": {
                "enable": true,
                "value_area": 1200
            }
        },
        "color": {
            "value": "#000000"
        },
        "shape": {
            "type": "square",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 0.1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 5,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#000000",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 2,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "events": {
            "onhover": {
                "enable": true,
                "mode": "grab"
            },
            "onclick": {
                "enable": false,
                "mode": "push"
            },
        },
        "modes": {
            "grab": {
                "distance": 150,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});

function openMenu() {
    $('.parameter').addClass("menuO");
    $('.post').addClass("menu1");
    $('.proj').addClass("menu2");
    $('.param').addClass("menu3");
    $('.js-tilt').tilt({
        scale: 1.05,
        easing: "cubic-bezier(.03,.98,.52,.99)",
        speed: 100
    });
}

function closeMenu() {
    $('.parameter').removeClass("menuO");
    $('.post').removeClass("menu1");
    $('.proj').removeClass("menu2");
    $('.param').removeClass("menu3");
}
$('.user').on("mouseenter", openMenu);
$('.user').on("mouseleave", closeMenu);