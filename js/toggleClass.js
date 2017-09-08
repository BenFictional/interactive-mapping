/////////////////////////////////////////
/////// CLICK TO REVEAL CONTENT /////////
/////////////////////////////////////////

// Add 'button' class to the element you want people to click AND to the 'X' span in the pop-up window.
// Add 'pop-up' class to the content you want to reveal.
// Or use your own class names.

$(document).ready(function() {

  $('.button').on('click', function(e) {
    e.preventDefault();
    $('.pop-up').toggleClass('active');
  });

});

/* Paste the HTML below into the index.html file for a sample pop-up window, and check the relevent CSS in reference.css

<div class="pop-up">
  <span class="exit button">X</span>
  <h1>This is some content.</h1>
</div>

*/
