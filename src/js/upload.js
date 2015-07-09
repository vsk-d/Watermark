var upload = (function(){
    'use strict';

    function _initFileupload() {
        var
            url      = 'actions/img.php',
            dataType = 'json';
        $('.fileupload').fileupload({
            url: url,
            dataType: dataType,
            success: _ajaxFiles
        });

    }

    function _ajaxFiles (data){
        var
            $this       = $(this),
            fileName    = $this.closest('label'),
            fileUrl     = $this.closest('[type="hidden"]');

        fileName.text(data.name);
        fileUrl.val(data.name);
        
        _addPicToWindow ();
    }

    function _addPicToWindow () {

    }

        return {
            init : function() {
                this.uploadImages();
            },

            uploadImages : function() {
                console.log('init');
                _initFileupload();
            }
        };
}());

upload.init();
