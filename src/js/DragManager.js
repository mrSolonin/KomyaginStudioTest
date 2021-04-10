import $ from 'jquery'
require('jquery-ui-dist/jquery-ui');
let dogImageContainer = '.image-item';
let dogImage = '.drag-item';

$(document).ready(function () {

    $('.draggable').draggable({
        containment: 'parent'
    });

    $(dogImageContainer).mousemove(function (event) {

        let moveX = (($(dogImageContainer).width() / 2) - event.pageX) * 0.1;
        let moveY = (($(dogImageContainer).width() / 2) - event.pageY) * 0.1;
        $(dogImage).css('margin-left', moveX + 'px');
        $(dogImage).css('margin-top', moveY + 'px');
        $(dogImage).css('margin-right', -moveX + 'px');
        $(dogImage).css('margin-bottom', -moveY + 'px');
    });
});

