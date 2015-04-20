$(document).ready(function() {
// ---------------------------------------------------------------------------


// you have two buttons, one with ID loader1, the other with ID loader2
// you have two external HTML files, one named stuff1.html and
// the other named stuff2.html
// this script allows you to load the external files into a div 
// with the ID content
// buttons and DIV are in index.html


$('#loader1').on('click', function() {
	$('#content').load('stuff1.html');
});

$('#loader2').on('click', function() {
	$('#content').load('stuff2.html');
});

// This deletes a warning that appears if this file does not load: 
$('#warning').remove();


// from: http://stackoverflow.com/questions/17636528/how-do-i-load-an-html-page-in-a-div-using-javascript 

// error in Chrome when running locally? See: http://ahmed.amayem.com/solution-to-chrome-cross-origin-requests-are-only-supported-for-protocol-schemes-http-data-chrome-chrome-extension-https-chrome-extension-resource/ 
// ---------------------------------------------------------------------------
});
