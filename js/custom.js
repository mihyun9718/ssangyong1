
//메인비주얼 슬라이드
$(function () {
    $('.main_visual_slide').slick({
        arrows: false,
        dots: false,
        autoplay: true,
        pauseOnHover: false,
        useTransform: false,
        fade: true
    });

    //슬라이드로 탭구현.
    $('.main_visual_slide').on('afterChange', function (e, s, c) {
        $('.main_visual .lnk li').removeClass('on');
        $('.main_visual .lnk li').eq(c).addClass('on')
    });

    //슬라이드 arrow
    $('.main_content2 .content_arrows .prev').on('click', function () {
        $('.main_content2').slick('slickPrev')
    });

    $('.main_content2 .content_arrows .next').on('click', function () {
        $('.main_content2').slick('slickNext')
    });

    $(function () {
        $('.mopen').on('click', function () {
            $('.gnb').toggleClass('on');
            $(this).toggleClass('on');
        });

        $('.hamburger').on('click', function () {
            $(this).toggleClass('is-active')
        })
    })
});