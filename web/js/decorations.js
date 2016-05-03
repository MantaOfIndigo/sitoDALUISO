$(document).ready(function(){

                alert.("miao")
        $("#gianluca").mouseover(function(){
                removeDecorationSet();
		addDecorationSet(1);
	});

	$("#books").mouseover(function(){
		removeDecorationSet();
		addDecorationSet(2);
	});

})

        function addDecorationSet(number){
    alert.("viao")
    switch (number) {
        case 1:
            $('body').append('<div id="dec1" class="downdecoration1"></div>');
        ;
        case 2:
            $('body').append('<div id="dec2" class="downdecoration2"></div>');
        ;
        case 3:
            $('body').append('<div id="dec3" class="downdecoration3"></div>');
        ;
        case 4:
            $('body').append('<div id="dec4" class="downdecoration4"></div>');
        ;
    }
}

