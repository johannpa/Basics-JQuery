$(document).ready(function(){
    $("li").on({
        mouseenter: function(){
            $(this).css("background-color", "lightgray");
        },
        mouseleave: function(){
            $(this).css("background-color", "white");
        }
    });
    $("#option1").click(function(){
        $(this).css("backgroun-color", "green");
        $(this).mouseleave(function(){
            $(this).css("background-color", "green");
        });
    });
    $("#option2, #option3").click(function(){
        $(this).css("backgroun-color", "red");
        $(this).mouseleave(function(){
            $(this).css("background-color", "red");
        });
    });
});