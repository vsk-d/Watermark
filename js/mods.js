// var mods = (function(){
//
//     function _multiMod() {
//         var
//             markup = '<img src="img/upload/origin_1.jpg" class="result__img-water">';
//
//         var
//             wrap            = $('.result__wrap'),
//             imgWrap         = $('.result__water-inner'),
//             img             = $('.result__img'),
//             divHeight       = imgWrap.height(),
//             divWidth        = imgWrap.width(),
//             imgHeight       = img.height(),
//             imgwidth        = img.width(),
//             horCount        = divWidth / imgwidth,
//             vertCount       = divHeight / imgHeight,
//             imageCount      = horCount * vertCount;
//
//          var
//              i = 0;
//
//         for(i; i<=imageCount; i++) {
//             imgWrap.append(markup);
//         }
//     }
//
//     function _modChanger(e) {
//         e.preventDefault();
//
// 		var
//             $this = $(this),
// 			item = $this.closest('.tabs-control__item'),
// 			contentItem = $('.tabs__item'),
// 			itemPosition = item.index();
//
//         console.log($this);
//
// 		contentItem.eq(itemPosition)
// 			.add(item)
// 			.addClass('active')
// 			.siblings()
// 			.removeClass('active');
//
//     if ($this.hasClass('tabs-control__link_single')) {
//
//         _singleMod();
//
//     } else if ($this.hasClass('tabs-control__link_tile')){
//
//         _multiMod();
//
//     }
//
// }
//
//
// 	return {
// 		init : function () {
// 			this.setUpListeners();
// 		},
// 		setUpListeners : function () {
//             $('.tabs-control__link').on('click', _modChanger);
// 		}
// 	};
// }());
// mods.init();
