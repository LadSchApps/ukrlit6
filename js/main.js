$(document).ready(function(){
	var widthBlock = $('.content-block').width();
	$("ul.multimedia-portfolio").multimedia_portfolio({width: widthBlock + 15, nbelem: 4});
	$(".portfolio-container").niceScroll({cursorborder:"", cursorcolor:"#1f96c3", touchbehavior: true, autohidemode: false, cursordragontouch: true});
});