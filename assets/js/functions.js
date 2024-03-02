// sticky header
/*$(window).scroll(function() {    
var scroll = $(window).scrollTop();
//>=, not <=
if (scroll >= 300) {
//clearHeader, not clearheader - caps H
$("header").addClass("stickyheader");
} else {
$("header").removeClass("stickyheader");  
}
});*/
// sticky header end

// wow start
new WOW().init();
// wow end

// sticky social
$(document).scroll(function () {
	"use strict";
    var y = $(this).scrollTop();
    if (y > 200) {
        $('.sticky-container').fadeIn();
    } else {
        $('.sticky-container').fadeOut();
    }

}); 
// sticky social end

$(document).ready(function() {
"use strict";

// Active Current Page
var str=location.href.toLowerCase();
$(".nav-area-full a").each(function() {
if (str.indexOf(this.href.toLowerCase()) > -1) {
$(".active").removeClass("active");
$(this).parent().addClass("active");
}
});	
// Active Current Page end

   //*****************************
    // Mobile Navigation
    //*****************************
    $('.mobile-nav-btn').click(function() {
        $('.mobile-nav-btn, .mobile-nav, .app-container').toggleClass('active');
    });   

    $('.firstlevel li a').click(function() {
        if($(this).hasClass('active')){
            $(this).removeClass('active');
            $(this).siblings('ul').slideUp();
        }else{
            $('.firstlevel li a').removeClass('active');
            $(this).addClass('active');
            $('.dropdown').slideUp();
            $(this).siblings('ul').slideDown();
        }
    });

    $('.mainnav > li > a').click(function() {
        if($(this).hasClass('active')){
            $(this).removeClass('active');
            $(this).parents('li').children('.firstlevel').slideUp();
        }else{
            $(this).addClass('active');
            $(this).parents('li').children('.firstlevel').slideDown();
            $(this).parents('li').siblings('li').children('a').removeClass('active');
            $(this).parents('li').siblings('li').children('.firstlevel').slideUp();
        }
    }); 
    
////// main slider
 $(".home-slider").slick({
    dots: true,
    arrows: true,
    infinite: !0,
    speed: 1000,
    slidesToShow: 1,
    autoplay: !0,
    autoplaySpeed: 4000,
    adaptiveHeight: !0,
    responsive: [
    {
      breakpoint: 767,
      settings: {
    dots: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
    });

// progress bar
 var time = 4;
 var $bar, $slick, isPause, tick, percentTime;
$slick = $('.home-slider'); 
$bar = $('.slider-progress .progress');   
$('.slider-wrapper').on({
mouseenter: function() { isPause = true; },
mouseleave: function() { isPause = false; }
});
 function startProgressbar() { resetProgressbar(); percentTime = 0; isPause = false; tick = setInterval(interval, 10); }
  function interval() {
    if(isPause === false) { percentTime += 1 / (time+0.1); $bar.css({ width: percentTime+"%" }); if(percentTime >= 100)
        { $slick.slick('slickNext'); startProgressbar(); }
    }
  }
function resetProgressbar() { $bar.css({ width: 0+'%' }); clearTimeout(tick); }
startProgressbar();  
////// main slider end

  ////// mob slider
    $(".sliderxs").slick({
        arrows: false,
        dots: true,
        autoplay: true,
		adaptiveHeight: true,
        responsive: [
            {
              breakpoint: 10000,
              settings: "unslick"
            },
            {
              breakpoint: 767,
              settings: {
                unslick: true
              }
            }
        ]
    });
////// mob slider end

////// testimonial slider
$(".testimonials-slider-main").slick({
  dots: true,
  arrows: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 2000,
  //fade: true,
  //cssEase: 'linear',    
    });  
////// testimonial slider end


$('.thumb-slider').slick({
centerMode: true,
centerPadding: '0px',
arrows: true,
slidesToShow: 3,
slidesToScroll: 1,
responsive: [
{
breakpoint: 768,
settings: {
arrows: false,
dots:false,
centerMode: true,
centerPadding: '10px',
slidesToShow: 3
}
},
{
breakpoint: 767,
settings: {
arrows: false,
dots:false,
centerMode: false,
centerPadding: '10px',
slidesToShow: 1
}
},
{
breakpoint: 480,
settings: {
arrows: false,
dots:false,
centerMode: true,
centerPadding: '10px',
slidesToShow: 1
}
}
]
});

///// gallery simple
$('.slider-for').slick({
dots: true,
arrows:false,
infinite: true,
speed: 500,
slide: 'li',
fade: false,
cssEase: 'linear',
centerMode: true,
slidesToShow: 1,
variableWidth: true,
autoplay: true,
autoplaySpeed: 4000,
responsive: [{
	breakpoint: 800,
	settings: {
		arrows: false,
		centerMode: false,
		centerPadding: '40px',
		variableWidth: false,
		slidesToShow: 1,
		dots: true
	},
	breakpoint: 1200,
	settings: {
		arrows: false,
		centerMode: false,
		centerPadding: '40px',
		variableWidth: false,
		slidesToShow: 1,
		dots: true
	}
}],
customPaging: function (slider, i) {
	return '<button class="tab">' + $('.thumbsmain li:nth-child(' + (i + 1) + ')').html() + '</button>';
}
});
///// gallery simple end

////// gallery slider
$(".gallery-slider-main").slick({
  dots: false,
  arrows: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 1000,
  autoplay: true,
  autoplaySpeed: 2000,
  fade: true,
  cssEase: 'linear',    
   asNavFor: '.gallery-nav-main'
    });  
$('.gallery-nav-main').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  //vertical:true,
  asNavFor: '.gallery-slider-main',
  dots: true,
  //centerMode: true,
  focusOnSelect: true
});	
////// gallery slider end



////// thumb gallery slider
$(".bid-slider-gallery").slick({
  dots: false,
  arrows: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 800,
  autoplay: true,
  autoplaySpeed: 3000,
  //fade: true,
  //cssEase: 'linear',    
   asNavFor: '.bid-gallery-nav'
    });  
$('.bid-gallery-nav').slick({
  dots: false,
  arrows: false,  
  slidesToShow: 5,
  slidesToScroll: 5,
  speed: 800,
  autoplay: true,
  autoplaySpeed: 3000,
  vertical:true,
  focusOnSelect: true,
  //centerMode: true,
  asNavFor: '.bid-slider-gallery',
  responsive: [
{
breakpoint: 767,
settings: {
 vertical:false,
}
}
]
}); 
////// thumb gallery slider end



$('.slider-images').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  dots : true,
  arrows : false,
});

});

////// tabs generic (nav and tabs in main div)
$('.tab-custom .tab-custom-nav a').click(function(event) {
  $(this).closest('li').siblings('li').children('a').removeClass('current');
  $(this).addClass('current');
  $(this).closest('.tab-custom').children('div.tab-content-panel:not(:hidden)').hide();
  $(this.hash).show();
  event.preventDefault();
  $('.sliderxs').slick('setPosition');
});
////// tabs generic end

////// tabs custom (place nav and tabs anywhere separately)
$('.tabs-custom-nav a').click(function(event) {
  $(this).closest('li').siblings('li').children('a').removeClass('current');
  $(this).addClass('current');
  $(this.hash).closest('.general').children('div.tab-content-panel:not(:hidden)').hide();
  $(this.hash).show();
  event.preventDefault();
  $('.sliderxs').slick('setPosition');
});
////// tabs custom end


$('.product-slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows : true,
});



$('a[href="#search"]').click(function() {
  event.preventDefault()
  $("#search-box").addClass("-open");
  setTimeout(function() {
    inputSearch.focus();
  }, 800);
});

$('a[href="#close"]').click(function() {
  event.preventDefault()
  $("#search-box").removeClass("-open");
});

$(document).keyup(function(e) {
  if (e.keyCode == 27) { // escape key maps to keycode `27`
    $("#search-box").removeClass("-open");
  }
});












