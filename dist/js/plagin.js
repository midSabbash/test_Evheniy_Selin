//mobile button
(function () {
    $('.mobile-btn-sidebar').on('click', function () {
        $(this).toggleClass('open');
        $('.sidebar').toggleClass('open');

    });
}(jQuery));

//remove disable from select
(function () {
    $('form').on('change', function () {

        $('select').removeAttr('disabled');

        setTimeout(function () {
            $('select').trigger('refresh');
        }, 1)

    });
}(jQuery));

//max height for all tabs
(function () {
    $(window).on('load', function () {
        $.fn.equalizeHeights = function () {
            var maxHeight = this.map(function (i, e) {
                return $(e).height() + 19;
            }).get();

            return this.height(Math.max.apply(this, maxHeight));
        };

        $('.tab').equalizeHeights();
    });
}(jQuery));