

// bouton google+
window.___gcfg = {lang: 'fr'};

(function() {
    var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
    po.src = 'https://apis.google.com/js/plusone.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
   
})();


// le menu et le formulaire
$(function() {

	// callback function to bring a hidden box back
	function callback() {
	};

	
	// The root URL for the RESTful services
	var rootURL = "/rest/mail";
	
	function sendMail() {
		console.log('sendMail');
		$.ajax({
			type: 'POST',
			contentType: 'application/json',
			url: rootURL,
			dataType: "json",
			data: formToJSON(),
			success: function(data, textStatus, jqXHR){
				console.log('success status:'+data.status);			
				if (data.status=='KO'){				
					console.log('KO');
                    $('#dialogError').modal('show');
					console.log('apres KO');
				}else{				
					// clean form
					console.log('clean:'+data.code);
                    $('#dialog').modal('show');

					$("#contact").hide();
					$('#destinataire').val('');
					$('#message').val('');
					$("#main_right").effect( "slide",{} ,"normal",callback );

					console.log('home OK');
				}
			},
			error: function(jqXHR, textStatus, errorThrown){
                $('#dialogError').modal('show');
			}
		});
	}
		
	// Helper function to serialize all the form fields into a JSON string
	function formToJSON() {
			return JSON.stringify({
				"subject": $('#sujet').val(), 
				"destinataire": $('#destinataire').val(), 
				"msgBody": $('#message').val()			
				});
		}

	function renderErrorMessage(result) {
		$('#code').val(result.code);
		$('#message').val(result.message);	
		$('#status').val(result.status);
	}
	
		
		// set effect from select menu value
		$( "a#menu_item1" ).click(function() {
			var options = {};	
			$("#projets").hide();
			$("#contact").hide();
			$("#location").hide();
			$("#gallerie").hide();
            $("#main_right").show();
			//$("#main_right").effect( "slide",options ,"normal",callback );
			_gaq.push(['_trackEvent', 'Menu', 'Home', 'Action sur le bouton home']);
			return false;
		});
				
		
		$( "a#menu_item2" ).click(function() {
			var options = {};	
			$("#main_right").hide();
			$("#contact").hide();
			$("#location").hide();
			$("#gallerie").hide();
            $("#projets").removeClass('hide');
            $("#projets").show();
			//$("#projets").effect( "slide",options ,"normal",callback );
			_gaq.push(['_trackEvent', 'Menu', 'Projets', 'Action sur le bouton Projets']);
			return false;
		});
		
		$( "a#menu_item3" ).click(function() {
			var options = {};	
			$("#main_right").hide();
			$("#projets").hide();
			$("#location").hide();
			$("#gallerie").hide();
            $("#contact").removeClass('hide');
            //$("#contact").fadeIn();
			//$("#contact").effect( "slide",options ,"normal",callback );
            $("#contact").show();
			_gaq.push(['_trackEvent', 'Menu', 'Contact', 'Action sur le bouton Contact']);
			return false;
		});
		

		$( "a#menu_item4" ).click(function() {
			var options = {};	
			$("#projets").hide();
			$("#main_right").hide();
			$("#contact").hide();
			$("#gallerie").hide();
            $("#location").removeClass('hide');
            $("#location").show();
			//$("#location").effect( "slide",options ,"normal",callback );
			_gaq.push(['_trackEvent', 'Menu', 'Location', 'Action sur le bouton Location']);
			return false;
		});
		

		 
		$(".fancybox").fancybox({
            maxWidth	: 800,
            maxHeight	: 600,
            fitToView	: false,
            width		: '70%',
            height		: '70%',
            autoSize	: false,
            closeClick	: false,
            openEffect	: 'none',
            closeEffect	: 'none'
        });



    /*
     $("#various5").fancybox({
     'autoScale'     	: true,
     'transitionIn'		: 'none',
     'transitionOut'		: 'none',
     'type'				: 'iframe'
     });
     */

		
		$( ".sendMail" ).click(function() {
			sendMail();
			return false;
		});

});


