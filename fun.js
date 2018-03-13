$(document).ready(function () {
  function greeting(greeting) {
    return function (name) {
      console.log(greeting + ' ' + name);
    }
  }
});
let currentusername = greeting(getElementsByName("text").value);
currentusername(document.getElementsByName("name").value);
