var titleHeight = $('.title').height() + $('#homeAnchor').height();
var aboutHeight = $('#about').height() + $('#aboutAnchor').height();
var gridHeight = $('#grid-container').height() + $('#gridAnchor').height();
var aboutOffset = titleHeight - aboutHeight + 300;
var stuffOffset = titleHeight + aboutHeight - gridHeight /2;


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
        $('#navBar').removeClass('fullBar');
        $('#homeAnchor').goTo();
    });

    $('#aboutButton').on('click', () => {
        $('#aboutAnchor').goTo();
    });

    $('#gridButton').on('click', () => {
        $('#gridAnchor').goTo();
    });
});

$(window).scroll(checkButtons);

function checkButtons() {
    var scroll_top = $(window).scrollTop();
    if (scroll_top >= stuffOffset) {
        $('#gridButton').addClass('selectedButton');
        $('#aboutButton').removeClass('selectedButton');
    } else if (scroll_top >= aboutOffset) { // the detection!
        $('#navBar').addClass('fullBar');
        $('#navBar').fadeIn('fast');
        $('#aboutButton').addClass('selectedButton');
        $('#gridButton').removeClass('selectedButton');
    } else if (scroll_top >= (aboutOffset - 100)) {
        $('#navBar').hide();
        $('#navBar').removeClass('fullBar');
    }
    else {
        $('#navBar').removeClass('fullBar');
        $('#navBar').show();
        $('#aboutButton').removeClass('selectedButton');
        $('#gridButton').removeClass('selectedButton');
    }
}


(function($) {
    $.fn.goTo = function() {
        var placeToGo;
        if ($('#navBar').hasClass('fullBar')) {
            placeToGo = $(this).offset().top;
        } else {
            placeToGo = $(this).offset().top - 50;
        }
        $('html, body').animate({
            scrollTop: placeToGo + 'px'
        });
        return this;
    }
})(jQuery);
