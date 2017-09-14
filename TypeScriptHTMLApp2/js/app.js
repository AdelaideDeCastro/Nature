/// <reference path="../scripts/typings/jquery/jquery.d.ts" />
window.onload = function () {
    var i = 0;
    showImage(i);
    checkDateIn();
    //checkDateOut();
    checkHorseRide();
    //horseRide();
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
    $('#datepicker').datepicker({
        showAnim: "fold",
        showOn: "button",
        buttonImage: "http://jqueryui.com/resources/demos/datepicker/images/calendar.gif",
        buttonImageOnly: true,
        showButtonPanel: true,
        showOtherMonths: true,
        dateRange: true,
        stepMonths: 1,
    });
    $('#dateRangepicker').datepicker({
        showAnim: "fold",
        showOn: "button",
        buttonImage: "http://jqueryui.com/resources/demos/datepicker/images/calendar.gif",
        buttonImageOnly: true,
        showButtonPanel: true,
        showOtherMonths: true,
        dateRange: true,
        stepMonths: 1
    });
}
//function checkDateOut() {
//    $('#dateRangepicker').datepicker({
//        showAnim: "fold",
//        showOn: "button",
//        buttonImage: "http://jqueryui.com/resources/demos/datepicker/images/calendar.gif",
//        buttonImageOnly: true,
//        showButtonPanel: true,
//        showOtherMonths: true,
//        dateRange: true,
//        stepMonths: 1
//    })
//}
function checkHorseRide() {
    $('#datepickerHorse').datepicker({
        showAnim: "fold",
        showOn: "button",
        buttonImage: "http://jqueryui.com/resources/demos/datepicker/images/calendar.gif",
        buttonImageOnly: true,
        showButtonPanel: true,
        showOtherMonths: true,
        dateRange: true,
        stepMonths: 1
    });
}
function horseRide() {
    var age;
    $('.checkAge').click(function (evt) {
        if (evt.currentTarget.value == "0-6") {
            $('#pony.showHorse').css("display", "block");
        }
        else if (evt.currentTarget.value == "7-15") {
            $('#medio.showHorse').css("display", "block");
        }
        else {
            $('#grande.showHorse').css("display", "block");
        }
    });
}
//# sourceMappingURL=app.js.map