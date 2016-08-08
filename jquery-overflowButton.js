(function ($) {

    $.fn.overflowButton = function (options) {

        var opts = $.extend($.fn.overflowButton.defaults, options);

        function warn (message) {
            if (window.console && window.console.warn) {
                window.console.warn(message);
            }
        }

        this.each(function () {
            var $target = $(this);

            if ($target.css('position') != 'relative') {
                warn('OverflowButton: o elemento de destino não possui posição relative.');
            }

            var $button = $('.overflow-button', $target);

            if ($button.length == 0) {
                $button = $('<div class="overflow-button" title="Ir para o topo da página."><span class="arrow">&uarr;</span></div>');
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

    $.fn.overflowButton.defaults = {
        size: 32
    };

})(jQuery);
