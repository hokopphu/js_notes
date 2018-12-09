/**
 * IIFE-s Inmediately Invoked Functions Expressions
 * app5-inm-inv-funct-exp
 */

 /**
  * function statement-nem hajtódik végre egyből, elraktározódik a memóriában
  * greet : visszaadja a tartalmát
  * greet() : végrehajtódik
  */

  function greet(name='krumpli'){
      console.log("Helló " + name);
  }
greet();

/**itt használunk egy expression-t,berakjuk egy változóba
 * majd utána meghívjuk, később elérhető ismét:
 * greetFunc : visszaadja a tartalmát
 * greetFunc() : végrehajtódik
 */
let greetFunc = function(name='burgonyka'){
    console.log('Helló-belló '+name);
};
greetFunc();

/**Inmediately Invoked Function Expression
 * itt egyből meghívjuk az expressiont - később már nem érjető el a nevével
 * greetFuncExp : undefined
 * greetFuncExp() : Uncaught TypeError: greetFuncExp is not a function
*/
let greetFuncExp = function(name='forró-hasáb'){
    console.log("Cső "+name);
}();

/**Returning value */
let greetFEReturn = function(name='püré'){
    return "Viszlát "+name;
};

/**ƒ (name){
    return "Viszlát "+name;
} */
console.log(greetFEReturn);

/** 
 * Viszlát püré
*/
console.log(greetFEReturn());

/**ha egyből meghívjuk, lefut és a retured value kerül a változóba
 * tehát: Viszlát tepsis
 */
let greetFEReturnInv = function(name='tepsis'){
    return "viszlát " + name;
}();//...itt tudunk másik nevet megadni...

/**Viszlát tepsis */
console.log(greetFEReturnInv);

/** Uncaught TypeError: greetFEReturnInv is not a function
    ...nem tudjuk megválltoztatni a nevet...*/
//console.log(greetFEReturnInv());

/**IIFE 
 * Üdv nevesincs
*/
(function(name='nevesincs'){
    console.log('Üdv '+ name);
}());//...itt tudunk másik nevet megadni...
/**a végén lévő ()-párt rakhatjuk belülre meg kívülre is-nincs különbség */