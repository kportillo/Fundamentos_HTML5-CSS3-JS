
$(document).ready(function() {

	redrawDotNav();
	
    $(window).bind('scroll',function(e){
		redrawDotNav();
    });
    
	/* Next/prev and primary nav btn click handlers */
	$('a.nav-portada').click(function(){	
    	$('html, body').animate({
    		scrollTop:0
    	}, 1500);
    	return false;
	});
    $('a.nav-quien-soy').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#quien-soy').offset().top
    	}, 1500);
    	return false;
    });
    $('a.nav-estudios').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#estudios').offset().top
    	}, 1500);
    	return false;
    });
	$('a.nav-experiencia').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#experiencia').offset().top
    	}, 1500);
    	return false;
    });
	$('a.nav-about-me').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#about-me').offset().top
    	}, 1500);
    	return false;
    });
	$('a.nav-contacto').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#contacto').offset().top
    	}, 1500);
    	return false;
    });
	$('a.nav-aptitudes').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#aptitudes').offset().top
    	}, 1500);
    	return false;
    });

    /* Mostrar las cajas verdes sobre el texto del menu */
    $('nav#primary a').hover(
    	function () {
			$(this).prev('h1').show();
		},
		function () {
			$(this).prev('h1').hide();
		}
    );
    
});

/* Colocar los puntos activos - inactivos */
function redrawDotNav(){

	var section1Top =  0;	
	var section2Top =  $('#quien-soy').offset().top - (($('#estudios').offset().top - $('#quien-soy').offset().top) / 2);	
	var section3Top =  $('#estudios').offset().top - (($('#experiencia').offset().top - $('#estudios').offset().top) / 2);
	var section4Top =  $('#experiencia').offset().top - (($('#about-me').offset().top - $('#experiencia').offset().top) /2);
	var section5Top =  $('#about-me').offset().top - (($('#contacto').offset().top - $('#about-me').offset().top) /2);
	var section6Top =  $('#contacto').offset().top - (($('#aptitudes').offset().top - $('#contacto').offset().top) / 2);
	var section7Top =  $('#aptitudes').offset().top - (($(document).height() - $('#aptitudes').offset().top) / 2);


	$('nav#primary a').removeClass('active');
	if($(document).scrollTop() >= section1Top && $(document).scrollTop() < section2Top){
		$('nav#primary a.nav-portada').addClass('active');
	} else if ($(document).scrollTop() >= section2Top && $(document).scrollTop() < section3Top){
		$('nav#primary a.nav-quien-soy').addClass('active');
	} else if ($(document).scrollTop() >= section3Top && $(document).scrollTop() < section4Top){
		$('nav#primary a.nav-estudios').addClass('active');
	} else if ($(document).scrollTop() >= section4Top && $(document).scrollTop() < section5Top){
		$('nav#primary a.nav-experiencia').addClass('active');
	}else if ($(document).scrollTop() >= section5Top && $(document).scrollTop() < section6Top){
		$('nav#primary a.nav-about-me').addClass('active');
	}else if ($(document).scrollTop() >= section6Top && $(document).scrollTop() < section7Top){
		$('nav#primary a.nav-contacto').addClass('active');
	}else if ($(document).scrollTop() >= section7Top){
		$('nav#primary a.nav-aptitudes').addClass('active');
	}
	
}