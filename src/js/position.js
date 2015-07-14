var modulePosition = (function(){

	function _positioning () {
		var
			$this = $(this),
			water = $('.result__img-water'),
			result = $('.result__window'),
			newPosition = $this.data('position');
		console.log(newPosition);
		water.position({
			my: newPosition,
			at: newPosition,
			of: result
		});
	}
	return {
		init : function () {
			this.setUpListeners();
		},
		setUpListeners : function () {
			$('.positioningBtn').on('click', _positioning);
		}
	};
}());
modulePosition.init();
