(function(){
    'use strict';

    $('.fileupload').fileupload({
            url: 'actions/img.php',
            dataType: 'json',
            success: function(data){
                var
                    $this       = $(this),
                    fileName    = $this.closest('label'),
                    fileUrl     = $this.closest('[type="hidden"]');

                fileName.text(data.name);
                fileUrl.val(data.name);
            }
        });
}());
