$(function(){
    $('.product__description-qual-text').click(function(){
        $('.product__description-qual').slideToggle();
    });
    function socialsAdaptive() {
        var wWidth = $(window).width(),
            socialsClone = $('.socials').clone();
        if (wWidth>320 && wWidth<767) {
            $('.socials').hide();
            $(socialsClone).insertAfter('.product__description').addClass('socials_mobile').find('.socials__title').hide();
        }
    }

    var slideCounter = 1;

    $('.product__gallery-btn_left').click(function(){
        slideCounter--;
        if(slideCounter==0) {
            slideCounter=1;
            return;
        }
        else {
            $('.product__gallery-box:first').animate({
                'margin-left':'+=284px'
            },'slow');
        }

    });

    $('.product__gallery-btn_right').click(function(){
        slideCounter++;
        if(slideCounter==4) {
            slideCounter=3;
            return;
        }
        $('.product__gallery-box:first').animate({
            'margin-left':'-=284px'
        },'slow');
    });
    socialsAdaptive();
})
