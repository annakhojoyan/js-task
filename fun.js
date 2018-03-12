function greeting(greeting) {
   return function (name){
        console.log(greeting + ' ' + name);
   }
  }
let currentusername = greeting('Hello');
currentusername('Ann');
