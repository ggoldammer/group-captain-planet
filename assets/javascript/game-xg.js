$(document).ready(function () {

    $("#cs-norm").click(function () {
        $(".captain-planet").animate({ width: "450px", height: "300px" })
    });

    $("#cs-grow").click(function() {
        $(".captain-planet").animate({width: "+=150px", height: "+=100px"})
    });

    $("#cs-shink").click(function() {
        $(".captain-planet").animate({width: "-=150px", height: "-=100px"})
    });
    
});