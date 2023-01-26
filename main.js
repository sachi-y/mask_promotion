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

// 現在のスクロール位置を取得する
var scrollpos = window.pageYOffset
// メニューが開いたことを示すクラスをhtmlに付与する
//html.classList.add('is-menuOpen')
// bodyのtopにスクロール位置を付与する
document.body.style.top = scrollpos * -1 + 'px'
// ウィンドウの高さを取得
bodyHeight = window.innerHeight
// 取得した高さを、メニューに付与する（ヘッダーの高さを引いた数）
menu.style.height = bodyHeight //- headerHeight + 'px'

// メニューが開いたことを示すクラスをはずす
//html.classList.remove('is-menuOpen')
// スクロール位置を開いた時の位置へ戻す
window.scrollTo(0, scrollpos)
//メニューを閉じる（高さを0にする）
menu.style.height = 0