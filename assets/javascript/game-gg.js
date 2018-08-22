$(document).ready(function(){
    $('#st-normal').on('click', function(){
        $('.captain-planet').animate({'width': '450px', 'height':'300px'}, 'normal' );
    });
    
    $('#st-stretch').on('click', function(){
        $('.captain-planet').animate({'width': '+=100px', 'height': '+=500px'}, 'normal');
    });
    
});

