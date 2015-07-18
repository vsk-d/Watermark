var module = (function(){

}());

$(document).ready(function() {

	$('.tabs-control__link').on('click',function(e){
		e.preventDefault();

		var
			item = $(this).closest('.tabs-control__item'),
			contentItem = $('.tabs__item'),
			itemPosition = item.index();

		contentItem.eq(itemPosition)
			.add(item)
			.addClass('active')
			.siblings()
			.removeClass('active');

	});

});
