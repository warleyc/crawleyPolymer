
// le menu et le formulaire
$(function() {

	// callback function to bring a hidden box back
	function callback() {
		/*
		 * setTimeout(function() { $( "#effect" ).removeAttr( "style"
		 * ).hide().fadeIn(); }, 1000 );
		 */
	}
	;

	// The root URL for the RESTful services
	var rootURL = "/rest/mail";

	function sendMail() {
		console.log('sendMail');
		$.ajax({
			type : 'POST',
			contentType : 'application/json',
			url : rootURL,
			dataType : "json",
			data : formToJSON(),
			success : function(data, textStatus, jqXHR) {
				console.log('success status:' + data.status);
				if (data.status == 'KO') {
					
					//$.mobile.showPageLoadingMsg("a", "This is only a test", true);
					// show error message
					//$.mobile.showPageLoadingMsg( $.mobile.pageLoadErrorMessageTheme, $.mobile.pageLoadErrorMessage, true );
					//$.mobile.loadingMessageTextVisible = true; 
					// hide after delay
					//setTimeout( $.mobile.hidePageLoadingMsg, 1500 );
					
					console.log('KO ici:'+$('.ui-dialog'));
					 //$('.ui-dialog').dialog ('close');
				     var dialog = $( $( "#template-dialog" ).html() ); //actually i'm using here sg like this: _.template( $( "#template-dialog" ).html(), propObject );
					 dialog.dialog().appendTo( document.body );
					 $.mobile.changePage( dialog, { transition: "pop", role: "dialog", reverse: false }  );
					 
					
					console.log('apres KO');
				} else {
					// clean form
					console.log('clean:' + data.code);
					$('#destinataire').val('');
					$('#message').val('');
					$.mobile.changePage( "/mobile/index.do", { transition: "slideup"}  );
					 
					 
					console.log('home OK');
				}
			},
			error : function(jqXHR, textStatus, errorThrown) {
				 var dialog = $( $( "#template-dialog" ).html() ); //actually i'm using here sg like this: _.template( $( "#template-dialog" ).html(), propObject );
				 dialog.dialog().appendTo( document.body );
				 $.mobile.changePage( dialog, { transition: "pop", role: "dialog", reverse: false }  );
				 
			}
		});
	}

	// Helper function to serialize all the form fields into a JSON string
	function formToJSON() {
		return JSON.stringify({
			"subject" : $('#sujet').val(),
			"destinataire" : $('#destinataire').val(),
			"msgBody" : $('#message').val()
		});
	}

	function renderErrorMessage(result) {
		$('#code').val(result.code);
		$('#message').val(result.message);
		$('#status').val(result.status);
	}

	$("input#submit").click(function() {
		sendMail();
		return false;
	});

});
