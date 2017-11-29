$(document).ready(() => {
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

});
