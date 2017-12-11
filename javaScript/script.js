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
      $('body').scrollspy({
          target: '.navbar-fixed-top'
      })
      // Closes the Responsive Menu on Menu Item Click
      $('.navbar-collapse ul li a').click(function() {
          $('.navbar-toggle:visible').click();
      });

//Login/Register button javascript
    $(document).ready(function() {
        $('.beta-home-button').bind("mouseover", function(){
            var color  = $(this).css("background-color");
            $(this).css("background", "#c19a6b");
            $(this).css("border-color", "#c19a6b");
            $(this).bind("mouseout", function(){
                $(this).css("background", color);
                $(this).css("border-color", "black");
            })    
        })    
    })