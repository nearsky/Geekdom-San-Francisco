$(document).ready(function(){

  /* Hide login for now
	$('#login-screen').hide();
	$('#login').click(function(){
		$('#login-screen').toggle();
	});
	*/
	
	$('#location-screen').hide();
	$('#location-selector').click(function(){
  	$('#location-screen').toggle();
	});

  var windowWidth3 = $(window).width() / 3;
	$('.kwicks').kwicks({
	  size: windowWidth3,
	  maxSize: windowWidth3 + (windowWidth3 / 2),
  	spacing: 0,
  	behavior: 'menu'
	});
	
	$(window).resize(function(){
    var windowWidth3 = $(window).width() / 3;
    $('.kwicks').kwicks({
      size: windowWidth3,
      maxSize: windowWidth3 + (windowWidth3 / 2),
    	spacing: 0,
    	behavior: 'menu'
    });	
	});
	
	$('#chooser .option').click(function() {
		var id = this.id;			
		if (id === 'sa') {
  		window.location = "/san-antonio";
		} else if (id === 'sf') {
  	  window.location = "/san-francisco";
		} else if (id === 'gdx') {
  	  window.location = "/geekdomX";
    }
  });

	/* Homepage Vertical Scroller */
	$('#home-nav ul li a.hscroll').click(function(){
		var scrollElem = scrollableElement('html', 'body');
		var $target = $(this.hash),
			target	= this.hash;

		if ( target ) {
			var targetOffset = $target.offset().top - 75;
			$(scrollElem).animate({scrollTop: targetOffset}, 500, function(){
				location.hash = target - 75;
			});
		}

		return false;
	});
	function scrollableElement(els) {
		for ( var i = 0, argLength = arguments.length; i < argLength; i++ ) {
			var el = arguments[i],
				$scrollElement = $(el);

			if ( $scrollElement.scrollTop() > 0 ) {
				return el;
			} else {
				$scrollElement.scrollTop(1);
				var isScrollable = $scrollElement.scrollTop() > 0;
				$scrollElement.scrollTop(0);
				if ( isScrollable ) {
					return el;
				}
			}
		}
		return [];
	}

//	/* MISSION - PILLARS */
//	$('#pillars > .pillar > .pillar-description').hide();
//	$('#pillars .pillar').hover(function(){
//		$(this).find('.pillar-description').toggle();
//		$(this).toggleClass('hovered');
//	});

	/* SLIDERS */
	$('#slider-home').bxSlider({
  	minSlides: 1,
  	maxSlides: 3,
  	slideWidth: 750,
  	slideMargin: 0,
  	pager: false,
  	auto: true,
  	pause: 7000,
  	randomStart: true
	});
	
	$('#slider-contact').bxSlider({
  	minSlides: 1,
  	maxSlides: 3,
  	slideWidth: 750,
  	slideMargin: 0,
  	pager: false,
  	auto: true,
  	pause: 7000
	});
	
	$('#slider-tour').bxSlider({
  	minSlides: 1,
  	maxSlides: 3,
  	slideWidth: 750,
  	slideMargin: 0,
  	pager: false,
  	auto: true,
  	pause: 7000
	});
	
	$('#slider-programs').bxSlider({
  	minSlides: 1,
  	maxSlides: 3,
  	slideWidth: 700,
  	slideMargin: 0,
  	pager: false,
  	auto: true,
  	pause: 7000
	});
	
	/* GEEKDOM TEAM */
	$('#slider-team').bxSlider({
	  slideWidth: 960,
	  speed: 700,
  	mode: 'fade',
  	auto: true,
  	captions: true,
  	controls: false,
	});
	
	/* BX Slider Hide Direction Icons */
	$('.bx-wrapper .bx-controls-direction a').hide();
	$('.bx-wrapper').hover(function(){
  	$('.bx-wrapper .bx-controls-direction a').toggle();
	});
	
	/* Location Fancybox */
	$('.video-fancy').fancybox();
	
	/* Geek Profs */
	$('.geek-info').hide();
	$('.geek').bind('click', function(){
  	$(this).next().toggle();
	});
	$('.batch-close-btn').click(function(){
  	$('.geek-info').hide();
  	return false;
	});
	
	/* Mentor Profs */
	$('.mentor-info').hide();
	$('.mentor img').css({opacity: 0.85});
	$('.mentor').hover(function(){
  	$(this).find('.mentor-info').fadeIn(250);
  	$(this).find('img').fadeTo(250, 1);
	}, function(){
	  $(this).find('.mentor-info').fadeOut(100);
    $(this).find('img').fadeTo(250, 0.85);	
	});
		
		
  /* See More Geeks Btn */
  $('#see-more-geeks').click(function(){
    $.get('/global_embeds/members', function(data){
      $('#members-container').html(data);
    }).done(function(){
      $('.geek-info').hide();
      $('.geek').bind('click', function(){
        $(this).next().toggle();
      });
      $('.batch-close-btn').click(function(){
        $('.geek-info').hide();
        return false;
      });
    });
    
    return false;
  });
  
  /* Geek and Hovers */
  $('.geek img').css({opacity: 0.85, cursor: 'pointer'});
  $('.geek img').hover(
    function(){
      $(this).fadeTo(250, 1);
    }, function(){
      $(this).fadeTo(250, 0.85);
    }
  );
});