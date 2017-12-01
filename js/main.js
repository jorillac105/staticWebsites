const titleHeight = $('.title').height() + $('#homeAnchor').height();
const aboutHeight = $('#about').height() + $('#aboutAnchor').height();
const gridHeight = $('#grid-container').height() + $('#gridAnchor').height();
const contactHeight = $('#contactMe').height() + $('#contactAnchor').height();
const aboutOffset = titleHeight - aboutHeight + 300;
const stuffOffset = titleHeight + aboutHeight - gridHeight /2;
const contactOffset = titleHeight + aboutHeight + gridHeight - contactHeight /2;
var loadingTimer = null;
var loadingTime = 0;


$(document).ready(() => {
    //toggling windows from grid
    let $curWindow;

    $('#medHacks').on('click', () => {
        $('.overlay').fadeToggle('medium');
        $('#medHacksInfo').fadeToggle('slow');
        $curWindow = $('#medHacksInfo');
    });

    $('.overlay').on('click', () => {
        $curWindow.fadeToggle('slow');
        $('.overlay').fadeToggle('medium');
    })

    $('#legend').on('click', () => {
        $('.overlay').fadeToggle('medium');
        $curWindow = $('#legendInfo');
        $curWindow.fadeToggle('slow');
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

    $('#contactButton').on('click', () => {
        $('#contactAnchor').goTo();
    });
    $(window).scroll(checkButtons);
});

function checkButtons() {
    var scroll_top = $(window).scrollTop();
    if (scroll_top >= contactOffset) {
        $('#navBar').addClass('fullBar');
        $('#julian').css('visibility', 'visible');
        $('#navBar').css('visibility', 'visible');
        $('#contactButton').addClass('selectedButton');
        $('#gridButton').removeClass('selectedButton');
        $('#aboutButton').removeClass('selectedButton');
    } else if (scroll_top >= stuffOffset) {
        $('#navBar').addClass('fullBar');
        $('#julian').css('visibility', 'visible');
        $('#navBar').css('visibility', 'visible');
        $('#gridButton').addClass('selectedButton');
        $('#aboutButton').removeClass('selectedButton');
        $('#contactButton').removeClass('selectedButton');
    } else if (scroll_top >= aboutOffset) { // the detection!
        $('#navBar').addClass('fullBar');
        $('#julian').css('visibility', 'visible');
        $('#navBar').css('visibility', 'visible');
        $('#aboutButton').addClass('selectedButton');
        $('#gridButton').removeClass('selectedButton');
    } else if (scroll_top >= (aboutOffset - 50)){
        $('#navBar').removeClass('fullBar');
        $('#navBar').css('visibility', 'hidden');
        $('#julian').css('visibility', 'hidden');
    } else if (scroll_top >= 20){
        $('#navBar').css('visibility', 'hidden');
        $('#julian').css('visibility', 'hidden');
    }else if (scroll_top == (0)){
        $('#navBar').css('visibility', 'visible');
        $('#julian').css('visibility', 'hidden');
        $('#navBar').removeClass('fullBar');
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
        checkButtons();
        return this;
    }
})(jQuery);
