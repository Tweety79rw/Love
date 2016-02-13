$(document).ready(function(){
	var middle = $(window).width()/2;
	var flash = function(){
		$('.love-text').css({'display':'block'}).addClass('flash');
		$('.arrow').delay(3000).animate({"left":($(window).width()-middle/2-100)+'px'},1000);
	};
	$('.left-heart').css({'left':'-200px','display':'block'}).animate({left:(middle-190)+'px'},5000).animate({left:(middle-200)+'px'},1000);
	$('.right-heart').css({'left':$(window).width()+'px','display':'block'}).animate({left:(middle-10)+'px'},5000).animate({left:(middle)+'px'},1000,flash);
	$('.love-text').css({'left':(middle-($('.love-text').width()/2))+'px','top':'200px'});
});