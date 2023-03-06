$( document ).ready(function() {
if ($(window).width() > 767) {
  // Our products page to exapnd section
jQuery('#open-product1').click(function(){
  jQuery('#main-meal-section .col-md-4').hide();
  jQuery('#main-meal-section #open1').show();
});
jQuery('#open-product2').click(function(){
  jQuery('#main-meal-section .col-md-4').hide();
  jQuery('#main-meal-section #open2').show();
});
jQuery('#open-product3').click(function(){
  jQuery('#main-meal-section .col-md-4').hide();
  jQuery('#main-meal-section #open3').show();
});
jQuery('.chicken').click(function(){
  jQuery('#main-meal-section #open3').hide();
  jQuery('#main-meal-section #open2').hide();
  jQuery('#main-meal-section #open1').show();
});
jQuery('.fish').click(function(){
  jQuery('#main-meal-section #open3').hide();
  jQuery('#main-meal-section #open2').show();
  jQuery('#main-meal-section #open1').hide();
});
jQuery('.beef').click(function(){
  jQuery('#main-meal-section #open3').show();
  jQuery('#main-meal-section #open2').hide();
  jQuery('#main-meal-section #open1').hide();
});
jQuery('.beef1').click(function(){
  jQuery('#treats-section .row:nth-child(2) .col-lg-4').hide();
  jQuery('#treats-section .open-beef1').show();
});
jQuery('.pb').click(function(){
  jQuery('#treats-section .row:nth-child(2) .col-lg-4').hide();
  jQuery('#treats-section .open-pb').show();
});
jQuery('.chickenwild').click(function(){
  jQuery('#treats-section .row:nth-child(2) .col-lg-4').hide();
  jQuery('#treats-section .open-chickenwild').show();
});
jQuery('.beef2').click(function(){
  jQuery('#treats-section .row:nth-child(4) .col-lg-4').hide();
  jQuery('#treats-section .open-beef2').show();
});
jQuery('.pb1').click(function(){
  jQuery('#treats-section .row:nth-child(4) .col-lg-4').hide();
  jQuery('#treats-section .open-pb1').show();
});
jQuery('.chickenwild1').click(function(){
  jQuery('#treats-section .row:nth-child(4) .col-lg-4').hide();
  jQuery('#treats-section .open-chickenwild1').show();
});
jQuery('.chickenwild').click(function(){
  jQuery('#treats-section .open-beef1').hide();
  jQuery('#treats-section .open-pb').hide();
  jQuery('#treats-section .open-chickenwild').show();
});
jQuery('.beef1').click(function(){
  jQuery('#treats-section .open-pb').hide();
  jQuery('#treats-section .open-beef1').show();
  jQuery('#treats-section .open-chickenwild').hide();
});
jQuery('.pb').click(function(){
  jQuery('#treats-section .open-pb').show();
  jQuery('#treats-section .open-beef1').hide();
  jQuery('#treats-section .open-chickenwild').hide();
});
jQuery('.chickenwild1').click(function(){
  jQuery('#treats-section .open-beef2').hide();
  jQuery('#treats-section .open-pb1').hide();
  jQuery('#treats-section .open-chickenwild1').show();
});
jQuery('.beef2').click(function(){
  jQuery('#treats-section .open-pb1').hide();
  jQuery('#treats-section .open-beef2').show();
  jQuery('#treats-section .open-chickenwild1').hide();
});
jQuery('.pb1').click(function(){
  jQuery('#treats-section .open-pb1').show();
  jQuery('#treats-section .open-beef2').hide();
  jQuery('#treats-section .open-chickenwild1').hide();
});
}
if ($(window).width() < 768) {
    jQuery(document).on('click', '#open-product1', function(){  
      jQuery('#open1 .content-show').appendTo('#main-meal-section #main-feature1 .feature-content');
      jQuery('#main-meal-section #main-feature1 .feature-content').css('position','absolute')
    });
    jQuery(document).on('click', '#open-product2', function(){  
      jQuery('#open2 .content-show').appendTo('#main-meal-section #main-feature2 .feature-content');
      jQuery('#main-meal-section #main-feature2 .feature-content').css('position','absolute')
    });
    jQuery(document).on('click', '#open-product3', function(){  
      jQuery('#open3 .content-show').appendTo('#main-meal-section #main-feature3 .feature-content');
      jQuery('#main-meal-section #main-feature3 .feature-content').css('position','absolute')
    });
    jQuery(document).on('click', '.beef1', function(){  
      jQuery('.open-beef1').appendTo('#treats-section #treats-feature1 .feature-content');
      jQuery('#treats-section #treats-feature1 .feature-content').css('position','absolute')
    });
    jQuery(document).on('click', '.chickenwild', function(){  
      jQuery('.open-chickenwild').appendTo('#treats-section #treats-feature2 .feature-content');
      jQuery('#treats-section #treats-feature2 .feature-content').css('position','absolute')
    });
    jQuery(document).on('click', '.pb', function(){  
      jQuery('.open-pb').appendTo('#treats-section #treats-feature3 .feature-content');
      jQuery('#treats-section #treats-feature3 .feature-content').css('position','absolute')
    });
}
    // Home page/Our products section to show button by clicking on image
    jQuery('#click-icon1').click(function() {
      jQuery(this).hide();
      jQuery('#our-product-btn1').addClass("animated");
  });   
  jQuery('#click-icon2').click(function() {
      jQuery(this).hide();
      jQuery('#our-product-btn2').addClass("animated");
  });
  jQuery('#click-icon3').click(function() {
      jQuery(this).hide();
      jQuery('#our-product-btn3').addClass("animated");
  });
  jQuery('#close-out').click(function() {
    jQuery('.navbar-collapse').removeClass('show');
});
// Our commitment or Our story page to show video
jQuery(".watch-btn").click(function(){
  jQuery('.commitment-page-banner .text-box,.story-banner .text-box').css("display","none");
  jQuery('video').attr('controls','').trigger('play');
});
 // back to top jQuery
 jQuery("#toTop").click(function () {
  jQuery("html, body").animate({scrollTop: 0}, 1000);
});
$('#main-meal-section .row:first-child').slick({
centerMode: true,
centerPadding: '0',
slidesToShow: 3,
slidesToScroll: 3,
responsive: [
  {
    breakpoint: 768,
    settings: {
      slidesToShow: 1,
      slidesToScroll:1,
      centerPadding: '30px',
      arrows: false,
    }
  }
]
});
$('#treats-section .row:nth-child(2),#treats-section .row:nth-child(4)').slick({
centerMode: true,
centerPadding: '0',
slidesToShow: 3,
slidesToScroll: 3,
responsive: [
  {
    breakpoint: 768,
    settings: {
      slidesToShow: 1,
      slidesToScroll:1,
      centerPadding: '30px',
      arrows: false,
    }
  }
]
});
// Select and loop the container element of the elements you want to equalise
$('#main-meal-section .row:first-child').each(function(){    
// Cache the highest
var highestBox = 0;
// Select and loop the elements you want to equalise
$('.col-md-4', this).each(function(){ 
  // If this box is higher than the cached highest then store it
  if($(this).height() > highestBox) {
    highestBox = $(this).height(); 
  }
});        
// Set the height of all those children to whichever was highest 
$('.col-md-4',this).height(highestBox);             
});
// Select and loop the container element of the elements you want to equalise
$('#treats-section .row:nth-child(2),#treats-section .row:nth-child(4)').each(function(){    
// Cache the highest
var highestBox = 0;
// Select and loop the elements you want to equalise
$('.col-lg-4', this).each(function(){
  // If this box is higher than the cached highest then store it
  if($(this).height() > highestBox) {
    highestBox = $(this).height(); 
  }
});        
// Set the height of all those children to whichever was highest 
$('.col-lg-4',this).height(highestBox);              
});
var lastScrollTop = 0;
  jQuery(window).scroll(function (event) {
      var st = jQuery(this).scrollTop();
      if (st > lastScrollTop) {
          jQuery("body").addClass("head_hidden");
          jQuery("body").removeClass("head_sticky");
      } else {
          if (parseInt(jQuery(window).scrollTop()) > 0) {
              jQuery("body").removeClass("head_hidden");
              jQuery("body").addClass("head_sticky");
          } else {
              jQuery("body").removeClass("head_hidden");
              jQuery("body").removeClass("head_sticky");
          }
      }
      lastScrollTop = st;
  });
});
/*slider*/
jQuery(document).ready(function() {
var slickOpts = {
dots: false,
arrows: true,
slidesToShow: 5,
centerMode:true,
centerPadding: '0px',
slidesToScroll:1,
pauseOnHover:true,
speed: 2000,
autoplay: true,
infinite: true,
 responsive: [
    {
      breakpoint: 991,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 767,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
};
// Init slick carousel
jQuery('#petfood-slider').slick(slickOpts);
if(jQuery('.item').length == 2){
jQuery('#petfood-slider').slick('slickSetOption', 'centerMode', false)
}
});