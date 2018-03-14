(function () {
  function init() {
    $( "#form2" ).fadeOut();
    let result = '';
    $( "#form1" ).submit(function( event ) {
      $( "#form1" ).fadeOut();
      $( "#form2" ).fadeIn();
     result = $( "#text" ).val();     
    });
    console.log("ahjdhghagdhghjd")
    $( "#form2" ).submit(function( event ) {
      $( "#form2" ).fadeOut();
     result +=  $( "#name" ).val(); 
     $( "span" ).text( result ).fadeIn();    
    });
  }
  function greeting(greeting) {
    return function (name) {
      console.log(greeting + ' ' + name);
    }
  }

  let currentusername = greeting(text);
  currentusername(name);
  init();
})();

