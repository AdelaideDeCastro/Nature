/// <reference path="../scripts/typings/jquery/jquery.d.ts" />
/// <reference path="../scripts/typings/jqueryui/jqueryui.d.ts" />


///// <reference path="../scripts/typings/require/require.d.ts" />

//require.config({
//    baseUrl: 'js',
//    //except, if the module ID starts with "app",
//    //load it from the js/app directory. paths
//    //config is relative to the baseUrl, and
//    //never includes a ".js" extension since
//    //the paths config could be for a directory.
//    paths: {
//        jquery: 'jquery',
//        jqueryUI: 'jquery-ui',
//        app:'app'
//    },
//    shim: {
//        app: {
//            deps: ['jquery', 'jqueryUI']
//        },
//        jqueryUI: {
//            deps: ['jquery']
//        }
//    }

//})


window.onload = function () {

        $("#dialog").dialog({
            autoOpen: true,
            show: {
                effect: "blind",
                duration: 1000
            }
        });

    let i = 0;
    showImage(i);
    checkDateIn();


}

function showImage(i) {
    var images = $('img.showMe').length;
    $('#arrowRight').click(function () {
        if (i == 0) {
            $('#arrowLeft').css('display', 'block');
        }
        if (i == images - 2) {
            $('#arrowRight').css('display', 'none');
        }
        $('img.showMe').eq(i).css('display', 'none');
        $('img.showMe').eq(i + 1).css('display', 'block');
        i++;
    }
    )
    $('#arrowLeft').click(function () {

        if (i == 1) {
            $('#arrowLeft').css('display', 'none');
        }
        if (i == images - 1) {
            $('#arrowRight').css('display', 'block');
        }
        $('img.showMe').eq(i).css('display', 'none');
        $('img.showMe').eq(i - 1).css('display', 'block');
        i--;
    }
    )
}

function checkDateIn() {
    let today = new Date();
    let tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000 * 365);

    $('#datepicker').datepicker({
        showAnim: "fold",
        showOn: "button",
        buttonImage: "image/logoCalendar.png",
        buttonImageOnly: true,
        showButtonPanel: true,
        showOtherMonths: true,
        stepMonths: 1,
        minDate: new Date,
        maxDate: tomorrow,
        onSelect: function (dateText) {
            let sD = new Date(dateText);
            $('#dateRangepicker').datepicker('option', 'minDate', sD);
        }
    })

    $('#dateRangepicker').datepicker({
        showAnim: "fold",
        showOn: "button",
        buttonImage: "image/logoCalendar.png",
        buttonImageOnly: true,
        showButtonPanel: true,
        showOtherMonths: true,
        stepMonths: 1,
        minDate: new Date,
        maxDate: tomorrow,
        onSelect: function (dateText) {
            let sD = new Date(dateText);
            $('#datepicker').datepicker('option', 'maxDate', sD);
        }
    });

        let tomorrow2 = new Date(today.getTime() + 24 * 60 * 60 * 1000 * 182.5);
        $('#datepickerHorse').datepicker({
            showAnim: "fold",
            showOn: "button",
            buttonImage: "image/logoCalendar.png",
            buttonImageOnly: true,
            showButtonPanel: true,
            showOtherMonths: true,
            stepMonths: 1,
            minDate: new Date,
            maxDate: tomorrow2,
            onSelect: function (dateText) {
                $('#age').css('display', 'block');

                $('.checkAge').click(function (evt) {
                    if ((evt.currentTarget as any).value == "0-6") {
                        $('#pony.showHorse').css("display", "block");
                        $('#medio.showHorse, #grande.showHorse').css('display', 'none');
                    }
                    else if ((evt.currentTarget as any).value == "7-15") {
                        $('#medio.showHorse').css("display", "block");
                        $('#pony.showHorse, #grande.showHorse').css('display', 'none');
                    }
                    else {
                        $('#grande.showHorse').css("display", "block");
                        $('#pony.showHorse, #medio.showHorse').css('display', 'none');
                    }
                    $('#submitDay').removeClass('disabled');
                }
                )
            }
        });
}