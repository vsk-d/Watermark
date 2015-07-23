
var _var = (function() {
    return {
        drag_div: '.result__wrap-water',
        slider_div: '#slider-range-min',
        urlOpacity: 1,
    };
})();

  $(function() {
    $( "#slider-range-min" ).slider({
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

                console.log(_var.urlOpacity)

                $(".opacity__input").val(ui.value);
      }
    });

});