$("a").click(function(){
    $( ".highlight" ).toggleClass( "highlight" );
    $( this ).toggleClass( "highlight" );
  });

  $(document).ready(function() {
    $('.toggle-nav').click(function(e) {
      $(this).toggleClass('active');
      $('.navigation ul').toggleClass('active');
  
      e.preventDefault();
    });
  });
