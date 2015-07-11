var upload = (function(){
    'use strict';

//забираем данные о картинке с сервера, добавляем картинку в окошко
    function _ajaxImg (data) {
        var
            firstPoint  = $('.fileupload-img'),
            fileName    = firstPoint.closest('label'),
            fileUrl     = firstPoint.closest('[type="hidden"]'),
            imageName   = data.name,
            markup      = '<img src="img/upload/origin_' + imageName + '" class="result__img">';

        fileName.text(imageName);
        fileUrl.val(imageName);

        $('.result__img').remove();
        $('.result__wrap').append(markup);
    }

    function _ajaxWater (data) {
        var
            firstPoint  = $('.fileupload-water'),
            fileName    = firstPoint.closest('label'),
            fileUrl     = firstPoint.closest('[type="hidden"]'),
            imageName   = data.name,
            markup      = '<img src="img/upload/origin_' + imageName + '" class="result__img-water">';

        fileName.text(imageName);
        fileUrl.val(imageName);

        $('.result__img-water').remove();
        $('.result__wrap-water').append(markup).draggable();

    }

        return {
            init : function() {
                this.uploadImages();
                this.uploadWater();
            },
            //отправляем картинку на сервер
            uploadImages : function() {
                var
                    url      = 'actions/upload.php',
                    dataType = 'json';

                $('.fileupload-img').fileupload({
                    url: url,
                    dataType: dataType,
                    success: _ajaxImg,
                    fail: function() {
                        console.log('что то не так');
                    }
                });
            },
            uploadWater : function () {
                var
                    url      = 'actions/upload.php',
                    dataType = 'json';

                $('.fileupload-water').fileupload({
                    url: url,
                    dataType: dataType,
                    success: _ajaxWater,
                    fail: function() {
                        console.log('что то не так');
                    }
                });
            }
        };
}());

upload.init();
