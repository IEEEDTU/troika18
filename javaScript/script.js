//Preloader
    $(window).on('load', function() {
        // Animate loader off screen
        $(".se-pre-con").fadeOut("slow");;
    });


//Navbar Javascript
      $(function() {
          $('a.page-scroll').bind('click', function(event) {
              var $anchor = $(this);
              $('html, body').stop().animate({
                  scrollTop: $($anchor.attr('href')).offset().top
              }, 1500, 'easeInOutExpo');
              event.preventDefault();
          });
      });
      // Highlight the top nav as scrolling occurs
    //   $('body').scrollspy({
    //       target: '.navbar-fixed-top'
    //   })
      // Closes the Responsive Menu on Menu Item Click
      $('.navbar-collapse ul li a').click(function() {
          $('.navbar-toggle:visible').click();
      });


    function checkScroll(){
        var startY = $('.navbar').height() * 2; //The point where the navbar changes in px
    
        if($(window).scrollTop() > startY){
            $('.navbar').addClass("scrolled");
        }else{
            $('.navbar').removeClass("scrolled");
        }
    }
    
    if($('.navbar').length > 0){
        $(window).on("scroll load resize", function(){
            checkScroll();
        });
    }


//Login/Register button javascript
    $(document).ready(function() {
        $('.beta-home-button').bind("mouseover", function(){
            var color  = $(this).css("background-color");
            $(this).css("background", "#45A29E");
            $(this).css("border-color", "#45A29E");
            $(this).bind("mouseout", function(){
                $(this).css("background", color);
                $(this).css("border-color", color);
            })    
        })    
    })
    