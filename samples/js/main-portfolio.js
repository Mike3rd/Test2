/*-----------------------------------------------------------------------------------
/*
/* Main PUREMEDIA JS with some calvin
/*
-----------------------------------------------------------------------------------*/  

(function($) {
	


    "use strict";
    
    const cfg = {
                scrollDuration : 800, // smoothscroll duration
                mailChimpURL   : ''   // mailchimp url
                };

    // Add the User Agent to the <html>
    // will be used for IE10/IE11 detection (Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0; rv:11.0))
    // const doc = document.documentElement;
    // doc.setAttribute('data-useragent', navigator.userAgent);
	
	
   /* CALVIN Preloader
    * --------------------------------------------------*/
    const ssPreloader = function() {

        const preloader = document.querySelector('#preloader');
        if (!preloader) return;

        document.querySelector('html').classList.add('ss-preload');
        
        window.addEventListener('load', function() {
            
            document.querySelector('html').classList.remove('ss-preload');
            document.querySelector('html').classList.add('ss-loaded');

            preloader.addEventListener('transitionend', function(e) {
                if (e.target.matches("#preloader")) {
                    this.style.display = 'none';
                }
            });
        });

       //force page scroll position to top at page refresh
       window.addEventListener('beforeunload' , function () {
       window.scrollTo(0, 0);
       });

    };  
	



	/*----------------------------------------------------*/
	/* Adjust Primary Navigation Background Opacity
	------------------------------------------------------*/
   $(window).on('scroll', function() {

		var h = $('header').height();
		var y = $(window).scrollTop();
      var header = $('#main-header');

	   if ((y > h + 30 ) && ($(window).outerWidth() > 768 ) ) {
	      header.addClass('opaque');
	   }
      else {
         if (y < h + 30) {
            header.removeClass('opaque');
         }
         else {
            header.addClass('opaque');
         }
      }

	});

		/*----------------------------------------------------*/
	/* Adjust Secondary Navigation Background Opacity
	------------------------------------------------------*/
   $(window).on('scroll', function() {

		var h = $('#header-second-wrap').height();
		var y = $(window).scrollTop();
      var header = $('#test');

	   if ((y > h + 30 ) && ($(window).outerWidth() > 768 ) ) {
	      header.addClass('opaque');
	   }
      else {
         if (y < h + 30) {
            header.removeClass('opaque');
         }
         else {
            header.addClass('opaque');
         }
      }

	});
	


   /*-----------------------------------------------------*/
  	/* Mobile Menu
   ------------------------------------------------------ */  
   var menu_icon = $("<span class='menu-icon'></span>");
  	var toggle_button = $("<a>", {                         
                        id: "toggle-btn", 
                        html : "<span class='menu-text'>Menu</span>",
                        title: "Menu",
                        href : "#" } 
                        );
  	var nav_wrap = $('nav#nav-wrap')
  	var nav = $("ul#nav");  
   
   /* if JS is enabled, remove the two a.mobile-btns 
  	and dynamically prepend a.toggle-btn to #nav-wrap */
  	nav_wrap.find('a.mobile-btn').remove(); 
  	toggle_button.append(menu_icon); 
   nav_wrap.prepend(toggle_button); 

  	toggle_button.on("click", function(e) {
   	e.preventDefault();
    	nav.slideToggle("fast");     
  	});

  	if (toggle_button.is(':visible')) nav.addClass('mobile');
  	$(window).resize(function() {
   	if (toggle_button.is(':visible')) nav.addClass('mobile');
    	else nav.removeClass('mobile');
  	});

  	$('ul#nav li a').on("click", function() {      
   	if (nav.hasClass('mobile')) nav.fadeOut('fast');      
  	});


  	/*----------------------------------------------------*/
  	/* Smooth Scrolling
  	------------------------------------------------------ */
  	$('.smoothscroll').on('click', function (e) {
	 	
	 	e.preventDefault();

   	var target = this.hash,
    	$target = $(target);

    	$('html, body').stop().animate({
       	'scrollTop': $target.offset().top
      }, 800, 'swing', function () {
      	window.location.hash = target;
      });

  	});


  	/*----------------------------------------------------*/
  	/* Highlight the current section in the navigation bar
  	------------------------------------------------------*/
	var sections = $("section"),
	navigation_links = $("#nav-wrap a");

	if($("body").hasClass('homepage')) {

		sections.waypoint( {

	      handler: function(event, direction) {

			   var active_section;

				active_section = $(this);
				if (direction === "up") active_section = active_section.prev();

				var active_link = $('#nav-wrap a[href="#' + active_section.attr("id") + '"]');

	         navigation_links.parent().removeClass("current");
				active_link.parent().addClass("current");

			},
			offset: '25%'
		});

	}


	/*-----------------------------------------------------*/
  	/* PURE MEDIA Back to top - CONTACT NOW
   ------------------------------------------------------ */ 
	var pxShow = 300; // height on which the button will show
	var pxHide = 5000; // height on which the button will hide- MT ADDITION
	var fadeInTime = 400; // how slow/fast you want the button to show
	var fadeOutTime = 400; // how slow/fast you want the button to hide
	var scrollSpeed = 300; // how slow/fast you want the button to scroll to top. can be a value, 'slow', 'normal' or 'fast'

   // Show or hide the sticky footer button
	jQuery(window).scroll(function() {

		if (jQuery(window).scrollTop() >= pxShow && jQuery(window).scrollTop() <= pxHide) {
			jQuery("#go-top").fadeIn(fadeInTime);
			
		} else {
			jQuery("#go-top").fadeOut(fadeOutTime);
		}

	}); 
	
	
	/* CALVIN Animate on Scroll
    * ------------------------------------------------------ */
    const ssAOS = function() {
        
        AOS.init( {
            offset: 100,
            duration: 800,
            easing: 'ease-in-out',
            delay: 400,
            once: true,
            disable: 'mobile'
        });

    }; // end ssAOS

	
	
	   /* CALVIN Back to Top
    * ------------------------------------------------------ */
    const ssBackToTop = function() {

        const pxShow = 900;
        const goTopButton = document.querySelector(".ss-go-top");

        if (!goTopButton) return;

        // Show or hide the button
        if (window.scrollY >= pxShow) goTopButton.classList.add("link-is-visible");

        window.addEventListener('scroll', function() {
            if (window.scrollY >= pxShow) {
                if(!goTopButton.classList.contains('link-is-visible')) goTopButton.classList.add("link-is-visible")
            } else {
                goTopButton.classList.remove("link-is-visible")
            }
        });

    }; // end ssBackToTop
	

  
   /* FLARE photoswipe
    * ----------------------------------------------------- */
    const ssPhotoswipe = function() {
        const items = [],
              $pswp = $('.pswp')[0],
              $folioItems = $('.folio-item');

        // get items
        $folioItems.each( function(i) {

            let $folio = $(this),
                $thumbLink =  $folio.find('.folio-item__thumb-link'),
                $title = $folio.find('.folio-item__title'),
                $caption = $folio.find('.folio-item__caption'),
                $titleText = '<h4>' + $.trim($title.html()) + '</h4>',
                $captionText = $.trim($caption.html()),
                $href = $thumbLink.attr('href'),
                $size = $thumbLink.data('size').split('x'),
                $width  = $size[0],
                $height = $size[1];
        
            let item = {
                src  : $href,
                w    : $width,
                h    : $height
            }

            if ($caption.length > 0) {
                item.title = $.trim($titleText + $captionText);
            }

            items.push(item);
        });

        // bind click event
        $folioItems.each(function(i) {

            $(this).find('.folio-item__thumb-link').on('click', function(e) {
                e.preventDefault();
                let options = {
                    index: i,
                    showHideOpacity: true
                }

                // initialize PhotoSwipe
                let lightBox = new PhotoSwipe($pswp, PhotoSwipeUI_Default, items, options);
                lightBox.init();
            });

        });
    };
  
   /* pretty print
    * -------------------------------------------------- */
    const ssPrettyPrint = function() {
        $('pre').addClass('prettyprint');
        $( document ).ready(function() {
            prettyPrint();
        });
    };


   /* initialize
    * ------------------------------------------------------ */
    (function ssInit() {

    ssAOS();
	ssBackToTop();
	ssPreloader ();
 
      ssPrettyPrint();
       ssPhotoswipe();
	
	
	})();
	
	
	
	

})(jQuery);