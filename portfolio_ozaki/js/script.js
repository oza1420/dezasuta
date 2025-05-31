// ====================
//波（左右）
// ====================
window.addEventListener("DOMContentLoaded", function () {
    document.addEventListener("scroll", function () {
        var e = window.scrollY,
            t = 0.2 * -e,
            n = 0.2 * -e,
            o = document.getElementById("wave--left"),
            d = document.getElementById("wave--right");
        o && (o.style.backgroundPosition = "right " + (t - 50) + "px"),
            d && (d.style.backgroundPosition = "left " + (n - 50) + "px");
    });
});

// ====================
//ハンバーガー
// ====================
$(function () {
    $(".hamburger").click(function () {
        $(".hamburger").toggleClass("open");
        $(".header_nav-sp").fadeToggle();
    });
});
