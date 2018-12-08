/**
 * app3-funct-default-values
 */

function greet(firstname, lastname, language){

    console.log(firstname);
    console.log(lastname);
    console.log(language);
    console.log('.....next......');

}
function greet2(firstname, lastname, language){
    firstname= firstname || 'miska';
    lastname = lastname || 'kugli';
    language = language || 'böszörmény';

    console.log(firstname);
    console.log(lastname);
    console.log(language);
    console.log('.....next......');
}
function greet3(firstname='istuka', lastname='krumpli', language='jász'){

    console.log(firstname);
    console.log(lastname);
    console.log(language);
    console.log('.....next......');

}

greet();
/** 
 undefined
 undefined
 undefined
 .....next......*/

 greet('jancsi');
 /** 
 jancsi
 undefined
 undefined
 .....next......*/

 greet('jancsi','suttyó','palóc');
 /**
  jancsi
  suttyó
  palóc
  .....next...... */

  greet("", null, undefined);
  /**
   
  null
  undefined
   .....next......*/

  greet(0,NaN,'');
  /**
   0
   NaN

   .....next......*/

  greet2("", null, undefined);
  greet2(0,NaN,'');
  /**
   miska
   kugli
   böszörmény
   .....next......*/

   greet3("", null, undefined);
   /**
    
   null
   jász
    .....next......*/

    greet3(0,NaN,'');
    /**
     0
     NaN

     .....next......*/
