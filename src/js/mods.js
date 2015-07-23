// Глобальные переменные
var _var = (function() {
    return {
    	drag_div: '.result__wrap-water',
    	widthWatermark: '',
    	heightWatermark: '',
    };
})();

var mods = (function(){

	function _singleMod() {

// Тут пока ХЗ

	}

    function _multiMod() {
        var

            $parentWrap			= $('.result__wrap'),
            widthWrap 			= $parentWrap.width(),
            heightWrap 			= $parentWrap.height(),
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

// очишаем все из обертки вотермарка
            $(_var.drag_div)
                .empty()
                .html(html)
                .css({
                    'width': widthIncrease + 'px',
                    'height': heightIncrease + 'px',
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

                // тут я пытался посчитать ограничения для драггебл по примеру Зара, но что-то не так
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

// Собственно к переключению режимов добавлены методы для перехода
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
