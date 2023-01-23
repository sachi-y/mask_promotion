var $slide = $(".p-slider__for")
.slick({
    slidesToShow:1,
    slidesToScroll:1,
    speed:500,
    arrows:!1,
    fade:!0,
    infinite:!0,
    autoplay:!0,
    autoplaySpeed:3e3,
    pauseOnHover:!1,
    adaptiveHeight:!0,
    mobileFirst:!0
});

// $(function() {
//     $(".lazyload").lazyload();
// });

$(function() {
    $(".p-accordion__tab").click(function() {
        $(".p-accordion").toggleClass("opened");
        $(".p-accordion__inner").slideToggle();
    });
});

$(function() {
    $(".p-header__btn").click(function() {
        $("body").toggleClass("menu-opened");
    });
});
