var splide = new Splide('.splide', {
    type: 'loop',
    perPage: 3,
    autoplay: true,
    // gap: '2rem',
    breakpoints: {
        600: {
            perPage: 1,
            // gap: '.7rem',
            // height: '6rem',
        },
    },
});

splide.mount();