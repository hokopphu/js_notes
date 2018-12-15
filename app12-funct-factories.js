/**function factories
 * 
 */

 function makeGreeting(language){
     return function(firstname, lastname){
         if (language === 'hu'){
             console.log('Szia ' + lastname + ' '+firstname);
         }
         if (language === 'en'){
             console.log('Hello '+firstname+' '+lastname);
         }
     }
 }

 /**két különböző closure-t hoz létre */
 var greetHun= makeGreeting('hu');
 var greetEng=makeGreeting('en');

 greetHun('John','Doe');
 greetEng('John','Doe');