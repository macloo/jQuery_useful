$(document).ready(function() {
// ---------------------------------------------------------------------------

// This deletes a warning that appears if this file does not load: 
$('#warning').remove();

// uses the data attribute that is in the HTML: positioning.html 
// for each circle DIV 
$('#content').on('click', '.circle', function(){
	var where = $(this).data('name'); 
	alert("You clicked " +where+ "!");

});

// ---------------------------------------------------------------------------
});
