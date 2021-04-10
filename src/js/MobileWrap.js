import $ from 'jquery'

$(document).ready(function () {
    $('.toggle-icon').click(function () {
        $('.tab-header-wrap').animate({display: "toggle"}, function () {
            $('.tab-header-wrap').toggleClass('activated')
        });
    })
});
