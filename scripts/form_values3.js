$(document).ready(function() {
// ---------------------------------------------------------------------------

// test to ensure jQuery has loaded 
$('#wrapper').append('<p>Hello!</p>');

// this is verbose; it is intended to be clear enough for beginners to use

// run this when submit button is clicked 
$('#picker').submit(function(e) {
	// look at each child of the form that has the ID picker
	$(this).find( ':input' ).each(function() {
		// above, (this) is the form 
		// below, (this) is the individual form element
		// do only if the form element is a text field 
		if( $(this).attr('type') == 'text' ) {
			// get the name of the element
			$('#result').append( "name: " + $(this).attr('name') );
			// get the value of the element
			$('#result').append( ", value: " + $(this).val() + '<br>');
		// do only if element is checkbox and it is checked 
		} else if ( ($(this).attr('type') == 'checkbox') && 
		  ( $(this).prop('checked') ) ) {
			// get the name of the element
			$('#result').append( "name: " + $(this).attr('name') );
			// get the value of the element - note difference from text fields
			$('#result').append( ", value: " + $(this).attr('value') + '<br>');
		} else if ( ($(this).attr('type') == 'radio' ) && 
		  ( $(this).prop('checked') ) ) {
			// get the name of the element
			$('#result').append( "name: " + $(this).attr('name') );
			// get the value of the element - note difference from text fields
			$('#result').append( ", value: " + $(this).attr('value') + '<br>');
		}
	});
	// get contents of all textarea elements 
	$(this).find( 'textarea' ).each(function() {
		// get the name of the element
		$('#result').append( "name: " + $(this).attr('name') );
		// get the value of the element - note difference from text fields
		$('#result').append( ", value: " + $(this).val() + '<br>');
	});
	e.preventDefault(); // form is not submitted 
});

// ---------------------------------------------------------------------------
}); // do not delete

/* Sources: 

     https://api.jquery.com/submit/
          
     How to structure an HTML form
     https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Forms/How_to_structure_an_HTML_form
     
     My first HTML form
     https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Forms/My_first_HTML_form
     
*/
