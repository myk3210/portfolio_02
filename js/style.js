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
});
