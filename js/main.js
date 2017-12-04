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

    $(".navbar").hide(); //Hide the navigation bar first

    $(window).scroll(function () {  //Listen for the window's scroll event
        if (isScrolledAfterElement("#aboutAnchor")) { //if it has scrolled beyond the #content elment
            $('.navbar').fadeIn();  //Show the navigation bar
        } else {
            $('.navbar').fadeOut(); //Else hide it
        }
    });
});

function isScrolledAfterElement(elem) {
    var $elem = $(elem);
    var $window = $(window);

    var docViewTop = $window.scrollTop();
    var docViewBottom = docViewTop + $window.height();

    var elemTop = $elem.offset().top;

    return elemTop <= docViewBottom;
}




function checkButtons() {
    var scroll_top = $(window).scrollTop();
    if (scroll_top >= contactOffset) {
        $('#contactButton').addClass('selectedButton');
        $('#gridButton').removeClass('selectedButton');
        $('#aboutButton').removeClass('selectedButton');
    } else if (scroll_top >= stuffOffset) {
        $('#gridButton').addClass('selectedButton');
        $('#aboutButton').removeClass('selectedButton');
        $('#contactButton').removeClass('selectedButton');
    } else if (scroll_top >= aboutOffset) { // the detection!
        $('#aboutButton').addClass('selectedButton');
        $('#gridButton').removeClass('selectedButton');
        $('#contactButton').removeClass('selectedButton');
    } else if (scroll_top == (0)){
        $('#aboutButton').removeClass('selectedButton');
        $('#gridButton').removeClass('selectedButton');
        $('#contactButton').removeClass('selectedButton');
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
