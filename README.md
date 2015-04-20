#Some useful jQuery for storytelling

This collection will probably grow over time.

##Loading external HTML files

*index.html, scripts/load_external_html.js* - Have you ever wanted to keep everything on one Web page 
(like a typical Web app), but you need to add a larger amount of content that just a few lines? Well, jQuery 
is perfect for doing that. *index.html* links to the stylesheets, JavaScript and jQuery. *scripts/load_external_html.js* 
makes the two buttons load different, wholly external HTML files:

* [stuff1.html](http://macloo.github.io/jQuery_useful/stuff1.html)
* [stuff2.html](http://macloo.github.io/jQuery_useful/stuff2.html)

It's important to note that the external HTML files do not need HEAD information or links to the CSS or JS files. When 
loaded into *index.html* they will take on the styles of that page. 
