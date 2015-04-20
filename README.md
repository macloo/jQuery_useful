#Some useful jQuery for storytelling

This collection will probably grow over time.

##Loading external HTML files ([view](http://macloo.github.io/jQuery_useful/index.html))

*index.html, scripts/load_external_html.js* - Have you ever wanted to keep 
everything on one Web page (like a typical Web app), but you need to add a 
larger amount of content than just a few lines? Well, jQuery is perfect for 
doing that. *index.html* links to the stylesheets, JavaScript and jQuery. 
*scripts/load_external_html.js* makes the two buttons load different, wholly 
external HTML files:

* [stuff1.html](http://macloo.github.io/jQuery_useful/stuff1.html)
* [stuff2.html](http://macloo.github.io/jQuery_useful/stuff2.html)

It's important to note that the external HTML files do not need HEAD information 
or links to the CSS or JS files. When loaded into *index.html* they will take on 
the styles of that page. 

##Positioning and sensing DIVs ([view](http://macloo.github.io/jQuery_useful/positioning.html))

*positioning.html, scripts/positions.js* - You want to overlay some circles or other visuals on top of a static graphic (in this case, it's a map), and you want something to open (or pop up) when an overlaid item is clicked. Most of this is accomplished with CSS (see *styles/positioning.css*), but the action happens with jQuery - making something happen when you click the overlaid item. In this case, an alert dialog box pops up. You are not limited to alert boxes! Use jQuery to make *anything* happen when the overlaid item is clicked. 

