(function($){
    $(function(){
        //scroll to sections
        $(".jq--scroll-our-pizza").click(function(){
           $("html, body").animate({scrollTop: $(".jq--our-pizza").offset().top}, 1000); 
        });
        
          $(".jq--scroll-about-us").click(function(){
           $("html, body").animate({scrollTop: $(".jq--about-us").offset().top}, 1000); 
        });
        
        $(".jq--scroll-reference").click(function(){
           $("html, body").animate({scrollTop: $(".jq--reference").offset().top}, 1000); 
        });
        
        $(".jq--scroll-photogalery").click(function(){
           $("html, body").animate({scrollTop: $(".jq--photogalery").offset().top}, 1000); 
        });
        
        $(".jq--scroll-contact").click(function(){
           $("html, body").animate({scrollTop: $(".jq--contact").offset().top}, 1000); 
        });
        
        //Scroll button
         $(".jq--scroll-button-first").click(function(){
           $("html, body").animate({scrollTop: $(".jq--our-pizza").offset().top}, 1000); 
        });
        
         $(".jq--scroll-button-second").click(function(){
           $("html, body").animate({scrollTop: $(".jq--reference").offset().top}, 1000); 
        });
        
        //Mobile Navigation
        
        $(".jq--nav-icon").click(function(){
            $(".nav-background").slideToggle();
            $(".mobile-nav-back").fadeToggle();
            $("nav ul").fadeToggle();
            
        });
        //Podminky change hamburger icon and close icon
        
        $(".jq--image-hamburger").click(function(){
            if($(".jq--image-hamburger").attr("src")=="img/hamburgerMenu.png"){
            $($(".jq--image-hamburger").attr("src","img/crossMenu.png"));
        }
        else{
            $($(".jq--image-hamburger").attr("src","img/hamburgerMenu.png"));
        } 
            
        })
        
       
    });
})(jQuery);