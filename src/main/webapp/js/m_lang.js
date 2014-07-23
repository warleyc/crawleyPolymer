// la Langue
$(function() {

	 $("#lang").change(function(){
	        var sel = $(this).val();
	         window.location.href="?language="+sel;
	        });
		
		
});


