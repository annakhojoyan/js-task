// (function () {
//   function init() {
//     $( "#surname" ).fadeOut();
//     let result = '';
//     $('#name').keypress(function(e) {
//       if(e.which == 13) {
//           console.log($( "#name" ).val());return;
//       }
//   });
//     $( "#form1" ).on('submit', function( event ) {
//       console.log("sgfjgjhf"); 
//       return;
//       $( "#form1" ).fadeOut();
//       $( "#form2" ).fadeIn();
//      result = $( "#text" ).val();     
//     });
//     $( "#form2" ).on('submit', function( event ) {
//       $( "#form2" ).fadeOut();
//      $( "#name" ).val(result); 
//      console.log(result);
//      $( "#span" ).text( result );    
//     });
//   }
//   function greeting(greeting) {
//     return function (name) {
//       return (greeting + ' ' + name);
//     }
//   }
//   //let currentusername = greeting(text);
//   //currentusername(name);
//   //init();
// })();
$("#surname").fadeOut();
var result = '';
$('#name').keypress(function (e) {
  if (e.which == 13) {
    $("#surname").fadeIn();
    $("#name").fadeOut();
    result = $("#name").val();
  }
});
$('#surname').keypress(function (e) {
  if (e.which == 13) {
    $("#surname").fadeOut();
    result += " " + $("#surname").val();
    $("#span").text(result);
  }
});
