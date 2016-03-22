$(function(){
	$('.scrollTop a').click(function(){
		$('body,html').animate({scrollTop:0},800)
	})
	$('.formRow').append('<div class="clear"></div>');
	$('.inline.multi .clumn').each(function(i) {
    var x = i+1
		var widthValue = (100/x);
		$('.inline .clumn').css('width',widthValue+'%');
  });
})



function overlayBox(popUpId){
	$('.overlay').fadeIn();
	$('#'+popUpId).append('<div class="closeBtn">X</div>')
	var winWidth = $(window).width();
	var winHeight = $(window).height();
	var boxHeight = $('#'+popUpId).outerHeight();
	var boxWidth = $('#'+popUpId).outerWidth();
	var marginTB = (winHeight-boxHeight)/ 2;
	var marginLR = (winWidth-boxWidth)/2;
	if(marginTB<0)
	{
		$('#'+popUpId).css('top','30px');
		$('#'+popUpId).css('left',+ marginLR);
		$('#'+popUpId).fadeIn();
	}
	else
	{		
		$('#'+popUpId).css('top',+ marginTB);
		$('#'+popUpId).css('left',+ marginLR);
		$('#'+popUpId).fadeIn();
	}
}
$(document).on('click','.closeBtn',function(){
	$('.overlay,.overlayBox').fadeOut();
});	

$(function(){
	animation(0)
	x = 1
	setInterval(function(){
		animation(x)
		x = x+1
		if(x > 3)
			{
				x=0;
			}
		else
			{
				return false;
			}
	},5000);
})
function animation(count)
{
	$('.sliderCnt ul li').fadeOut()
	$('.sliderCnt ul li').eq(count).fadeIn();
}

//top Parallax
$(document).ready(function () {
	$('#topAuto').plaxify({"xRange":40,"yRange":40})
	$('#topChennai').plaxify({"xRange":20,"yRange":20})
	$('#topRajni').plaxify({"xRange":30,"yRange":30,"invert":true})
	$('#topMumbai').plaxify({"xRange":10,"yRange":10})
	$('#logoshke').plaxify({"xRange":4,"yRange":4,"invert":true})
	$.plax.enable();
})

//Fixed menubar
$(function(){
	$("#myBar").fixtop({
		//marginTop: 10,
		fixed: function(el){
			el.css({
				"opacity": 1,
				"background-color": "#fae90c"
			});
		},
		unfixed: function(el){
			el.css({
				"opacity": 1,
				"background-color": "#fae90c"
			});
		}
	});
});

(function($) {
			$(document).ready(function() {
			
				$('#road1').pan({fps: 30, speed: 4.5, dir: 'right'}); 
				
				$('#road2').pan({fps: 30, speed: 4, dir: 'left'}); 
				
				//$('#sky').pan({fps: 30, speed: 0.5, dir: 'right'}); 
				
				var stage_left = (($('body').width() - 866) / 2);
				var stage_top = 30;
				
				
				$('#plane1').sprite({fps: 8, no_of_frames: 0})
					.spRandom({
						top: 100,
						left: stage_left + 100,
						right:900,
						bottom: 0,
						speed: 5000,
						pause: 1500
					});
				
			
			});
})(jQuery);


//date

$(function(){
	var d=new Date();
var weekday=new Array("sunday","monday","tuesday","wednesday","thursday","friday","saturday");
var monthname=new Array("january","february","march","april","may","june","july","august","september","october","november","december");
//document.write(weekday[d.getDay()] + " ");
//document.write(d.getDate() + ". ");
//document.write(monthname[d.getMonth()] + " ");
	$('.datecomes').html(monthname[d.getMonth()] + " " + d.getDate() + ", "+ d.getFullYear());
	$('.Datecomes').html(weekday[d.getDay()]);
	
	//Slide Function
	jQuery.fn.anchorAnimate = function(settings) {
    settings = jQuery.extend({
        speed : 1100
        }, settings);
        return this.each(function(){
        var caller = this
        $(caller).click(function (event) {
        event.preventDefault()
        var locationHref = window.location.href
        var elementClick = $(caller).attr("href")
        var destination = $(elementClick).offset().top;
        $("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination}, settings.speed, function() {
        window.location.hash = elementClick
        });
        return false;
        
        })
    })
}

$(function(){
        $(".slide").anchorAnimate();
});
 var ids1=$('.sliderInfoscnt').height();
 var ids2=$('.productInfoCntr').height();
 $('.productInfoCntr').css('margin-top',(ids1-ids2)/2);})

//Client SLider
$(document).ready(function(){
  $('.cSlider').bxSlider({
		auto:false,
		pager:false,
		touchEnabled:false
		});
		$('.testinonialSlider').bxSlider({
		auto:false,
		pager:false,
		touchEnabled:false,
		slideWidth: 175,
    minSlides: 1,
    maxSlides: 4,
    slideMargin: 20,
		infiniteLoop:false
		});
		
});

//$(window).scroll(function () {
//        if ($(window).scrollTop() > 579) {
//            $('.topsmlLinkcntr').css({
//                position: 'absolute',
//                top: 579
//            });
//        } else {
//            $('.topsmlLinkcntr').css({
//                position: 'fixed',
//                top: 0
//            });
//        }
//    });

	$(function () {
			$.scrollUp({
        scrollName: 'scrollUp', // Element ID
        scrollDistance: 300, // Distance from top/bottom before showing element (px)
        scrollFrom: 'top', // 'top' or 'bottom'
        scrollSpeed: 300, // Speed back to top (ms)
        easingType: 'linear', // Scroll to top easing (see http://easings.net/)
        animation: 'slide', // Fade, slide, none
        animationInSpeed: 200, // Animation in speed (ms)
        animationOutSpeed: 200, // Animation out speed (ms)
        scrollTrigger: false, // Set a custom triggering element. Can be an HTML string or jQuery object
				//scrollTarget: false, // Set a custom target element for scrolling to the top
        scrollText:false, //'Scroll to top', // Text for element, can contain HTML
        scrollTitle: false, // Set a custom <a> title if required. Defaults to scrollText
        scrollImg: true, // Set true to use image
        activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
        zIndex: 2147483647 // Z-Index for the overlay
			});
});