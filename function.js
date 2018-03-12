function greeting(greeting1) {
   return function a(greeting2){
        console.log(greeting1 + ' ' + greeting2);
   }
  }
let b = greeting("Hello");
b("Ann");