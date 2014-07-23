// affiche la location
var loc="/rest/latitude";

function showLocation() {
		
		$.ajax({
			type: 'GET',
			contentType: 'application/json',
			accept: 'application/json',
			url: loc,
			success: function(data, textStatus, jqXHR){

				  if ($('.bloc_location').length==0){
					  
					  if (data !=null && data.photoUrl!=null ){
						  var location=data.ypos+','+data.xpos;
					    
						  var html='';
						  html=html+'<span class="location_duration">'+data.reverseGeocode+', '+data.since+'</span>';
						  html=html+'<div class="bloc_location">';
						  html=html+'<img id="map" width="264" height="176" src="http://maps.googleapis.com/maps/api/staticmap?center='+location+'&zoom=4&size=300x200&sensor=false">';
						  html=html+'<img class="logo" id="photo" src="'+data.photoUrl+'" title="Accurate to 75 meters" border="0" width="36" height="36">';
						  html=html+'</div>';
						  //html=html+'<a class="various iframe" href="http://maps.google.com/?output=embed&amp;f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=London+Eye,+County+Hall,+Westminster+Bridge+Road,+London,+United+Kingdom&amp;hl=lv&amp;ll=51.504155,-0.117749&amp;spn=0.00571,0.016512&amp;sll=56.879635,24.603189&amp;sspn=10.280244,33.815918&amp;vpsrc=6&amp;hq=London+Eye&amp;radius=15000&amp;t=h&amp;z=17">Agrandir</a>';
						  html=html+'<a class="btn  btn-primary " id="various5" href="/html/map.html?xpos='+data.ypos+'&ypos='+data.xpos+'&x='+data.ypos+'&y='+data.xpos+'">Agrandir</a>';
						  
						  //http://localhost:8888/map.html?xpos=59.32522&ypos=18.07002&x=59.327383&y=18.06747
						  $('.global_location').append(html);

						  $("#various5").fancybox({
						        'autoScale'     	: true,
						        'transitionIn'		: 'none',
								'transitionOut'		: 'none',
								'type'				: 'iframe'
							});
						  
					  	}else{
						  console.log('error:pas de geo');
						  var html='';
						  html=html+'<div class="bloc_location" >';
						  html=html+'La dernière géolocalisation n\'est pas disponible';
						  html=html+'</div>';
						  $('.global_location').append(html);
					  	}
				
				}
			},
			error: function(jqXHR, textStatus, errorThrown){
				console.log('error:'+textStatus);
			}
		});
}




(function() {

    // construit le bloc de localisation
    showLocation();
    
})();

