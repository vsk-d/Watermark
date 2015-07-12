var form = (function(){
    'use strict';

    var app = {
        initialize : function () {
            this.setUpListeners();
        },

        setUpListeners : function () {
            $('form').on('submit', this.submitForm);
        },

        submitForm : function (e) {
            e.preventDefault();
            // TODO actions сделать аякс /img.php

        }
    };

    app.initialize();
}());
