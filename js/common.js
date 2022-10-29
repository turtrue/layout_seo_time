document.addEventListener("DOMContentLoaded", function () {
    new Swiper(".swiper", {
        direction: "horizontal",
        effect: "fade",
        fadeEffect: {
            crossFade: true
        },
        speed: 700,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        }
    });

    // CASES

    const cards = document.querySelectorAll(".card");

    cards.forEach((card) => {
        card.addEventListener("click", function () {
            // cards.forEach((card) => card.classList.remove("details"));
            // this.classList.add("details");
            this.classList.toggle("details");
        });
    });

    // FRAMES

    const frames = document.querySelectorAll(".frames__item");
    const frameLines = document.querySelectorAll(".frames__line-item");
    let index = 0;
    let isScrollTop = true;
    let isScrollDown = true;

    function removingСlasses(array, cls) {
        array.forEach((node) => {
            node.classList.remove(cls);
        });
    }

    window.addEventListener("wheel", function () {
        const deltaY = window.event.deltaY;

        if (deltaY === 100 && index <= frames.length - 2 && isScrollDown) {
            removingСlasses(frames, "show");

            frames[index].classList.add("hide");
            frames[++index].classList.add("show");
            frameLines[index].classList.add("active");

            isScrollDown = false;
            setTimeout(() => (isScrollDown = true), 700);
        } else if (deltaY === -100 && index >= 1 && isScrollTop) {
            removingСlasses(frames, "show");

            frameLines[index].classList.remove("active");
            frames[--index].classList.remove("hide");
            frames[index].classList.add("show");

            isScrollTop = false;
            setTimeout(() => (isScrollTop = true), 700);
        }
    });

    // PARTICLES JS

    // particlesJS(
    //     "particles-js",

    //     {
    //         particles: {
    //             number: {
    //                 value: 80,
    //                 density: {
    //                     enable: true,
    //                     value_area: 800
    //                 }
    //             },
    //             color: {
    //                 value: "#4343f4"
    //             },
    //             shape: {
    //                 type: "circle",
    //                 stroke: {
    //                     width: 0,
    //                     color: "#4343f4"
    //                 },
    //                 polygon: {
    //                     nb_sides: 5
    //                 },
    //                 image: {
    //                     src: "img/github.svg",
    //                     width: 100,
    //                     height: 100
    //                 }
    //             },
    //             opacity: {
    //                 value: 0.5,
    //                 random: false,
    //                 anim: {
    //                     enable: false,
    //                     speed: 1,
    //                     opacity_min: 0.1,
    //                     sync: false
    //                 }
    //             },
    //             size: {
    //                 value: 5,
    //                 random: true,
    //                 anim: {
    //                     enable: false,
    //                     speed: 40,
    //                     size_min: 0.1,
    //                     sync: false
    //                 }
    //             },
    //             line_linked: {
    //                 enable: true,
    //                 distance: 150,
    //                 color: "#4343f4",
    //                 opacity: 0.4,
    //                 width: 1
    //             },
    //             move: {
    //                 enable: true,
    //                 speed: 4,
    //                 direction: "none",
    //                 random: false,
    //                 straight: false,
    //                 out_mode: "out",
    //                 attract: {
    //                     enable: false,
    //                     rotateX: 600,
    //                     rotateY: 1200
    //                 }
    //             }
    //         },
    //         interactivity: {
    //             detect_on: "canvas",
    //             events: {
    //                 onhover: {
    //                     enable: true,
    //                     mode: "grab"
    //                 },
    //                 onclick: {
    //                     enable: true,
    //                     mode: "push"
    //                 },
    //                 resize: true
    //             },
    //             modes: {
    //                 grab: {
    //                     distance: 400,
    //                     line_linked: {
    //                         opacity: 1
    //                     }
    //                 },
    //                 bubble: {
    //                     distance: 400,
    //                     size: 40,
    //                     duration: 2,
    //                     opacity: 8,
    //                     speed: 3
    //                 },
    //                 repulse: {
    //                     distance: 200
    //                 },
    //                 push: {
    //                     particles_nb: 4
    //                 },
    //                 remove: {
    //                     particles_nb: 2
    //                 }
    //             }
    //         },
    //         retina_detect: true,
    //         config_demo: {
    //             hide_card: false,
    //             background_color: "#4343f4",
    //             background_image: "",
    //             background_position: "50% 50%",
    //             background_repeat: "no-repeat",
    //             background_size: "cover"
    //         }
    //     }
    // );
});
