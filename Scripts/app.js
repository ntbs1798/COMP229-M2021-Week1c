"use strict";
(function(){
    function Start()
    {
        let myVar = 20;
        console.log("My number is " + myVar);
    
        for (let index = 0; index < myVar; index++) {
            console.log("Your number is " + index);
            
        }
    }

    window.addEventListener("load", Start);
    
})();
