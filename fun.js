(function () {
  function init() {
    $( "#form2" ).fadeOut();
    let result = '';
    $( "#form1" ).submit(function( event ) {
      $( "#form1" ).fadeOut();
      $( "#form2" ).fadeIn();
     result = $( "#text" ).val();     
    });
    $( "#form2" ).submit(function( event ) {
      $( "#form2" ).fadeOut();
     result +=  $( "#name" ).val(); 
     $( "#span" ).text( result );    
    });
  }
  function greeting(greeting) {
    return function (name) {
      return (greeting + ' ' + name);
    }
  }

  let currentusername = greeting(text);
  currentusername(name);
  init();
})();
