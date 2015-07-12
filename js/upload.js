var upload = (function(){
    'use strict';

//забираем данные о картинке с сервера, добавляем картинку в окошко
    function _ajaxImg (data) {
        var
            imageName   = data.name;
        console.log(data.type+'  зашло');
        if(data.type === 'main-image') {
            var
                firstPoint  = $('.upload__input_image'),
                markup      = '<img src="img/upload/origin_' + imageName + '" class="result__img">';

            $('.result__img').remove();
            $('.result__wrap').append(markup);

        } else {

            var
                firstPoint  = $('.upload__input_water-image'),
                markup      = '<img src="img/upload/origin_' + imageName + '" class="result__img-water">';

            $('.result__img-water').remove();
            $('.result__wrap-water').append(markup).draggable();
        }

        var
            fileName    = firstPoint.closest('label'),
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
                    formData:{type:$('#upload-img').data("type")},
                    success: _ajaxImg,
                    fail: function() {
                        console.log('что то не так');
                    }
                });
            }
        };
}());

upload.init();
