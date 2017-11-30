$(document).ready(() => {

    //toggling windows from grid
    let $curWindow;

    $('#edu').on('click', () => {
        $('.overlay').fadeToggle('slow');
        $('#whereEducation').slideToggle('fast');
        $curWindow = $('#whereEducation');
    });

    $('.overlay').on('click', () => {
        $curWindow.slideToggle('fast');
        $('.overlay').fadeToggle('slow');
    })

    $('#exp').on('click', () => {
        $('.overlay').fadeToggle('slow');
        $curWindow = $('#whereExp');
        $curWindow.slideToggle('fast');
    });

    //scrolling to items from navbar
    $('.sender').on('click', () => {
        $('#aboutAnchor').goTo();
    });

    $('#homeButton').on('click', () => {
        $('#homeAnchor').goTo();
    });

    $('#aboutButton').on('click', () => {
        $('#aboutAnchor').goTo();
    });

    $('#gridButton').on('click', () => {
        $('#gridAnchor').goTo();
    });
});

(function($) {
    $.fn.goTo = function() {
        $('html, body').animate({
            scrollTop: $(this).offset().top + 'px'
        }, 'fast');
        return this;
    }
})(jQuery);
