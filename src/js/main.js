var module = (function(){

}());

$(document).ready(function() {
	$('.tabs-control__link').on('click',function(e){
		e.preventDefault();

		var item = $(this).closest('.tabs-control__item'),
			contentItem = $('.tabs-list__item'),
			itemPosition = item.index();

		contentItem.eq(itemPosition)
			.addClass('tabs-list__item_active')
			.siblings()
			.removeClass('tabs-list__item_active');

		item.addClass('tabs-control__item_active')
			.siblings()
			.removeClass('tabs-control__item_active');

	});

});