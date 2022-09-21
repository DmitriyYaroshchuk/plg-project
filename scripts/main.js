$(function(){
    $('.shop__slider').slick({
        dots: false,
        slidesToScroll: 1,
        slidesToShow: 3,
        infinite: false,
        prevArrow: '<button type="button" class="shop__slick-prev">' +
            '<img src="image/button-prev.svg" alt="button-prev">' +
            '</button>',
        nextArrow: '<button type="button" class="shop__slick-next">' +
            '<img src="image/button-next.svg" alt="button-next">' +
            '</button>',
        responsive: [
            {
                breakpoint: 1601,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 361,
                settings: {
                    slidesToShow: 1
                }
            }
            // {
            //     breakpoint: 481,
            //     settings: {
            //         initialSlide: 2.58,
            //         centerMode: true,
            //         slidesToShow: 1
            //     }
            // },
            // {
            //     breakpoint: 361,
            //     settings: {
            //         initialSlide: 4,
            //         centerMode: true,
            //         slidesToShow: 1
            //     }
            // }
        ]
    });
});