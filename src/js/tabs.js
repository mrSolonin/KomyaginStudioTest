import $ from 'jquery';

$(function($) {
    'use strict';

    /**
     * Табы
     */
    $.fn.tabs = function () {
        let $self = $(this);
        let $tabHeaders = $self.find('.js-tab-header').filter(function (index, el) {
            return $(el).parentsUntil($self).length === 1;
        });
        let $tabContent = $self.find('.js-tab-content').filter(function (index, el) {
            return $(el).parentsUntil($self).length === 1;
        });

        /**
         * Активация таба по его индексу
         * @param {Number} index - индекс таба, который нужно активировать
         */
        let selectTab = function (index) {
            $tabHeaders.removeClass('active').eq(index).addClass('active');
            $tabContent.removeClass('active').eq(index).addClass('active');
        };

        /**
         * Инициализаиця
         */
        let init = function () {
            selectTab(0);

            // Обработка событий
            $tabHeaders.on('click', function () {
                selectTab($(this).index());
            });
        };

        init();

        this.selectTab = selectTab;

        return this;
    };

    // Инициализируем табы на всех блоках с классом 'js-tabs'
    $('.js-tabs').each(function () {
        $(this).data('tabs', $(this).tabs());
    });
});

$(window).scroll(function() {
    if ($(this).scrollTop() > 1){
        $('.header').addClass("sticky");
    }
    else{
        $('.header').removeClass("sticky");
    }
});
