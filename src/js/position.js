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
			currentX		= parseInt(leftCoord);

		console.log(topCoord);
		console.log(leftCoord);
		// console.log($this);

		if ( defAxis.hasClass('axis__control-x')) {
			console.log('выполняем спуск');
			if ($this.hasClass('axis__button_up')) {
				img.css({'left': currentY + step + 'px'});
			} else {
				img.css({'left': currentY - step + 'px'});
			}

		} else {
			console.log('двигаем в сторону');
			if ($this.hasClass('axis__button_up')) {
				img.css({'top': currentY - step + 'px'});
			} else {
				img.css({'top': currentY + step + 'px'});
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
		},
		setUpListeners : function () {
			$('.positioningBtn').on('click', _positioning);
			$('.axis__button').on('click', _positioningStep);
		}
	};
}());
modulePosition.init();
