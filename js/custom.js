$(function (){
    'use strict';

    
    $('body').css("marginTop", $('.navbar').innerHeight() - 1);

    //navbar Scroll 
    var navbar = $('.navbar');

    $(window).on('scroll', function(){
        if ($(window).scrollTop() >= navbar.height()){
            navbar.addClass('scrolled');
            //$('body').css("marginTop", $('.navbar').innerHeight());
        }else{
            navbar.removeClass('scrolled');
            //$('body').css("marginTop", 0);
        }
    })
    
    $('.navbar ul li a').on('click', function (){

        $(this).parent().addClass('active').siblings().removeClass('active');
    });

    //adjsut header height

    var myHeader = $('.header');

    myHeader.height($(window).height());

    $(window).resize(function () {

        myHeader.height($(window).height());

    });

    //Button Scroll To Top 
    var buttonScroll = $('.buttonScroll')
    $(window).on('scroll', function (){
        
        if ($(window).scrollTop() >= 900){
            
            if (buttonScroll.is(':hidden')) {

                buttonScroll.fadeIn(500)

            }
        }else{
            buttonScroll.fadeOut(500)
        }
    });
    
    //Click On Button 

    buttonScroll.on('click', function(){
        $('body, html').animate({
            scrollTop : 0
        }, 1000)
    })

})