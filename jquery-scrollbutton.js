(function ($) {

    $.fn.scrollButton = function (options) {

        var opts = $.extend($.fn.scrollButton.defaults, options);

        function warn (message) {
            if (window.console && window.console.warn) {
                window.console.warn(message);
            }
        }

        this.each(function () {
            var $target = $(this);

            if ($target.css('position') != 'relative') {
                warn('scrollButton: o elemento de destino não possui posição relative.');
            }

            var $button = $('.scroll-buttom', $target);

            if ($button.length == 0) {
                $button = $('<div class="scroll-buttom" title="' + opts.caption + '"><span class="arrow">&uarr;</span></div>');
                $target.append($button);
            }

            $button.css({
                width: opts.size,
                height: opts.size,
                fontSize: opts.size * 0.75
            });

            $button.on('click', function () {
                $target.animate({
                    scrollTop: 0
                });
            });

            $target.on('scroll', function (e) {
                var targetHeight = $target.height();
                var targetScrollTop = $target.scrollTop();

                if (targetScrollTop > targetHeight / 2) {
                    $button.css({
                        'top': (targetHeight + targetScrollTop - opts.size * 2.25) + 'px'
                    });

                    $button.addClass('show');
                }
                else {
                    $button.removeClass('show');
                }
            });
        });

        return this;
    };

    $.fn.scrollButton.defaults = {
        size: 32,
        caption: 'Voltar para o início.'
    };

})(jQuery);
