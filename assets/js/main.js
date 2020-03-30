$(function () {
    $(window).on('scroll', function () {
        if ( $(window).scrollTop() > 10 ) {
            $('.navbar').addClass('active');
        } else {
            $('.navbar').removeClass('active');
        }
    });
});

$('map area').hover(function(){
  $('#pie-' + $(this).attr('id')).css('margin-top', '-567px');
},function(){
  $('#pie-' + $(this).attr('id')).css('margin-top', '0px');
});