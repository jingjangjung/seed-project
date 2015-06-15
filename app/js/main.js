/* global $ */
$(document).ready(function () {
    'use strict';
    // variables

    // methods
    var setup = function () {

        bindEvents();

        // use different server
        $.ajax({
            url: 'http://localhost:1337'
        }).done(function (data) {
            alert('Returned text is: ' + data);

            $('#test-row').text('Returned text is: ' + data);
        });


        // use same server
        // $.ajax({
        //     url: 'http://localhost:3000/test'
        // }).done(function (data) {
        //     alert('Returned text is: ' + data);

        //     $('#test-row').text('Returned text is: ' + data);
        // });

    },

    bindEvents = function () {

    };


    setup();
});
