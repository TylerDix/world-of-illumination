// Toggle nav menu

// let mainNav = document.getElementById('js-menu');
// let navBarToggle = document.getElementById('js-navbar-toggle');

// navBarToggle.addEventListener('click', function () {
    
//     mainNav.classList.toggle('active');
// });

// $( "#js-navbar-toggle" ).click(function() {
//   $( "#js-menu" ).slideToggle( "fast", function() {
//     // Animation complete.
//   });
// });

$( document ).ready(function() {
$( "#js-navbar-toggle" ).click(function() {
  $( "#js-menu" ).slideToggle( "fast", function() {
    // Animation complete.
  });
});
});