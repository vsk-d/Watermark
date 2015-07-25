var modulePosition = (function(){

	function _positioning () {
		var
			$this 		= $(this),
			water 		= $('.result__wrap-water'),
			result 		= $('.result__wrap'),
			newPosition 	= $this.data('position');

		console.log(newPosition);

		water.position({
			my: newPosition,
			at: newPosition,
			of: result
		});

		_displayInInput ();
	}

	function _positioningStep(e) {
		e.preventDefault();

		var
			$this			= $(this),
			defAxis			= $this.parent(),
			step			= 1,
			img			= $('.result__wrap-water'),
			topCoord		= img.css('top'),
			leftCoord		= img.css('left'),
			currentY		= parseInt(topCoord),
			currentX		= parseInt(leftCoord),
			newPositionY		= currentY + step,
			newPositionX		= currentX + step,
			newPositionYmin	= currentY - step,
			newPositionXmin	 = currentX - step,
			min			= 0,
			maxX			= $('.result__wrap').width() - img.width(),
			maxY			= $('.result__wrap').height() - img.height();

		if ( defAxis.hasClass('axis__control-x') ) {
			console.log('двигаем в сторону');
			if ($this.hasClass('axis__button_up') && newPositionX <= maxX ) {
				img.css('left', newPositionX);
			} else if ( $this.hasClass('axis__button_down') && newPositionXmin >= min){
				img.css('left', newPositionXmin);
			}

		} else {
			console.log('выполняем спуск');
			if ($this.hasClass('axis__button_up') && newPositionY <= maxY ) {
				img.css('top', newPositionY );
			} else  if ( $this.hasClass('axis__button_down') && newPositionYmin >= min){
				img.css('top', newPositionYmin );
			}
		}
		_displayInInput();
		_hideChecked();
	}

	function _drag () {
		_displayInInput();
		_hideChecked();
	}

	function _displayInInput () {
		var
			img		= $('.result__wrap-water'),
			topCoord	= img.css('left'),
			leftCoord	= img.css('top'),
			inputX		= $('#control-x'),
			inputY		= $('#control-y'),
			currentX	= Math.floor(parseInt(topCoord)),
			currentY	= Math.round(parseInt(leftCoord));

		inputX.val(currentX);
		inputY.val(Math.abs(currentY));
	}
// убираем выделение с чек-боксов
	function _hideChecked () {
		var
			checkedInput = $('input:checked');

		checkedInput.removeAttr('checked');
	}

// Запрещаем вводить буквы в инпуты
function _keyPressNumber(e) {
            //обрабатываются событие надатие клавиши, узнаетеся ее код и сравнивается, оно или не оно, в случае когда это не цифры возвращаем false
            if (e.which > 57 || e.which < 48) {
                return false;
            } 
         }

// увеличиваем маржины для мульти режима.

	function _marginChanger (e) {
		e.preventDefault();

		var
			$this 			= $(this),
			defAxis 		= $this.parent(),
			input			= defAxis.parent().find('input'),
			img 			= $('.multy__water'),
			curMargBot 		= img.css('margin-bottom'),
			curMargRight 		= img.css('margin-right'),
			indexBot		= $('.indicator_width'),
			indexRight		= $('.indicator_height'),
			intCurMargBot 		= parseInt(curMargBot),
			intCurMargRight 	= parseInt(curMargRight),
			step 			= 1,
			min 			= 0,
			newMargBot 		= 0,
			newMargRight 		= 0;


		if ( defAxis.hasClass('axis__name_height') ) {

			console.log('маргин бок');
			if ($this.hasClass('axis__button_heigt_up') ) {

				newMargRight = intCurMargRight + step;
				img.css('margin-right', newMargRight);
				indexRight.css('width', newMargRight);

			} else if ( $this.hasClass('axis__button_heigt_down') && intCurMargRight > min){
				newMargRight = intCurMargRight - step;
				img.css('margin-right', newMargRight);
				indexRight.css('width', newMargRight);
			}
			input.val(newMargRight);

		} else {
			console.log('маргин ботом');
			if ($this.hasClass('axis__button_width_up') ) {
				newMargBot = intCurMargBot + step;
				img.css('margin-bottom', newMargBot );
				indexBot.css('height', newMargBot);
			} else  if ( $this.hasClass('axis__button_width_down') && intCurMargBot > min){
				newMargBot = intCurMargBot - step;
				img.css('margin-bottom', newMargBot );
				indexBot.css('height', newMargBot);
			}
			input.val(newMargBot);
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
			$('.singleBtn').on('click', _positioningStep);
			$('.result__wrap-water').on('drag', _drag);
			$('.MultiBtn').on('click', _marginChanger);
			$('.axis__input').on('keypress', _keyPressNumber); 
		}
	};
}());
modulePosition.init();
