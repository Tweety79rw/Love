var parseAddress = function(){
	var result = {};
	var queryArray = decodeURIComponent(window.location.search.replace('?','').replace(/\+/g,' ')).split('&');
	queryArray.forEach(function(element){
		var parts = element.split('=');
		result[parts[0]] = parts[1];
	});
	return result;
};

$(document).ready(function(){
	var name = 'Catrina';
	var parse = parseAddress();
	if(parse && parse.name && parse.name.length > 0)
		name = parse.name;
	$('#name').html(name);
	var middle = $(window).width()/2;
	var flash = function(){
		$('.love-text').css({'display':'block'}).addClass('flash');
		$('.arrow').delay(3000).animate({"left":(middle+250)+'px'},1000);
	};
	$('.left-heart').css({'left':'-200px','display':'block'}).animate({left:(middle-190)+'px'},5000).animate({left:(middle-200)+'px'},1000);
	$('.right-heart').css({'left':$(window).width()+'px','display':'block'}).animate({left:(middle-10)+'px'},5000).animate({left:(middle)+'px'},1000,flash);
	$('.love-text').css({'left':(middle-($('.love-text').width()/2))+'px','top':'200px'});
});