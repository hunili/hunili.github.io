$(document).ready(function(){
	$('#scene').parallax({
	invertX: false,
	invertY: false
	});
	$('#sceneright').parallax({
	invertX: false,
	invertY: false
	});
	$('#scene404').parallax();
	$('.flickity').flickity({
	  // autoPlay: 5000,
	  prevNextButtons: true,
	  pageDots: false,
	  cellAlign: 'center',
	  imagesLoaded: true,
	  wrapAround: true
	  // accessibility: true,
	  // cellSelector: undefined,
	  // contain: false,
	  // draggable: true,
	  // freeScroll: false,
	  // friction: 0.2,
	  // initialIndex: 0,
	  // percentPosition: true,
	  // resize: true,
	  // rightToLeft: false,
	  // setGallerySize: true,
	  // watchCSS: false
	});
});