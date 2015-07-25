var resetModul = (function(){
    'use strict';
    function _resetAll () {

    var
    	waterDiv   = '.result__wrap-water',
        multyWater = '.multy__water',
    	sliderOp   = '#slider-range-min';
        
    	$(waterDiv).css({'top': '0', 'left': '0', 'opacity': '100' });
        $(_var.indicatorW).css('height', '0.1');
        $(_var.indicatorH).css('width', '0.1');
        $(multyWater).css({'margin-bottom': '0', 'margin-right': '0'});

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
