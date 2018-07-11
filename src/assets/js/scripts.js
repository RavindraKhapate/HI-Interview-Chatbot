$(document).ready(function(){$("#slider").owlCarousel({items:1,margin:0,autoplay:true,loop:true,autoplayTimeout:4750,touchDrag:false,pullDrag:false,autoplayHoverPause:true,mouseDrag:false,onChanged:onChangedCallback});var owl=$('.owl-carousel');$('.owl-item').mouseover(function(){owl.trigger('stop.owl.autoplay');});$('.owl-item').mouseout(function(){owl.trigger('play.owl.autoplay')});try{if(top.location.hostname!=self.location.hostname){throw 1;};}catch(e){top.location.href=self.location.href;}});$(window).resize(function(){$('.accordion-link').each(function(){if($(this).hasClass('first')){$(this).removeClass('first');}if($(this).hasClass('active')){$(this).addClass('first');}if($(this).hasClass('cus-accor-active')){$(this).removeClass('cus-accor-active');}});});$(window).load(function(){var audio=$("#audio");var sourceUrlmp3='/wp-content/themes/hexaware-main/images/audio/AUD-20170714-WA0001.mp3';var sourceUrlwav='/wp-content/themes/hexaware-main/images/audio/AUD-20170714-WA0001.wav';if($(window).width()<768){$(document).click(function(){$('.dropdown .dropdown-menu').hide();});}$('.navbar .container .navbar-collapse #menu-main-menu li').click(function(){if($(this).hasClass('open')){$(this).find('ul').toggle();}else{$('.dropdown .dropdown-menu').hide();$(this).find('ul').show();}});$('.navbar .container .navbar-collapse #menu-main-menu li a').click(function(){if($(this).parent().hasClass('open')){$(this).parent().find('ul').toggle();}else{$('.dropdown .dropdown-menu').hide();$(this).parent().find('ul').show();}});$('.header17 .hx-header .navbar-right.web-menu-hide li').click(function(){if($(this).hasClass('open')){$(this).find('ul').toggle();}else{$('.dropdown-menu').hide();$(this).find('.dropdown-menu').show();$(this).find('.dropdown-menu').css('visibility','visible');$(this).find('.dropdown-menu').css('opacity','1');}});$("#src-mp3").attr("src",sourceUrlmp3);$("#src-wav").attr("src",sourceUrlwav);try{audio[0].load();}catch(e){}});function onChangedCallback(event){var indexPosition=event.item.index;if(indexPosition>0){$('.multislide .img').removeClass('current');$('.multislide .img.active').addClass('current').removeClass('active');if(indexPosition==4||indexPosition==1){indexPosition=3;}else if(indexPosition==2){indexPosition=1;}else if(indexPosition==3){indexPosition=2;}$('.multislide .img:nth-child('+indexPosition+')').addClass('active');setTimeout(function(){$('.multislide .img').removeClass('current');},500);}}$(document).ready(function(){setTimeout(function(){$("#event").owlCarousel({items:1,margin:0,autoplay:true,loop:true});},300);$(".qfy").click(function(){$('html, body').animate({scrollTop:$(".masterstrokes-section").offset().top-90},2000);});});$(document).ready(function(){$("#home-testimonial").owlCarousel({items:1,margin:0,autoplay:true,loop:true,nav:true,slideBy:1,dots:false,center:false,autoheight:true,navText:['&#xf104;','&#xf105'],autoplayTimeout:3000,mouseDrag:false});});$(document).ready(function(){$("#home-testimonial-2").owlCarousel({items:1,margin:0,autoplay:true,loop:true,nav:true,slideBy:1,dots:false,center:false,autoheight:true,navText:['&#xf104;','&#xf105'],autoplayTimeout:5000,mouseDrag:false});});$(document).ready(function(){$("#home-testimonial-3").owlCarousel({items:1,margin:0,autoplay:true,loop:true,nav:true,slideBy:1,dots:false,center:false,autoheight:true,navText:['&#xf104;','&#xf105'],autoplayTimeout:8000,mouseDrag:false});});jQuery(document).ready(function(){$('.megamenu-fw > a').on('mouseover',function(){if($('.mbl-menu').hasClass('active')){$('.mbl-menu').trigger('click');}});});var tag=document.createElement('script');tag.src="//www.youtube.com/iframe_api";var firstScriptTag=document.getElementsByTagName('script')[0];firstScriptTag.parentNode.insertBefore(tag,firstScriptTag);var player;function onYouTubeIframeAPIReady(){player1=new YT.Player('player-left',{videoId:'tI2Xz4pbVbI',events:{'onStateChange':onPlayerStateChange,}});player2=new YT.Player('player-right',{videoId:'H_ssYFinSf0',events:{'onStateChange':onPlayerStateChange,}});player3=new YT.Player('player-right2',{videoId:'TB5qtwKUyZM',events:{'onStateChange':onPlayerStateChange,}});player4=new YT.Player('brand-Video',{videoId:'eVOb3Ow_UTI',events:{'onStateChange':onPlayerStateChange,}});}function changeVideo(videoURL){$('#vd-source').attr('src',videoURL);}$('.modal').on('shown.bs.modal',function(e){$('.carousel').carousel('pause');})
$('.modal').on('hide.bs.modal',function(e){$('.carousel').carousel('cycle');})
$("#myModal").on('hidden.bs.modal',function(e){$("#myModal iframe").attr("src",$("#myModal iframe").attr("src"));});$('.carousel').carousel({interval:5000,})
function onPlayerStateChange(event){if(event.data==YT.PlayerState.PLAYING){stopVideo(event.target.a.id);}}function stopVideo(player_id){if(player_id=="player-left"){player2.stopVideo();player3.stopVideo();}else if(player_id=="player-right"){player1.stopVideo();player3.stopVideo();}else if(player_id=="player-right2"){player1.stopVideo();player2.stopVideo();}else if(player_id=="career-Video"){var audiomp3=$("#audio").prop("muted");$("#audio").prop("muted",!audiomp3);}}function aud_play_pause(){var myAudio=document.getElementById("audio");if(myAudio.paused){myAudio.play();document.getElementById("player").src="/wp-content/themes/hexaware-main/images/audio/playicon.png";}else{myAudio.pause();document.getElementById("player").src="/wp-content/themes/hexaware-main/images/audio/pauseicon.png";}}if($(window).width()>1024){var count=0;function init(){window.addEventListener('scroll',function(e){if(!$('.mbl-menu.pull-right ').hasClass('active')){var distanceY=window.pageYOffset||document.documentElement.scrollTop,shrinkOn=250,shrinkMore=300,shrinkRotate=400,shrinkRotateBack=500,header=document.querySelector("header");if(distanceY>shrinkOn&&count==0){rotateMenuBlack(distanceY,shrinkOn,header);}else{rotateMenuBack(header,distanceY);}}});}window.onload=init();}function rotateMenuBlack(distanceY,shrinkOn,header){scrollcount=shrinkOn+1;if(!$('.hx-header').hasClass('smaller')){classie.add(header,"smaller");$('.navbar-brand img').attr('src','/wp-content/themes/hexaware-main/images/logo-icon.png');classie.add(header,"shrink");}setTimeout(function(){classie.add(header,"shrink-rotate");},100);setTimeout(function(){if(classie.has(header,"shrink")){classie.remove(header,"shrink");}count=count+1;},400);}function rotateMenuBack(header,distanceY){if(distanceY==0){setTimeout(function(){if($('.hx-header').hasClass('smaller')){classie.add(header,"shrink");}},400);setTimeout(function(){if(classie.has(header,"shrink-rotate")){classie.remove(header,"shrink-rotate");}},700);setTimeout(function(){if(classie.has(header,"shrink")){classie.remove(header,"shrink");}if(classie.has(header,"smaller")){classie.remove(header,"smaller");$('.navbar-brand img').attr('src','/wp-content/themes/hexaware-main/images/logo.png');}count=0;},1000);}}$(document).ready(function(){console.log('1');equalheight('.box-job-new');equalheight('.walkin-inr-hdng');console.log('2');equalheight=function(NewsContainer){var currentTallest=0,currentRowStart=0,rowDivs=new Array(),$el,topPosition=0;$(NewsContainer).each(function(){$el=$(this);$($el).height('auto')
topPostion=$el.position().top;if(currentRowStart!=topPostion){for(currentDiv=0;currentDiv<rowDivs.length;currentDiv++){rowDivs[currentDiv].height(currentTallest);}rowDivs.length=0;currentRowStart=topPostion;currentTallest=$el.height();rowDivs.push($el);}else{rowDivs.push($el);currentTallest=(currentTallest<$el.height())?($el.height()):(currentTallest);}for(currentDiv=0;currentDiv<rowDivs.length;currentDiv++){rowDivs[currentDiv].height(currentTallest);}});}
$(window).load(function(){console.log('3');equalheight('.walkin-inr-hdng');});$(window).resize(function(){console.log('4');equalheight('.walkin-inr-hdng');});$(window).load(function(){console.log('5');equalheight('.box-job-new');});$(window).resize(function(){console.log('6');equalheight('.box-job-new');});});

$(document).ready(function() {
//slick slider initialization
$('.stock-link-init').click(function(){
  var sliderName=$(this).attr('data-slider-stock');
  var sliderFor=$(this).attr('data-slider-stock-for');
  //console.log(sliderName+"-"+sliderFor);
  $('.'+sliderFor).not('.slick-initialized').slick({
   slidesToShow: 1,
   slidesToScroll: 1,
   arrows: false,
   fade: true,
   asNavFor: '.'+sliderName,
   focusOnSelect: true,
    adaptiveHeight: true

  });

  $('.'+sliderName).slick({
   slidesToShow: 11,
   slidesToScroll: 1,
   asNavFor: '.'+sliderFor,
   //dots: true,
   centerMode: true,
   focusOnSelect: true,
    adaptiveHeight: true,
   
   responsive: [
     {
       breakpoint: 1200,
       settings: {
         slidesToShow: 9,
         infinite: true,
       
       }
     },  
     {
       breakpoint: 1024,
       settings: {
         slidesToShow: 7,
         infinite: true,
   
       }
     },
     {
       breakpoint: 800,
       settings: {
         slidesToShow: 5,
       }
     },
     {
       breakpoint: 480,
       settings: {
         slidesToShow: 3,
       }
     },
     {
       breakpoint: 400,
       settings: {
         slidesToShow: 1,
       }
     }      
      
  ]
   
  });
});
	//end slick slider initialization
	
//slide-content
    $('#info-two').hide();
    $('#info-one').hide();
	$('#info-three').hide();
	$('#info-four').hide();
	$('#info-five').hide();
	
	$("#img-one").click(function(){
	$('#info-three').hide();
    $('#info-two').hide();
	$('#info-four').hide();
	$('#info-five').hide();
    $('#info-one').show();
});

$("#img-two").click(function(){
    $('#info-one').hide();
    $('#info-two').show();
	$('#info-three').hide();
	$('#info-four').hide();
	$('#info-five').hide();
});
	$("#img-two").click(function(){
    $('#info-one').hide();
    $('#info-two').hide();
	$('#info-three').show();
	$('#info-four').hide();
	$('#info-five').hide();
});
	$("#img-two").click(function(){
    $('#info-one').hide();
    $('#info-two').hide();
	$('#info-three').hide();
	$('#info-four').show();
	$('#info-five').hide();
});
	$("#img-two").click(function(){
    $('#info-one').hide();
    $('#info-two').hide();
	$('#info-three').hide();
	$('#info-four').hide();
	$('#info-five').show();
});
	
$("html, body").click(function(e) {
	if ($(e.target).hasClass('image-section') && $(e.target).hasClass('info-one')) {
		
		$('.infograph-content').hide();
		$('#info-one').show();
		return false;
	}else if ($(e.target).hasClass('image-section') && $(e.target).hasClass('info-two')) {
		
		$('.infograph-content').hide();
		$('#info-two').show();
		return false;
	}
	else if ($(e.target).hasClass('image-section') && $(e.target).hasClass('info-three')) {
		
		$('.infograph-content').hide();
		$('#info-three').show();
		return false;
	}
	else if ($(e.target).hasClass('image-section') && $(e.target).hasClass('info-four')) {
		
		$('.infograph-content').hide();
		$('#info-four').show();
		return false;
	}
	else if ($(e.target).hasClass('image-section') && $(e.target).hasClass('info-five')) {
		
		$('.infograph-content').hide();
		$('#info-five').show();
		return false;
	}
	$('#info-one').hide();
    $('#info-two').hide();
	$('#info-three').hide();
	$('#info-four').hide();
	$('#info-five').hide();
});
	$(function() {
        $('.bfs-map').maphilight();
		 $('.rpa-map').maphilight();
		$('.insu-map').maphilight();
		$('img[usemap]').maphilight({ stroke: false, strokeWidth: 0, fillColor: "87ceeb", fillOpacity: 0.8});
	});
});

