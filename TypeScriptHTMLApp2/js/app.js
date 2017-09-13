/// <reference path="../scripts/typings/jquery/jquery.d.ts" />
window.onload = function () {
    var i = 0;
    showImage(i);
    //startTimer();
    horseRide();
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
//function displayNextImage() {
//    var images = $('img.showImage').length;
//    for (var i = 0; i < images; i++) {
//            $('img.showImage').eq(i).css("display", "none");
//            if (i == images - 1)
//                $('img.showImage').eq(0).css("display", "block");
//            else
//                $('img.showImage').eq(i + 1).css("display", "block");
//        sleep(2200);
//    };
//}
//function sleep(miliseconds) {
//    var currentTime = new Date().getTime();
//    while (currentTime + miliseconds >= new Date().getTime()) {
//    }
//}
//function startTimer() {
//    setInterval(displayNextImage, 8000);
//}
//function horseRide() {
//var check = $('.checkAge').length;
//    var age;
//    $('.checkAge').click(function () {
//        if (age < 7) {
//            $('#pony').css("display", "block");
//        } else if (age == 7 || age < 16) {
//            $('#medio').css("display", "block");
//        } else {
//            $('#grande').css("display", "block");
//        }
//    })
//}
//function horseRide() {
//    var check = $('.checkAge').length;
//    var age;
//    $('.checkAge').click(function () {
//        if (check == 0) {
//            $('#pony.showHorse').css("display", "block");
//        }
//        else if (check == 1) {
//            $('#medio.showHorse').css("display", "block");
//        }
//        else {
//            $('#grande.showHorse').css("display", "block");
//        }
//    }
//    )
//}
function horseRide() {
    var check = $('.checkAge').length;
    var age;
    $('.checkAge').click(function () {
        for (var i = 0; i < check; i++) {
            $('input.checkAge').eq(i).css('display', 'none');
            if (i == check) {
                $('#pony.showHorse').css("display", "block");
            }
            else if (i == check + 1) {
                $('#medio.showHorse').css("display", "block");
            }
            else {
                $('#grande.showHorse').css("display", "block");
            }
        }
    });
}
//# sourceMappingURL=app.js.map