$(document).ready(function() {
// ---------------------------------------------------------------------------

// This deletes a warning that appears if this file does not load: 
$('#warning').remove();

// click the form's submit button and this runs:
$('#myForm').submit(function() {
	// each input or textarea has an ID, such as food or why
	var food = $('#food').val();
	var why = $('#why').val();
    $('#write').text("Your favorite food is " +food+ " -- " +why+ ".");
	return false;
});

// ---------------------------------------------------------------------------
});
