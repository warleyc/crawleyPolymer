// la Langue
$(function() {
	
	/*
		if ($.cookie("lang") !=null){
			
		}else{			
			

		};		*/


		// set effect from select menu value
		$( "a#uk" ).click(function() {
			$("#m1 strong").text("Home");
			$("#m2 strong").text("Projects");
			$("#m3 strong").text("Contact");
			$("#m4 strong").text("Location");
            $("#p1").text("My name is Nicolas Crawley and I am a French Java Developer.");
            $("#p2").text("This is my personal webpage, which contains information about myself, my project and my current location. Comments and questions are more than welcome! So, no more words... Make yourself at home!");
            $("#projet_m1").text("You will find here the different projects that I have attended.");
            $("#contact_m1").text("Feel free to contact me, please send an email to contact@crawley.fr or via the form below");
            $("#contact_m2").text("Thank you for fill in the form");
            $("#contact_m3").text("Your email adress: *");
            $("#contact_m4").text("Your message:");
            $("#submit").text("send");
            $("#localisation_m1").text("You will find here my last location :");
            $("#localisation_m2").text("The last geolocation is not available");
            $.cookie("lang", "uk", { expires: 14 });
			_gaq.push(['_trackEvent', 'Lang', 'uk', 'Action sur le bouton uk']);
			return false;
		});
				
		
		$( "a#fr" ).click(function() {
			$("#m1 strong").text("Accueil  ");
			$("#m2 strong").text("Projets  ");
			$("#m3 strong").text("Contact  ");
			$("#m4 strong").text("Localisation");
            $("#p1").text("Bienvenue sur le site personnel de Nicolas CRAWLEY");
            $("#p2").text("Chef de projet et consultant Web, vous trouverez ici les différents projets auquel j'ai participé ainsi que les coordonnées pour me contacter.");
            $("#projet_m1").text("Vous trouverez sur cette page les différents projets auxquelles j'ai participé.");
            $("#contact_m1").text("N'hésitez pas à me contacter, vous pouvez envoyer un mail à contact@crawley.fr ou via le formulaire ci-après :");
            $("#contact_m2").text("Merci de remplire le formulaire");
            $("#contact_m3").text("Votre adresse mail: *");
            $("#contact_m4").text("Votre message:");
            $("#submit").text("envoyer");
            $("#localisation_m1").text("Vous trouverez sur cette page ma derniere localisation :");
            $("#localisation_m2").text("La dernière géolocalisation n'est pas disponible");
            $.cookie("lang", "fr", { expires: 14 });
			_gaq.push(['_trackEvent', 'Lang', 'fr', 'Action sur le bouton fr']);
			return false;
		});
		
		$( "a#jp" ).click(function() {
			$("#m1 strong").text("ホーム");
			$("#m2 strong").text("プロジェクト ");
			$("#m3 strong").text("連絡先");
			$("#m4 strong").text("場所");
            $("#p1").text("Nicolas CRAWLEYのウェブサイトへようこそ");
            $("#p2").text("ここでは、プロジェクトマネージャーやウェブコンサルタント等、様々なプロジェクトに参加しております。");
            $("#projet_m1").text("私が参加している様々なプロジェクトです。");
            $("#contact_m1").text("どうぞお気軽に、下記のフォームに記入して頂くか contact@crawley.frまでメールを送って下さい。 :");
            $("#contact_m2").text("ご記入ありがとうございます");
            $("#contact_m3").text("あなたのメールアドレス: *");
            $("#contact_m4").text("メッセージ:");
            $("#submit").text("送信");
            $("#localisation_m1").text("私の最後の場所が確認できます。:");
            $("#localisation_m2").text("最後の位置情報は利用できません。");
            $.cookie("lang", "jp", { expires: 14 });
			_gaq.push(['_trackEvent', 'Lang', 'jp', 'Action sur le bouton jp']);
			return false;
		});
		
		
		
});


