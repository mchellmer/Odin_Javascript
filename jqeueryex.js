// Set up document for jquery
$(document).ready(function() {
  console.log('ready!');
  
  // Select CSS elements with jquery
  $( '#header' ); // select the element with an ID of 'header'
  $( 'li' );      // select all list items on the page
  $( 'ul li' );   // select list items that are in unordered lists
  $( '.person' ); // select all elements with a class of 'person'

  // Create new element
  $( '<p class="greet">Hello!</p>');
  
  // ************************* Traversing **************************
  /*
  <ul> parent of li, ancestor of all contents
    <li> child of ul, sibling of other li
        <span> descendant of ul
            <i>Foo</i>
        </span>
    </li>
    <li>Bar</li>
  </ul>
  */
  
  // Select only certain criteria
  var listItems = $('li');
  var special = listItems.filter( '.class' ); // only selects items with class
  var notspecial = listItems.not( '.class' ); // only selects items with class
  var hasSpans = listItems.has( 'span' ); // selects DOMs with spans
  var listItem = $( 'li' ).first(); // also: .last()
  var siblings = listItem.siblings();
  var nextSibling = listItem.next(); // also: .prev()
  var list = listItem.parent();
  var listItems = list.children();
  var allListItems = list.find( 'li' );
  var modules = listItem.parents( '.module' );
  var module = listItem.closest( '.module' );

  // Add a class
  var listItems = list.find('li');
  listItems.addClass( 'class');
});