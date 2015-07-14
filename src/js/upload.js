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

        if(data.type === 'main-image') {

            firstPoint  = $('.upload__input_image');
            markup      = '<img src="img/upload/origin_' + imageName + '" class="result__img">';

            $('.result__img').remove();
            $('.result__wrap').append(markup);

        } else {

            firstPoint  = $('.upload__input_water-image');
            markup      = '<img src="img/upload/origin_' + imageName + '" class="result__img-water">';

            $('.result__img-water').remove();
            $('.result__wrap-water').append(markup);
            $('.result__wrap-water').draggable({ containment:".result__wrap_upload-water", scroll:false });
        }

        fileName    = firstPoint.closest('label');
        fileUrl     = firstPoint.closest('[type="hidden"]');

        fileName.text(imageName);
        fileUrl.val(imageName);
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
