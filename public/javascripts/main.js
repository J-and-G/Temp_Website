/** 
 * ===================================================================
 * Main js
 *
 * ------------------------------------------------------------------- 
 */ 

(function($) {

	"use strict";

// 	/* --------------------------------------------------- */
// 	/* Preloader
// 	------------------------------------------------------ */ 
//    $(window).load(function() {
//       // will first fade out the loading animation 
//     	$("#loader").fadeOut("slow", function(){

//         // will fade out the whole DIV that covers the website.
//         $("#preloader").delay(300).fadeOut("slow");

//       }); 
//   	})
	var counter = 0;
	var c = 0;
    var perfData = window.performance.timing // The PerformanceTiming interface
    var estimatedTime = -(perfData.loadEventEnd - perfData.navigationStart) // Calculated Estimated Time of Page Load which returns negative value.
	var time = parseInt((estimatedTime/1000)%60)*100; //Converting EstimatedTime from miliseconds to seconds.
    var i = setInterval(function(){
		$(".loading-page .counter h1").html(counter + "%");
		$(".loading-page .counter hr").css("visibility", "visible");
        $(".loading-page .counter hr").css("width", counter+ "%");
        //$(".loading-page .counter").css("background", "linear-gradient(to right, #f60d54 "+ c + "%,#0d0d0d "+ c + "%)");
  
      /*
      $(".loading-page .counter h1.color").css("width", c + "%");
      */
      counter++;
      if(counter > 100) {
		  counter=0;
		  clearInterval(i);
		  $('.loading-page').fadeOut("slow",()=>{
			$("#home").css('display','block').hide().fadeIn(3000);
			// $("#logo").removeClass('visibility-hidden');
		  })
		 
      }
    }, estimatedTime/100);




  	/*---------------------------------------------------- */
	/* FitVids
	------------------------------------------------------ */ 
  	$(".fluid-video-wrapper").fitVids();


	/* --------------------------------------------------- */
	/*  Vegas Slideshow
	------------------------------------------------------ */
	$(".home-slides").vegas({
		transition: 'fade',
		transitionDuration: 2500,
		delay: 5000,
    	slides: [
       	{ src: "images/slides/03.jpg" },
        	{ src: "images/slides/02.jpg" },
        	{ src: "images/slides/01.jpg" }
    	]
	});


	/* --------------------------------------------------- */
	/*  Particle JS
	------------------------------------------------------ */
	$('.home-particles').particleground({
	   dotColor: '#fff',
	   lineColor: '#555555',
	   particleRadius: 6,
	   curveLines: true,
	   density: 10000,
	   proximity: 110
	}); 


	
	/*----------------------------------------------------*/
  	/* Smooth Scrolling
  	------------------------------------------------------*/
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


  	/* --------------------------------------------------- */
	/*  Placeholder Plugin Settings
	------------------------------------------------------ */
	$('input, textarea, select').placeholder()  


  	/*---------------------------------------------------- */
   /* ajaxchimp
	------------------------------------------------------ */

	// Example MailChimp url: http://xxx.xxx.list-manage.com/subscribe/post?u=xxx&id=xxx
	var mailChimpURL = 'http://facebook.us8.list-manage.com/subscribe/post?u=cdb7b577e41181934ed6a6a44&amp;id=e65110b38d'

	$('#mc-form').ajaxChimp({

		language: 'es',
	   url: mailChimpURL

	});

	
	
 

})(jQuery);