$(document).ready(function() {
	// Malkaŝu ĉiujn elementojn kiuj bezonas JavaScript
	$('#lingvoelektilo').show();
	// $('.pep_rubriko').show();

	// Kaŝu la averton ke la lingvoelektilo bezonas JavaScript
	$('#js_averto').hide();

	// Kaŝu ĉiujn tekstojn ĝis ni scias kiun lingvon ni prezentu
	$('div.teksto').hide();
	$('div.teksto_dmd').hide();

	// Ĉu la URL jam postulas lingvon?
	// http://is.gd/hYjQIr
	var lingvo = '#eo';
	if ($(location).attr('hash')){
		lingvo = $(location).attr('hash').replace(/[^#a-zA-Z\-]/g, '');
	}
	// Montru la DIV-blokon kun la ĝusta lingvo
	$(lingvo).show();
	$("html, body").animate({ scrollTop: 0 }, "slow");

	// Agordu la ĝustan valoron en la lingvoelektilo (do ni estas konsekvenca)
	$("#lingvo").val(lingvo);

	// Elekto de alia lingvo kiam la paĝo jam estas ŝargita
	$('#lingvo').change(function() {
		// Kaŝu ĉion ĝis ni scias kian lingvon ni prezentu
		$('div.teksto').hide();
		$('div.teksto_dmd').hide();
		// Trovu la valoron de la lingvoelektilo
		lingvo = $("#lingvo option:selected").val().replace(/[^#a-zA-Z\-]/g, '');
		// Montru la DIV-blokon kun la ĝusta lingvo
		$(lingvo).show();
		$("html, body").animate({ scrollTop: 0 }, "slow");
		$(location).attr('hash', lingvo);
	});
	cxu_mobiltelefono();
});
$(window).resize(cxu_mobiltelefono);
function cxu_mobiltelefono() {
	console.log("Ĉu mobiletelefono?");
	if ($(window).height() > $(window).width()){
		console.log("Verŝajne jes: Ekrano estas pli alta ol vasta.");
		$('select#lingvo').css("font-size", "25px");
		if (window.devicePixelRatio > 2){
			console.log("Retina-ekrano.");
			$('body').css("-moz-text-size-adjust", "300%");
			$('body').css("-webkit-text-size-adjust", "300%");
			$('body').css("-ms-text-size-adjust", "300%");
			$('body').css("-o-text-size-adjust", "300%");
			$('body').css("text-size-adjust", "300%");
		}else{
			console.log("Ne-retina-ekrano.");
			$('body').css("-moz-text-size-adjust", "");
			$('body').css("-webkit-text-size-adjust", "");
			$('body').css("-ms-text-size-adjust", "");
			$('body').css("-o-text-size-adjust", "");
			$('body').css("text-size-adjust", "");
		}
	}else{
		console.log("Verŝajne ne mobiltelefono.");
		$('select#lingvo').css("font-size", "");
		$('body').css("-moz-text-size-adjust", "");
		$('body').css("-webkit-text-size-adjust", "");
		$('body').css("-ms-text-size-adjust", "");
		$('body').css("-o-text-size-adjust", "");
		$('body').css("text-size-adjust", "");
	}
	console.log("");
};
