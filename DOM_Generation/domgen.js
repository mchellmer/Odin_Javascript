// This jquery builds DOM elements for a fictitious restaurant's webpage
$(document).ready(function() {
  var content = $('#content');
  // Generate a main page with tags to move to menu and contact pages
  content.append("<img src='TB.jpg'>");
  content.append("<h2 class='index'>Thanks Obama!!!</h2>");
  content.append("<p class='index'>Thanks Obama!!! has been delivering the tastiest food in the land for the last billion years.</p>");
  content.append("<div class='links'><span id='contact'>Contact</span> <span id='menu'>Menu</span></div>");
  
  // Jquery that changes content when tags are click
  $("#menu").click(function() {
    $('p').replaceWith("<ul><lh>Menu</lh><li>Food</li><li>Drinks</li></ul>");
    $('.links').replaceWith("<div class='links'><span id='main'>Click on Obama to go back to main</span></div>");
  });
  
  $("#contact").click(function() {
    $('p').replaceWith("<ul><lh>Contact Info</lh><li>phone: 555-5555</li><li>email: TB@gm.com</li></ul>");
    $('.links').replaceWith("<div class='links'><span id='main'>Click on Obama to go back to main</span></div>");
  });
  
  $('img').click(function() {
    location.reload();
  });
});