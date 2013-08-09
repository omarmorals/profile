$(document).ready(function(){
	$( "#section1" ).click(function() {
		$( "#section1" ).removeClass( "section1" ).addClass( "section4" );
		$( "#section2" ).removeClass( "section2" ).addClass( "section3" );
		$( "#section3" ).removeClass( "section3" ).addClass( "section2" );
		$( "#section4" ).removeClass( "section4" ).addClass( "section1" );
    });
    $( "#section2" ).click(function() {
		$( "#section2" ).removeClass( "section2" ).addClass( "section4" );
		$( "#section3" ).removeClass( "section3" ).addClass( "section3" );
		$( "#section4" ).removeClass( "section4" ).addClass( "section2" );
		$( "#section1" ).removeClass( "section1" ).addClass( "section1" );
    });
    $( "#section3" ).click(function() {
		$( "#section3" ).removeClass( "section3" ).addClass( "section4" );
		$( "#section4" ).removeClass( "section4" ).addClass( "section3" );
		$( "#section1" ).removeClass( "section1" ).addClass( "section2" );
		$( "#section2" ).removeClass( "section2" ).addClass( "section1" );
    }); 
    $( "#section4" ).click(function() {
		$( "#section4" ).removeClass( "section1" );
		$( "#section1" ).removeClass( "section2" );
		$( "#section2" ).removeClass( "section3" );
		$( "#section3" ).removeClass( "section4" );
    }); 





});
