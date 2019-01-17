$(function (){
   $('.nav_bar_item').mouseover(function (){
      $('.nav_bar_item > div > .sub_menu:visible').hide();
      $('.nav_bar_item .sub_menu_drop_down:visible').hide();
      if($(window).width() >= 900)
        $(this).find('.sub_menu_drop_down').show();
      $(this).find('> div > .sub_menu').show();
      
   });
   
   $('.sub_menu_item').mouseover(function (){
      $('.sub_menu_item > div > .sub_menu:visible').hide();
      $(this).find('> div > .sub_menu').show(); 
   });
   
   $('body').children().not('header').mouseover(function (){
      $('.sub_menu:visible').hide(); 
   });
   
   isNavBarHidden = true;
   $('.menu_icon').click(function (){
       if(isNavBarHidden){
           isNavBarHidden = false;
           $('.nav_bar').fadeIn("slow");
       }
        else{
            isNavBarHidden = true;
           $('.nav_bar').fadeOut("slow");
        }
   });
});