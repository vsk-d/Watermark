var modulePosition = (function(){

	function _positioning () {
		var
			$this 		= $(this),
			water 		= $('.result__img-water'),
			result 		= $('.result__window'),
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
			result 		= $this.closest('input').val();

		if ( $this.hasClass('axis__button_up')) {

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
