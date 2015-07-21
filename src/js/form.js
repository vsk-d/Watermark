var form = (function(){
    'use strict';

        function _submitForm (e) {
            e.preventDefault();

            var
                form = $(this);

            _ajaxForm(form);
        }

        function _ajaxForm (form) {

            var
                data 		= form.serialize(),
				dataType 	= 'JSON',
                type        = 'POST',
                url         = 'actions/img.php',
				defObject	= $.ajax({
					type: type,
					url: url,
					data: data,
					dataType: dataType

                }).always(function() {
					console.log('пошла родная');
                    console.log(data);
				})
				.done(function(e) {
                    form.attr('action','actions/download.php');
                    $.fileDownload($(this).prop('action'));

                    return false;
				})
				.fail(function() {
					console.log('Проблема на стороне сервера');
				});

            return defObject;
        }

        return {

            initialize : function () {
                this.setUpListeners();
            },

            setUpListeners : function () {
                $('form').on('submit', _submitForm);
            }
        };

}());

form.initialize();
