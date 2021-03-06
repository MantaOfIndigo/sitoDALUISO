$(document).ready(function(){
		
		var lastScrollTop = 0;
		var occupied = false;
		
		$(window).scroll(function(event){
				var st = $(this).scrollTop();
				if (st > lastScrollTop){
					if(occupied == false){
						occupied = true;
						$('#main_header').animate({
								marginTop: 30,
								opacity: 0.5
						}, 0, function(){ 
							occupied = false;
						});
						
					}
					
				}else {
					if(st < 10){
					if(occupied == false){
						occupied = true;
						$('#main_header').animate({
								marginTop: 100,
								opacity: 1
						}, 0, function(){ 
							occupied = false;
						});
					}
				}
					
				}
		
      			lastScrollTop = st;
      	});
		
      
	
	$('body').addClass('light');
	
	$('ul.menu li').mouseover(function(){
			$('#profile-photo').animate({
								opacity: 0
						}, 0, function(){}); 
			$('#social-actions').animate({
								opacity: 0
						}, 0, function(){});
			$('#book-image').animate({
								opacity: 0
						}, 0, function(){ 
				$('.menu li').css("color","#ffffef");
				$('body').css("background-color", "#111111");
				$('body').addClass('dark').removeClass('light');	
			});
	});
	
	$('ul.menu li').mouseout(function(){

		$('body').addClass('light').removeClass('dark');
	});

        $("#gianluca").mouseover(function(){
  
                $('#gianluca').css("color", "#FFFFFF");
        		hideContent();
        		showHidden(1);
        		addDecorationSet(1);
                showPreview(1);
                
	});

        $("#gianluca").mouseout(function(){
        		
                $('.menu li').css("color","#2a2d2d");
                $('#gianluca').css("color", "#B92737");
        		hideNotSelected(1);
        		showContent();
                showPanel(1);
	});

	$("#books").mouseover(function(){
	$('#twitter').animate({
			opacity:0
			}, 500, function(){});
		
        $('#books').css("color", "#FFFFFF");
        showHidden(2);
        showPreview(2);
		$("#main-container").empty();
		addDecorationSet(2);
	});

        $("#books").mouseout(function(){
                $('.menu li').css("color","#2a2d2d");
                showContent();
                hideNotSelected(2);
                showPanel(2);
	});

       $("#dates").mouseover(function(){
       		  
	   $('#twitter').animate({
			opacity:0
			}, 500, function(){});
		
        $('#dates').css("color", "#FFFFFF");
        showHidden(3);
        showPreview(3);
		$("#main-container").empty();
		addDecorationSet(3);
	});

        $("#dates").mouseout(function(){
                $('.menu li').css("color","#f3f3f3");
                $('#dates').css("color","#fefefe");
                
                hideNotSelected(3);
                showPanel(3);
	});

        $("#about").mouseover(function(){
        		
		//removeDecorationSet();
		$('#twitter').animate({
			opacity:0
			}, 0, function(){});
		
        $('#about').css("color", "#FFFFFF");
        showHidden(4);
		$("#main-container").empty();
		addDecorationSet(4);
                showPreview(4);
	});

        $("#about").mouseout(function(){
                $('.menu li').css("color","#2a2d2d");
                
                hideNotSelected(4);
                showPanel(4);
	});



        //loadLatestTweet(10, "GialucaDaluiso");

$('#main_header').animate({ 
		marginTop: 100
		}, 0, function(){});
	
$('#main_header').animate({
		opacity: 1
		}, 0, function(){});
	
	
	showPanel(2);
	hideNotSelected(2);

})

function hideContent(){
	$('#main-container').animate({
			opacity: 0
	}, 0, function(){
		$('#main-container').empty();
	});
}

function showContent(){
	$('#main-container').animate({
			opacity: 1
	}, 500, function(){});
	
}

function addDecorationSet(number){

    var rnd = 1 + Math.floor(Math.random() * 6);
  
    if (number == 1){
        $('body').append('<div id="dec1" class="downdecoration2"></div>');
        $('body').append('<div id="dec2" class="updecoration2"></div>');
        $('body').append('<div id="dec3" class="updecoration3"></div>');
        $('body').append('<div id="dec4" class="downdecoration4"></div>');
    }

    if (number == 2){
        $('body').append('<div id="dec1" class="downdecoration1"></div>');
        $('body').append('<div id="dec2" class="updecoration1"></div>');
        $('body').append('<div id="dec3" class="updecoration2"></div>');
        $('body').append('<div id="dec4" class="downdecoration2"></div>');
    }

    if (number == 3){
        $('body').append('<div id="dec1" class="downdecoration4"></div>');
        $('body').append('<div id="dec2" class="updecoration3"></div>');
        $('body').append('<div id="dec3" class="updecoration4"></div>');
        $('body').append('<div id="dec4" class="downdecoration3"></div>');
    }

    if (number == 4){
        $('body').append('<div id="dec1" class="downdecoration3"></div>');
        $('body').append('<div id="dec2" class="updecoration4"></div>');
        $('body').append('<div id="dec3" class="updecoration1"></div>');
        $('body').append('<div id="dec4" class="downdecoration1"></div>');
    }
}


function showHidden(selected){
	if (selected == 1){
		$('#gianluca').animate({
			opacity: 1
		}, 0, function(){});	
		$('#gianluca').css("color","#f3f3f3");

		$('#dates').animate({
			opacity: 0.2
		}, 0, function(){});
		$('#dates').css("color","#f3f3f3");
		
		$('#about').animate({
			opacity: 0.2
		}, 0, function(){});
		$('#about').css("color","#f3f3f3");
		
		$('#books').animate({
			opacity: 0.2
		}, 0, function(){});
		$('#books').css("color","#f3f3f3");

	}

	if (selected == 2){
		
		$('#books').animate({
			opacity: 1
		}, 0, function(){});	
		$('#books').css("color","#f3f3f3");

		$('#gianluca').animate({
			opacity: 0.2
		}, 0, function(){});	
		$('#gianluca').css("color","#f3f3f3");
		
		$('#about').animate({
			opacity: 0.2
		}, 0, function(){});
		$('#about').css("color","#f3f3f3");
		
		$('#dates').animate({
			opacity: 0.2
		}, 0, function(){});
		$('#dates').css("color","#f3f3f3");

	}
	if (selected == 3){

		$('#dates').animate({
			opacity: 1
		}, 0, function(){});	
		$('#dates').css("color","#f3f3f3");
		
		$('#gianluca').animate({
			opacity: 0.2
		}, 0, function(){});	
		$('#gianluca').css("color","#f3f3f3");
		
		$('#about').animate({
			opacity: 0.2
		}, 0, function(){});
		$('#about').css("color","#f3f3f3");
		
		$('#books').animate({
			opacity: 0.2
		}, 0, function(){});
		$('#books').css("color","#f3f3f3");

	}

	if(selected == 4){
		$('#about').animate({
			opacity: 1
		}, 0, function(){});	
		$('#about').css("color","#f3f3f3");
		
		$('#gianluca').animate({
			opacity: 0.2
		}, 0, function(){});	
		$('#gianluca').css("color","#f3f3f3");
		
		$('#books').animate({
			opacity: 0.2
		}, 0, function(){});
		$('#books').css("color","#f3f3f3");
		
		$('#dates').animate({
			opacity: 0.2
		}, 0, function(){});
		$('#dates').css("color","#f3f3f3");
	
	}
}

function hideNotSelected(selected){
	
	if (selected == 1){

		$('#dates').animate({
			opacity: 0.02	
		}, 0, function(){});	
		$('#about').animate({
			opacity: 0.02	
		}, 0, function(){});
		$('#books').animate({
			opacity: 0.03
		}, 0, function(){});

	}

	if (selected == 2){

		$('#gianluca').animate({
			opacity: 0.05	
		}, 0, function(){});	
		$('#about').animate({
			opacity: 0.05
		}, 0, function(){});
		$('#dates').animate({
			opacity: 0.05	
		}, 0, function(){});

	}
	if (selected == 3){

		$('#gianluca').animate({
			opacity: 0.1	
		}, 0, function(){});	
		$('#about').animate({
			opacity: 0.1	
		}, 0, function(){});
		$('#books').animate({
			opacity: 0.1	
		}, 0, function(){});

	}

	if(selected == 4){
		$('#gianluca').animate({
			opacity: 0.11	
		}, 0, function(){});	
		
		$('#books').animate({
			opacity: 0.1
		}, 0, function(){});
		$('#dates').animate({
			opacity: 0.1	
		}, 0, function(){});
	
	}

	
}


function showPanel(value){

	

    if(value == 1){
        $('body').css("background-color","#eeeeee");
		$('#gianluca').animate({
			opacity: 1	
		}, 0, function(){});
		
		$('#twitter').animate({
			opacity:1
			}, 0, function(){});
		$('#profile-photo').animate({
								opacity: 1
		}, 0, function(){});
		
		
	$('#main-container').append('<div id="bio"><div id="gianluca-begin">Inizia a scrivere per il quotidiano “La Voce di Romagna” ad appena 16 anni. A 17 anni consegue il diploma di maturità come ragioniere, ramo informatico. Attualmente, a 22 anni, si è appena  laureato alla facoltà di Scienze Politiche dell’Università di Bologna con sede a  Forli. </div><div id="gianluca-middle">Già da qualche anno impegnato nel campo del sociale, ha organizzato  conferenze con autorevoli uomini delle istituzioni fra i quali il Presidente della Camera dei Deputati On. Gianfranco Fini e Sonia Alfano, già Presidente della Commissione Parlamentare Antimafia al Parlamento Europeo. Si occupa anche di antimafia e legalità. Ha tenuto conferenze con i più importanti magistrati del settore come l’ex Procuratore Nazionale Antimafia Pietro Grasso, attuale Presidente del Senato, il Procuratore Aggiunto di Palermo, Antonio Ingroia, il Procuratore Antimafia di Reggio Calabria Nicola Gratteri, il Procuratore di Torino, Gian Carlo Caselli. E’ stato anche invitato a tenere diversi seminari - incontri sul tema dell’attualità e della legalità in diversi licei e scuole superiori. Organizza con il Block60 di Riccione la rassegna culturale “parole tra noi”. Da marzo a giugno del 2013 ha condotto(e ideato) un programma radiofonico su Radio Icaro. Ospitando personaggi che vanno da Fabio Volo, all’attore Ivano Marescotti. </div><div id="gianluca-end">E’ stato web-opinionista della trasmissione “Agorà” su Rai3. Ha curato una rubrica editoriale settimanale sul Corriere di Romagna fino al 2014. Dal 2014 collabora come giornalista presso “Il Fatto Quotidiano”. Dal 5 luglio 2014 conduce con Lia Celi la trasmissione “Mai stati meglio” su Rai Radio 2.</div></div><div id="decoration-bottom-black"></div>');
	showContent();
		
		}

    if(value == 2){
		$('#books').animate({
			opacity: 1	
		}, 0, function(){});
        $('body').css("background-color","#ffffff");
		
	$('#main-container').append("<div id='presentation'></div>");
	$('#main-container').append("<div id=‘books-container'><div class='text'><p id='date'>Dal 5 maggio</p><div class='title'><span>Cambiare il Paese </br> per non dover cambiare Paese</span></div> <div id='decoration-red-line'></div><div class='subtitle'><span class='right'>Con prefazione di Nadia Toffa</span><span>Un dialogo con Dario Fo, Marco Travaglio, Roberto Saviano, Milena Gabanelli, J-Ax, Pierluigi Pardo e molti altri.</span></div></div><div id='italic-desc'><img src='images/virgopen.png' id='virg_open'>Nelle fiabe non si insegna ai bambini che esistono i draghi. Questo i bambini lo sanno già. Nelle fiabe si insegna ai bambini che i draghi si possono sconfiggere. Ed è la stessa cosa che si prefigge questo volume: dimostrare che i problemi si possono risolvere. Che è possibile cambiare.<img src='images/virgclose.png' id='virg_close'></div></div>");
	$('#main-container').append("<div id='fourth'><span>	Un libro dedicato ai giovani, ma rivolto a tutti gli italiani. Troppi ragazzi oggi sono costretti a scappare all’estero per assicurarsi un futuro. L’Italia è frammentata e ha bisogno di ritrovare la propria identità per risolvere i problemi che la affliggono. In questo testo non si racconta solo cosa non funziona, ma per la prima volta i migliori esperti di ogni settore, con interviste inedite, offrono i loro punti di vista sul come migliorare il nostro Paese. Punti di vista rivolti non solo al mondo politico, ma a tutti i cittadini. Perchè anche la singola persona, nel suo piccolo, può contribuire in maniera determinante al cambiamento.</span> <span>È arrivato il momento in cui il coraggio deve essere più forte della paura e la speranza più forte della rassegnazione. Perchè l’alternativa alla “fuga” dipende soltanto da noi.</span></div>");
	
	showContent();
	
	
	$('#book-image').animate({
			opacity: 1	
		}, 0, function(){});
    }

    if(value == 3){
		$('#dates').animate({
			opacity: 1	
		}, 0, function(){});
        $('body').css("background-color","#444444");
        $('#main-container').append('<div id="dates-container"><span>A breve aggiornamenti...</span></div>"');
        
        
        
	showContent();
    }

    if(value == 4){
		$('#about').animate({
			opacity: 1	
		}, 0, function(){
		$('#book-image').animate({
			opacity: 0	
		}, 0, function(){});
		});
        $('body').css("background-color","#B93848");
        $('#about-container').append(" <div class='deco1'></div> <div class='deco2'></div> <div class='deco3'></div>");
        $('#about-container').append("<div class='container'><a href='https://www.facebook.com/gianluca.daluiso/'><div id='fbbanner'></div></a><a href='https://twitter.com/GianlucaDaluiso'><div id='twbanner'></div></a><a href='mailto:scrivimi@gianlucadaluiso.it'><div id='gmbanner'></div></a></div>");
        $('#social-actions').animate({
        		opacity: 1
        }, 0, function(){});
        
	showContent();
        
        
      }

     
}



function showPreview(value){
    if(value == 1){
        $('#main-container').append("<div id='gianluca-container'> <div class='square1'></div><div class='square2'></div><div class='square3'></div><div>");
    }

    if(value == 2){
          }

    if(value == 3){
        $('body').css("background-color","#E3303B");
    }

    if(value == 4){
          $('#main-container').append("<div id='about-container'> <div class='square1'></div> <div class='square2'></div><div class='square3'></div><ul> <li>facebook</li> <li>twitter</li> <li>e-mail</li> </ul> </div>")

      }
}

