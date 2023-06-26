$(document).ready(function () {



//----------------------------------------------------------------
// Toggle Navbar
$(".navbar-actions .sidemenu-trigger").on("click", function () {
    $(".nav").toggleClass("nav-hiddin");
    $(".big-nav").toggleClass("big-nav-hiddin");
    $(".notification-container").removeClass("noti-open");
    $(".setting-container").removeClass("noti-open");
    $(".bag-container").removeClass("noti-open");
});
//----------------------------------------------------------------


//----------------------------------------------------------------
// Toggle Notification
$(".noti").on("click", function () {
    $(".notification-container").toggleClass("noti-open");
    $(".setting-container").removeClass("noti-open");
    $(".bag-container").removeClass("noti-open");
    if ($(window).innerWidth() <= 575.98) {
        $(".big-nav").addClass("big-nav-hiddin");
    }
});
//----------------------------------------------------------------

//----------------------------------------------------------------
// Toggle Bag
$(".bag").on("click", function () {
    $(".bag-container").toggleClass("noti-open");
    $(".setting-container").removeClass("noti-open");
    $(".notification-container").removeClass("noti-open");
    if ($(window).innerWidth() <= 575.98) {
        $(".big-nav").addClass("big-nav-hiddin");
    }
});
//----------------------------------------------------------------

// Toggle Setting
$(".setti").on("click", function () {
    $(".setting-container").toggleClass("noti-open");
    $(".notification-container").removeClass("noti-open");
    $(".bag-container").removeClass("noti-open");
    if ($(window).innerWidth() <= 575.98) {
        $(".big-nav").addClass("big-nav-hiddin");
    }
});
//----------------------------------------------------------------


//----------------------------------------------------------------
// Close Notification By Clicking Anywhere
// $(document).on('click', function(e) {
//     $(".notification-container").removeClass("noti-open");
// });
//----------------------------------------------------------------


//----------------------------------------------------------------
// Active Icons 
$(".action-list ul li").on("click", function () {
    $(this).children().children().find(".st").toggleClass("st-active");
});
//----------------------------------------------------------------


//----------------------------------------------------------------
// Read Notification 
$(".notification-content a").on("click", function () {
    $(this).addClass("noti-read");
});

$(".dropdown-box-header-actions").on("click", function () {
    $(".notification-content a").addClass("noti-read");
});
//----------------------------------------------------------------

//----------------------------------------------------------------
// Loading Page

$(window).on("load", function () {

    $(".loading").fadeOut(1000);

});

$(".toggle-dark").on("click", function () {
    $("body").toggleClass("dark");
});

//----------------------------------------------------------------

});

// Toggle Full Screen 
function toggleFullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}















