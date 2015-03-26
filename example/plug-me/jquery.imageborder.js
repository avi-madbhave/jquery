(function ( $ ) {
    $.fn.imageborder = function(options){
        // This is the easiest way to have default options.
        var settings = $.extend({
            // These are the defaults.
            border: "red 1px solid"
        }, options );

        return this.each(function(){
            $(this).css(settings);
        });
    };
}( jQuery ));