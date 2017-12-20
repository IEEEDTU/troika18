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
      $('body').scrollspy({
          target: '.navbar-fixed-top'
      })
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

    //google map api call

    // function initMap() {
    //     var uluru = {lat: 28.7501, lng: 77.1177};
    //     var map = new google.maps.Map(document.getElementById('map'), {
    //       zoom: 17,

    //       center: uluru
    //     });
    //     var marker = new google.maps.Marker({
    //       position: uluru,
    //       map: map
    //     });
    //   }

    function initMap() {
        // Styles a map in night mode.
	var uluru = {lat: 28.7501, lng: 77.1177}
        var map = new google.maps.Map(document.getElementById('map'), {
          center: uluru,
          zoom: 17,
          styles: [
            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{color: '#263c3f'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{color: '#6b9a76'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#38414e'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{color: '#212a37'}]
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{color: '#9ca5b3'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{color: '#746855'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{color: '#1f2835'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{color: '#f3d19c'}]
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{color: '#2f3948'}]
            },
            {
              featureType: 'transit.station',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#17263c'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{color: '#515c6d'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{color: '#17263c'}]
            }
          ]
        });
	var marker = new google.maps.Marker({
           position: uluru,
           map: map
         });
      }