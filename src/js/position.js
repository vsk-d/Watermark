var modulePosition = (function(){

// позиционирование с помощью чек-боксов
	function _positioning () {
		var
			$this 		= $(this),
			water 		= $('.result__wrap-water'),
			result 		= $('.result__wrap'),
			newPosition = $this.data('position');

		water.position({
			my: newPosition,
			at: newPosition,
			of: result
		});

		_displayInInput ('.result__wrap-water', 'left',  'top', $('#control-x'), $('#control-y') );
	}

// универсальная функция для спинеров
	function _positioningSpin ($this, target, firstProp, secondProp, axis ) {

		var
			defAxis 			= $this.parent(),
			img 				= $(target),
			step 				= 1,
			resultWindow 		= $('.result__wrap'),
			firstCurProp 		= img.css(firstProp),
			secondCurProp 		= img.css(secondProp),
			intFirstCurProp 	= parseInt(firstCurProp),
			intSecondCurProp 	= parseInt(secondCurProp),
			newFirstProp 		= 0,
			newSecondProp 		= 0,
			min 				= 0,
			maxFirstProp 		= 999,
			maxSecondProp 		= 999;
			topBtn 				= 'axis__button_up',
			botBtn 				= 'axis__button_down';

		if( target === '.result__wrap-water'){
			maxFirstProp = resultWindow.width() - img.width();
			maxSecondProp = resultWindow.height() - img.height();
		}

		if ( defAxis.hasClass( axis ) ) {

			if ($this.hasClass(topBtn) && intFirstCurProp < maxFirstProp ) {

				newFirstProp = intFirstCurProp + step;
				img.css( firstProp, newFirstProp );

			} else if ( $this.hasClass(botBtn) && intFirstCurProp > min ) {

				newFirstProp = intFirstCurProp - step;
				img.css(firstProp, newFirstProp);

			}

		} else {

			if ($this.hasClass(topBtn) && intSecondCurProp < maxSecondProp ) {

				newSecondProp = intSecondCurProp + step;
				img.css(secondProp, newSecondProp );

			} else  if ( $this.hasClass(botBtn) && intSecondCurProp > min){

				newSecondProp = intSecondCurProp - step;
				img.css( secondProp, newSecondProp );

			}
		}
	}

// выводим информацию в инпуты
	function _displayInInput (target, firstProp,  secondProp, firstInput, secondInput) {
		var
			img			= $(target),
			topCoord	= img.css(firstProp),
			leftCoord	= img.css(secondProp),
			currentX	= Math.floor(parseInt(topCoord)),
			currentY	= Math.round(parseInt(leftCoord));

		firstInput.val(currentX);
		secondInput.val(currentY);
	}

// убираем выделение с чек-боксов
	function _hideChecked () {
		var
			checkedInput = $('input:checked');

		checkedInput.removeAttr('checked');
	}

// индикатор марджинов
function _marginIndicator (target, firstProp,  secondProp) {
	var
		img = $(target),
		height = img.css(firstProp),
		width = img.css(secondProp),
		invicatorHeight = $('.indicator_height'),
		invicatorWidth = $('.indicator_width');

	invicatorHeight.css('width', width);
	invicatorWidth.css('height', height);
}


//позиционирование при одиночном режиме
	function _singleMod(e) {
		e.preventDefault();

		var
			$this 		= $(this),
			target 		= '.result__wrap-water',
			axis 		= 'axis__control-x',
			firstProp 	= 'left',
			secondProp 	= 'top';

		_positioningSpin($this, target, firstProp , secondProp , axis);

		var
			firstInput	= $('#control-x'),
			secondInput	= $('#control-y');

		 _displayInInput( target, firstProp,  secondProp, firstInput, secondInput );

		_hideChecked();
	}

//позиционирование при мульти режиме
	function _multyMod(e) {
		e.preventDefault();

		var
			$this 		= $(this),
			target 		= '.multy__water',
			axis 		= 'axis__control_height',
			firstProp 	= 'margin-bottom',
			secondProp 	= 'margin-right';

		_positioningSpin($this, target, firstProp , secondProp , axis);

		var
			firstInput	= $('#control-height'),
			secondInput	= $('#control-width');

		 _displayInInput( target, firstProp,  secondProp, firstInput, secondInput );

		 _marginIndicator( target, firstProp,  secondProp );
	}

// позиционирование при перемещении
	function _drag () {

		_displayInInput ('.result__wrap-water', 'left',  'top', $('#control-x'), $('#control-y') );

		_hideChecked();
	}


// Запрещаем вводить буквы в инпуты
	function _keyPressNumber(e) {

        if (e.which > 57 || e.which < 48) {
            return false;
        }
    }


	return {
		init : function () {
			this.setUpListeners();
			$('.result__wrap-water').draggable({
				containment:".result__wrap",
				scroll:false,
			});
		},
		setUpListeners : function () {
			$('.positioningBtn').on('click', _positioning);
			$('.singleBtn').on('click', _singleMod);
			$('.multiBtn').on('click', _multyMod);
			$('.result__wrap-water').on('drag', _drag);
			$('.axis__input').on('keypress', _keyPressNumber);
		}
	};
}());
modulePosition.init();
