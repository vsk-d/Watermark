// Определяем все переменные

var __var = (function () {
	return {
		dragDiv: '.result__wrap-water',
		snipperX_input: '#control-x',
        snipperY_input: '#control-y',
        picBlock_div: '.result__window',
        fileUpload_div: '.result__wrap',
        waterMarkUpload_div: '.result__wrap-water',
		cancel_btn: '.settings__btn_reset',
        download_btn: '.settings__btn_download',
        tab_div: '.tabs-control__item',
        boxPosition_div: '.settings__field',
		single_ico: '.single',
        multiple_ico: '.multy',
		urlFileUpload: '',
        urlWatermark: '',
        urlSpinerX: 0,
        urlSpinerY: 0,
        urlOpacity: 1,
        uploadFile: false,
        uploadWatermark: false,
        widthWatermark: '',
        heightWatermark: ''

	};
})();

// ==============================================
// ==============================================
// Модуль загрузки 
// ==============================================

var fileUpload = (function() {
	   'use strict';
    var fileUploadUrl = '/php/upload.php',
        waterUpload = $(_var.waterMarkUpload_div),
        fileUpload = $(_var.fileUpload_div),
        fileText = $('input[name="file[]"]')


})();