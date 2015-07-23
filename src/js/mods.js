var _var = (function() {
    return {
    	drag_div: '.result__wrap-water',
    	widthWatermark: '',
    	heightWatermark: '',
    };
})();

var mods = (function(){

	function _singleMod() {



	}

    function _multiMod() {
        // var
        //     markup      = '<img src="img/upload/' + imageName + '" class="result__img-water">';

        var
            // wrap            = $('.result__wrap'),
            // imgWrap         = $('.result__water-inner'),
            // img             = $('.result__img'),
            // spinnerW		= $('.indicator_width'),
            // spinnerH		= $('.indicator_height'),
            // divHeight       = imgWrap.height(),
            // divWidth        = imgWrap.width(),
            // imgHeight       = img.height(),
            // imgwidth        = img.width(),
            // horCount        = divWidth / imgwidth,
            // vertCount       = divHeight / imgHeight,
            // imageCount      = horCount * vertCount;
            $parentWrap			= $('.result__wrap'),
            widthWrap 			= $parentWrap.width(),
            heightWrap 			= $parentWrap.height(),
            // $dragBlock 			= $('.result__wrap-water'),
            imgDrop 			= $(_var.drag_div).find('img'),
            widthImg 			= imgDrop.width(),
            heightImg 			= imgDrop.height(),
            countWidth 			= Math.ceil(widthWrap / widthImg) * 5,
            countHeight 		= Math.ceil(heightWrap / heightImg) * 5,
            widthIncrease 		= (countWidth * widthImg) + widthImg,
            heightIncrease 		= (countHeight * heightImg) + widthImg,
            html = '';

			for (var i = 0; i < countHeight; i++) { // Циклом пробегаемся создавая каждую строку
                 html += '<div class="row">';
                for (var c = 0; c < countWidth; c++) { // Здесь циклом пробегаемся и создаем каждую картинку
                    html += '<img src="img/upload/' + _var.urlWatermark + '">';
                }
                html += '</div>'; // Закрываем див и снова!
            }

            $(_var.drag_div)
                .empty()
                .html(html)
                .css({
                    'width': widthIncrease + 'px',
                    'height': heightIncrease + 'px',
                    // 'opacity':  _var.urlOpacity
                })
                .position({
                    my: 'left top',
                    at: 'left top',
                    of: '.result__wrap',
                    collision: "none"
                });
            _var.widthWatermark = widthIncrease; // Присваиваем глобальным переменным что бы потом знать их оригинальные значения
            _var.heightWatermark = heightIncrease; // Присваиваем глобальным переменным что бы потом знать их оригинальные значения
       
        }

    function _destroy__multiMod() { 

    	var $dragBlock = $(_var.drag_div), // Драгбл блок
                rememberHtml = '<img src="img/upload/' + _var.urlWatermark + '">'; // Возвращаем одну картинку
            $dragBlock
                .css({
                    'top': '0', // Сбрасываем значения ТОП
                    'left': '0', // Значения по left
                    'width': 'auto',
                    'height': 'auto'
                })
                .empty() // обязательно очищаем блок от всего внутри
                .html(rememberHtml); // вставляем нашу картинку
          
    	
    	$(_var.drag_div)
                .draggable("destroy")
                .css({
                    'top': '0',
                    'left': '0',
                    'width': 'auto',
                    'height': 'auto'
                });
        $(_var.drag_div)
                .css({
                    'top': '0',
                    'left': '0',
                    'width': 'auto',
                    'height': 'auto'
                })
                .find('img')
                .css({
                    'margin': '0'
                });
       $('.result__wrap-water').draggable({
				containment:".result__wrap",
				scroll:false,
			});

        console.log('destroy_multy');  

    }  


       function _destroy__singleMod() {  
    	
    	// $(_var.drag_div)
     //            .draggable("destroy")
        $(_var.drag_div)
                        .css({
                    'top': '0',
                    'left': '0',
                    'width': '5000',
                    'height': '5000'
                })
        		.find('img')
                .css({
                    'margin': '0'
                });
        var $fileUpload = $('.result__window'),
                offsetLeft = $fileUpload.offset()
                .left,
                offsetTop = $fileUpload.offset()
                .top,
                fileWidth = $fileUpload.width(),
                fileHeight = $fileUpload.height(),
                $dragBlock = $(_var.drag_div),
                dragWidth = $dragBlock.width(),
                dragHeight = $dragBlock.height(),
                x1 = (offsetLeft + fileWidth) - dragWidth,
                y1 = -(dragHeight - (offsetTop + fileHeight)),
                x2 = offsetLeft,
                y2 = offsetTop,
                arrayPosition = [x1, y1, x2, y2];
            $(_var.drag_div)
                .draggable('destroy');
            $(_var.drag_div)
                .draggable({
                    containment: arrayPosition,
                    scroll: false
                });   
}

    function _modChanger(e) {
        e.preventDefault();

		var
            $this = $(this),
			item = $this.closest('.tabs-control__item'),
			contentItem = $('.tabs__item'),
			itemPosition = item.index();

        console.log($this);

		contentItem.eq(itemPosition)
			.add(item)
			.addClass('active')
			.siblings()
			.removeClass('active');

    if ($this.hasClass('tabs-control__link_single')) {

        _singleMod();
        _destroy__multiMod();

    } else if ($this.hasClass('tabs-control__link_tile')){

        _multiMod();
        _destroy__singleMod();
            console.log(_var.widthWatermark);
            console.log(_var.heightWatermark);
    }

}


	return {
		init : function () {
			this.setUpListeners();
		},
		setUpListeners : function () {
            $('.tabs-control__link').on('click', _modChanger);
		}
	};
}());
mods.init();
