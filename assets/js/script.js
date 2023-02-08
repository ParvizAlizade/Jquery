$(document).ready(function () {
    $(".btn1").click(function () {
        $("#AzeSpan").slideToggle();
        $("#TurSpan").slideUp();
        $("#ItalySpan").slideUp();
        $(".btn1 i").toggleClass("active");
    })
    $(".btn2").click(function () {
        $("#TurSpan").slideToggle();
        $("#ItalySpan").slideUp();
        $("#AzeSpan").slideUp();
        $(".btn2 i").toggleClass("active");
    })
    $(".btn3").click(function () {
        $("#ItalySpan").slideToggle();
        $("#AzeSpan").slideUp();
        $("#TurSpan").slideUp();
        $(".btn3 i").toggleClass("active");
    })
})