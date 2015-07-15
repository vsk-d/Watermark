var modulePosition = (function(){

	function _positioning () {
		var
			$this = $(this),
			water = $('.result__wrap-water'),
			result = $('.result__wrap'),
			newPosition = $this.data('position');

		console.log(newPosition);

		water.position({
			my: newPosition,
			at: newPosition,
			of: result
		});

		_displayInInput ();

	}

	function _positioningStep() {
		var
			$this			= $(this),
			defAxis			= $this.parent(),
			step			= 1,
			img				= $('.result__wrap-water'),
			topCoord		= img.css('top'),
			leftCoord		= img.css('left'),
			currentY		= parseInt(topCoord),
			currentX		= parseInt(leftCoord),
			newPositionY	= currentY + step,
			newPositionX	= currentX + step,
			newPositionYmin	= currentY - step,
			newPositionXmin = currentX - step,
			min				= 0,
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
	}

	function _displayInInput () {
		var
			img			= $('.result__wrap-water'),
			topCoord	= img.css('left'),
			leftCoord	= img.css('top'),
			inputX		= $('#control-x'),
			inputY		= $('#control-y'),
			currentX	= Math.floor(parseInt(topCoord)),
			currentY	= Math.round(parseInt(leftCoord));

		inputX.val(currentX);
		inputY.val(Math.abs(currentY));
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
			$('.axis__button').on('click', _positioningStep);
			$('.result__wrap-water').on('drag', _displayInInput);
		}
	};
}());
modulePosition.init();
