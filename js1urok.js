"use strict";
function mul() {
     var s = 0
     for(var i=0; i<arguments.length; i++)
      if(typeof arguments[i] == 'number'){
         s += +arguments[i]
      }       
     
     return s
}
console.log(mul(1, "str", 2, 3, true)); // 6
console.log(mul(null, "str", false, true)); // 0














