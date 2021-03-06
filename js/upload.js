
var _var = (function() {
    return {
        picBlock_div: '.result__window',
        fileUpload_div: '.result__wrap',
        waterMarkUpload_div: '.result__wrap-water',
        urlFileUpload: '',
        urlWatermark: '',
        uploadFile: false,
        uploadWatermark: false,
    };
})();

var upload = (function(){
    'use strict';

//забираем данные о картинке с сервера, добавляем картинку в окошко
    function _ajaxImg (data) {
        var
            imageName = data.name,
            firstPoint,
            markup,
            fileName,
            fileUrl;

        var
            genImg          = $('.result__img'),
            waterImg        = $('.result__img-water'),
            genImgWrap      = $('.result__wrap'),
            waterImgWrap    = $('.result__wrap-water'),
            idWater         = $('#upload-water'),
            tabControls     = $('.tabs-control__link'),
            downloadBtn    = $('.settings__btn_download');

//Добавление основной картинки
        if(data.type === 'main-image') {

            firstPoint  = $('.upload__input_image').closest('label');
            markup      = '<img src="img/upload/' + imageName + '" class="result__img">';

            genImg.remove();
            genImgWrap.append(markup);

//включаем загрузку вотер марка
            idWater.removeAttr('disabled')
                .closest('label')
                .removeClass('disabled');

        } else {

// добавление вотермарка
            firstPoint  = $('.upload__input_water-image').closest('label');
            markup      = '<img src="img/upload/' + imageName + '" class="result__img-water">';

            waterImg.remove();
            waterImgWrap.append(markup);
            tabControls.closest('a').removeClass('off');
            downloadBtn.removeAttr('disabled');

        }

        fileName    = firstPoint.find('span');
        fileUrl     = firstPoint.find('[type="hidden"]');

        fileName.text(imageName);
        fileUrl.val(imageName);
        _var.urlWatermark = imageName;

        console.log(imageName);
    }

        return {
            init : function() {
                this.uploadImages();
            },
            //отправляем картинку на сервер
            uploadImages : function() {
                var
                    url      = 'actions/upload.php',
                    dataType = 'json';

                $('.fileupload').fileupload({
                    url: url,
                    dataType: dataType,
                    success: _ajaxImg,
                    fail: function() {
                        console.log('что то не так');
                    }
                });
            }
        };
}());

upload.init();
