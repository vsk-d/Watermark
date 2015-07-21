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
            waterData       = {};

//Добавление основной картинки
        if(data.type === 'main-image') {
            waterData = idWater.data('formData');
            waterData.genImgName = data.name;
            console.log($('#upload-water').data('form-data'));
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

        }

        fileName    = firstPoint.find('span');
        fileUrl     = firstPoint.find('[type="hidden"]');

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
