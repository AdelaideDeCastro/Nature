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
    var i = 0;
    showImage(i);
    checkDateIn();
};
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
    });
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
    });
}
function checkDateIn() {
    var today = new Date();
    var tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000 * 365);
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
            var sD = new Date(dateText);
            $('#dateRangepicker').datepicker('option', 'minDate', sD);
        }
    });
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
            var sD = new Date(dateText);
            $('#datepicker').datepicker('option', 'maxDate', sD);
        }
    });
    var tomorrow2 = new Date(today.getTime() + 24 * 60 * 60 * 1000 * 182.5);
    $('#datepickerHorse').datepicker({
        beforeShowDay: deleteDay,
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
                if (evt.currentTarget.value == "0-6") {
                    $('#pony.showHorse').css("display", "block");
                    $('#medio.showHorse, #grande.showHorse').css('display', 'none');
                }
                else if (evt.currentTarget.value == "7-15") {
                    $('#medio.showHorse').css("display", "block");
                    $('#pony.showHorse, #grande.showHorse').css('display', 'none');
                }
                else {
                    $('#grande.showHorse').css("display", "block");
                    $('#pony.showHorse, #medio.showHorse').css('display', 'none');
                }
                $('#submitDay').removeClass('disabled');
            });
        }
    });
}
function deleteDay(date) {
    var arrayDay = ['01-01-2017', '01-06-2017', '08-15-2017', '12-24-2017', '12-25-2017', '12-31-2017'];
    var index_i = arrayDay.length;
    var m = date.getMonth();
    var d = date.getDate();
    var y = date.getFullYear();
    for (index_i = 0; index_i <= arrayDay.length; index_i++) {
        if ($.inArray((m + 1) + '-' + d + '-' + y, arrayDay) != -1 || new Date() > date) {
            return false;
        }
        return true;
    }
}
//# sourceMappingURL=app.js.map