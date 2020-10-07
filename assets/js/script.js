(function ($) {
    'use strict'

    // Smooth scrolling using jQuery easing
    $('#mainNav li a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
            $('html, body').animate({
                scrollTop: (target.offset().top - 50)
            }, 1000, "easeInOutExpo");
            return false;
            }
        }
    }); 

    // Closes responsive menu when a scroll trigger link is clicked
    $('#mainNav li a').click(function() {
        $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainNav',
        offset: 56
    });

    $(window).on('scroll', function() {
        var wScroll = $(this).scrollTop();
        if (wScroll > 1) {
            $('#mainNav').addClass('top-nav-fixed');
        } else {
            $('#mainNav').removeClass('top-nav-fixed');
        };
    });
   
    /*
    ========================================
    Preloader
    ========================================
    */
    if ($('#preloader').length) {
        $(window).on('load', function () {
            $('#preloader').delay(350).fadeOut('slow');
            $('body').delay(350).css({
                'overflow': 'visible'
            });
        });
    }

    /*
    ========================================
    circular progress
    ========================================
    */ 
    $('.circlechart').circlechart(); // Initialization
 
 
    /*
    ========================================
    Portfolio
    ========================================
    */
    if ($('#portfolio-area').length) {
        $('#container').imagesLoaded(function () {
            var $grid = $('.portfolio-grid').isotope({
                itemSelector: '.portfolio-grid-item',
                percentPosition: true,
                layoutMode: 'masonry',
                masonry: {
                    // use outer width of grid-sizer for columnWidth
                    columnWidth: 1,
                }
            });

            // filter items on li click
            $('.portfolio-filter').on('click', 'li', function () {
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({ filter: filterValue });
            });

            //for menu active class
            $('.portfolio-filter li').on('click', function (event) {
                $(this).siblings('.active').removeClass('active');
                $(this).addClass('active');
                event.preventDefault();
            });
        });
    }
      
  
 
    /*
    ========================================
    Creative Experts
    ========================================
    */
    if ($('.creative-experts-slider').length) {
        $('.creative-experts-slider').owlCarousel({
            loop: true,
            dots: true,
            nav:false,
            margin: 30,
            dotsEach: true,
            autoplay: false,
            autoplayTimeout: 7500,
            smartSpeed: 1000,
            nav: false,  
            responsiveClass:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:3
                }
            }
        });
    }

    /*
    ========================================
    Counter
    ========================================
    */
    if ($('counter')) {
        $('.counter').countUp({
            'time': 3000,
            'delay': 10
        });
    }

     /*
    ========================================
    Counter
    ========================================
    */
   
    if ($('.testimonials-slider')) {
        $(document).ready(function () {
            var testimonialsImgs = new Swiper('.testimonials-images', {
                spaceBetween: -40,
                centeredSlides: true,
                slidesPerView: 'auto', 
                slideToClickedSlide: true,
                loop: true,
                loopedSlides: 4,
                grabCursor: true,
                effect: 'coverflow',
                coverflowEffect: {
                    rotate:25,
                    stretch: 0,
                    depth: 160,
                    modifier:1.5,
                    slideShadows: true,
                },  
                
                /* navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }, */
                
            });
            var testimonialsTest = new Swiper('.testimonials-content', {
                spaceBetween: 10, 
                loop: true,
                loopedSlides: 4,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                autoplay: {
                    delay: 4000,
                    disableOnInteraction: false,
                },
                
            });
            testimonialsImgs.controller.control = testimonialsTest;
            testimonialsTest.controller.control = testimonialsImgs;
            
            /* var imgs = $('.slider img');
            imgs.each(function(){
            var item = $(this).closest('.item');
            item.css({
                'background-image': 'url(' + $(this).attr('src') + ')', 
                'background-position': 'center',            
                '-webkit-background-size': 'cover',
                'background-size': 'cover', 
                'background': 'onsen',
            });
            $(this).hide();
            }); */
        });
    }
    
    

    /*
    ========================================
    hoverDir
    ========================================
    */
    if ($('.hovs-item').length) { 
        $(' .hovs-item ').each( function() { $(this).hoverdir(); } );
    }
    

    /*
    ========================================
    Skill Bar
    ========================================
    */
    if ($('#skill-bar-wrapper').length) {
        $(window).scroll(function () {
            var hT = $('#skill-bar-wrapper').offset().top,
                hH = $('#skill-bar-wrapper').outerHeight(),
                wH = $(window).height(),
                wS = $(this).scrollTop();
            if (wS > (hT + hH - 1.4 * wH)) {
                jQuery(document).ready(function () {
                    jQuery('.skillbar-container').each(function () {
                        jQuery(this).find('.skills').animate({
                            width: jQuery(this).attr('data-percent')
                        }, 3000); // 3 seconds
                    });
                });
            }
        });
    }


    /*
    ========================================
    accordion
    ========================================
    */
    if ($('.accordion').length) {
        // (Optional) Active an item if it has the class "is-active"	
        $(".accordion > .accordion-item.is-active").children(".accordion-panel").slideDown();
        
        $(".accordion > .accordion-item").click(function() {
            // Cancel the siblings
            $(this).siblings(".accordion-item").removeClass("is-active").children(".accordion-panel").slideUp();
            // Toggle the item
            $(this).toggleClass("is-active").children(".accordion-panel").slideToggle("ease-out");
        });
    }
      
    

    /*
    ========================================
    Creative Experts
    ========================================
    */
    if ($('.feedback-slider').length) {
        $('.feedback-slider').owlCarousel({
            loop: true,
            dots: true,
            nav:false,
            margin: 30,
            dotsEach: true,
            autoplay: true,
            autoplayTimeout: 7000,
            smartSpeed: 1000,
            nav: false,  
            responsiveClass:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:3
                }
            }
        });
    }
 
    /*
    ========================================
    video popup
    ========================================
    */
    $('#video-gallery').lightGallery(); 
    

    /*
    ========================================
    Wow Animated
    ========================================
    */
    var wow = new WOW(
        {
            boxClass:     'wow',      // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset:       1,          // distance to the element when triggering the animation (default is 0)
            mobile:       false,       // trigger animations on mobile devices (default is true)
            live:         true,       // act on asynchronously loaded content (default is true)
            callback:     function(box) {
            // the callback is fired every time an animation is started
            // the argument that is passed in is the DOM node being animated
            },
            scrollContainer: null,    // optional scroll container selector, otherwise use window,
            resetAnimation: true,     // reset animation on end (default is true)
        }
    );
    wow.init();

    /*
    ========================================
    Scroll to top
    ========================================
    */
    if ($('#scroll-top').length) {
        function scrollToTop() {
            var $scrollUp = $('#scroll-top'),
                $lastScrollTop = 0,
                $window = $(window);

            $window.on('scroll', function () {
                var st = $(this).scrollTop();
                if (st > $lastScrollTop) {
                    $scrollUp.removeClass('show');
                } else {
                    if ($window.scrollTop() > 200) {
                        $scrollUp.addClass('show');
                    } else {
                        $scrollUp.removeClass('show');
                    }
                }
                $lastScrollTop = st;
            });

            $scrollUp.on('click', function (evt) {
                $('html, body').animate({ scrollTop: 0 }, 600);
                evt.preventDefault();
            });
        }
        scrollToTop();
    }

    

    /*
    ========================================
    Google Map All
    ========================================
    */
    if ($('#black-map').length) {
        // When the window has finished loading create our google map below
        google.maps.event.addDomListener(window, 'load', init);
        
        function init() {
            // Basic options for a simple Google Map
            // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
            var mapOptions = {
                // How zoomed in you want the map to start at (always required)
                zoom: 11,

                // The latitude and longitude to center the map (always required)
                center: new google.maps.LatLng(40.6700, -73.9400), // New York

                // How you would like to style the map. 
                // This is where you would paste any style found on Snazzy Maps.
                styles: [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#29446b"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#29446b"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#29446b"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#29446b"},{"lightness":17},{"weight":1.2}]},{"featureType":"administrative","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"administrative.country","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"administrative.country","elementType":"geometry","stylers":[{"visibility":"simplified"}]},{"featureType":"administrative.country","elementType":"labels.text","stylers":[{"visibility":"simplified"}]},{"featureType":"administrative.province","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"administrative.locality","elementType":"all","stylers":[{"visibility":"simplified"},{"saturation":"-100"},{"lightness":"30"}]},{"featureType":"administrative.neighborhood","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"administrative.land_parcel","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"all","stylers":[{"visibility":"simplified"},{"gamma":"0.00"},{"lightness":"74"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#29446b"},{"lightness":20}]},{"featureType":"landscape.man_made","elementType":"all","stylers":[{"lightness":"3"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#29446b"},{"lightness":21}]},{"featureType":"road","elementType":"geometry","stylers":[{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#29446b"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#29446b"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#29446b"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#29446b"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#29446b"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#192331"},{"lightness":17}]}]
            };

            // Get the HTML DOM element that will contain your map 
            // We are using a div with id="map" seen below in the <body>
            var mapElement = document.getElementById('black-map');

            // Create the Google Map using our element and options defined above
            var map = new google.maps.Map(mapElement, mapOptions);

            // Let's also add a marker while we're at it
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(40.6700, -73.9400),
                map: map,
                title: 'Snazzy!'
            });
        }
    }

    
 

     


})(jQuery);

 