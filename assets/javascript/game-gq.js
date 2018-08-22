$(document).ready (function(){
    $("#in-visible").on("click", function(){
        $(".captain-planet").animate({"opacity": "1"}, "slow");
    })

    $("#in-invisible").on("click", function(){
        $(".captain-planet").animate({"opacity": ".1"}, "slow");
    })
});

