/// <reference path="typings/globals/jquery/index.d.ts" />
$(function(){
    $(".bar span").on("click",function(){
        $(".links").toggleClass("show");
    });
    $(".links a").on("click",function(a){
        let link = $(this).data("set");
        a.preventDefault();
        if (link === "#home"){
            $("html").animate({
                scrollTop: 0
            },500);
        } else{
            $("html").animate({
                scrollTop: $(link).offset().top - $(".center").innerHeight()/2
            },500);
            $(".links").removeClass("show");
        }
    });
    $(".product").on("click","span",function(){
        $(this).addClass("active").siblings("span").removeClass("active");
        $(".product p").hide();
        $("#" + $(this).data("set")).fadeIn();
    });
});