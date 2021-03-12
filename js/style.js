$(function(){
    //menu|メニュー表示時のスクロール止め
    var scrollpos;
    $('#nav-open').on('click', function(){
        scrollpos = $(window).scrollTop();
        $('body').addClass('fixed').css({'top': -scrollpos});
        $('#nav-open').addClass('open');
    });
    $('#nav-close').on('click', function(){
        $('body').removeClass('fixed').css({'top': 0});
        window.scrollTo( 0 , scrollpos );
        $('#nav-open').removeClass('open');
    });

    $('.slider').slick({
        autoplay:true,
        autoplaySpeed:5000,
        dots:true,
    });
    $(function(){
        $('.slide_show').slick({
            //スライドフェードアウトここから
            fade: true,
            speed: 1500,
            autoplaySpeed: 3000,
            arrows: false,
            autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            //スライドフェードアウトここまで
            // アクセシビリティ。左右ボタンで画像の切り替えをできるかどうか
            autoplay: true,
        });
      });
      
});
