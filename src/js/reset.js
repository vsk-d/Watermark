var resetModul = (function(){
    'use strict';
    function _resetAll () {

    var
    	waterDiv   = '.result__wrap-water',
    	sliderOp   = '#slider-range-min';


        $(waterDiv).css('top', '0');
    	$(waterDiv).css('left', '0');
    	$(waterDiv).css('opacity', '100');

        $(sliderOp).slider({
            range: "min",
            value: 100,
            min: 1,
            max: 100,
            slide: function( event, ui ) {
                var opacity = ui.value,
                    _length = opacity.toString()
                    .length;

                if (_length < 2) {
                    opacity = ".0" + opacity;

                } else if (_length === 3) {
                    opacity = ui.value;

                } else {
                    opacity = '.' + opacity;
                }

                $(_var.drag_div)
                    .css({
                        'opacity': opacity
                    });
                _var.urlOpacity = opacity;

                $(".opacity__input").val(ui.value);
            }
        });

    }

       return {

            initialize : function () {
                this.setUpListeners();
            },

            setUpListeners : function () {
                $('.settings__btn_reset').on('click', _resetAll);

            }
        };

}());

resetModul.initialize();
