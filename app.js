$(window).scroll(function() {
    var scrolledY = $(window).scrollTop();
    $('.parallax-section').css('background-position', 'center ' + ((scrolledY*0.5)) + 'px');
});
