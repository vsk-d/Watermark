var modulePosition = (function(){

	function _positioning () {
		var
			$this = $(this),
			water = $('.result__wrap-water'),
			result = $('.result__wrap_upload-water'),
			newPosition = $this.data('position');

		console.log(newPosition);
		water.position({
			my: newPosition,
			at: newPosition,
			of: result
		});
	}

	function _positioningStep() {
		var
			$this 		= $(this),
			img			= $('.result__wrap-water'),
			step 		= 1,
			curentPosX	= img.css('left'),
			curentPosY	= img.css('top'),
			newPosX		= curentPosX + step,
			newPosY		= curentPosY + step,
			resultInput	= $this.closest('input');

			console.log(curentPosX);
			console.log(curentPosY);
		if ( $this.hasClass('axis__button_up')) {
			img.css('left', newPosX + 'px'
			);
			resultInput.val(newPosX);
		}

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
