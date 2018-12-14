/**...Closures2a...var...
 * 
 * ...elrontott... nincs...return...
 * 
 * új execution contextet hozunk létre
 * minden egyes i értéknek, úgy hogy functionba zárjuk
 */

 //egy IIFE-be zárzuk, majd i-t j be töltjük, így meglesz 
 //a reference az különböző j-k hez
function buildFunctVar(){
    var arr = [];
    for (var i = 0; i<3; i++){
        arr.push(
            (function(j){           
                console.log(j);
            }(i))
        )
    }
    return arr;
}
/** elérhető a tartalma
 * ƒ buildFunctVar(){
    var arr = [];
    for (var i = 0; i<3; i++){
        arr.push(
            (function(j){           
                console.log(j);
            }(i))
        )
    }

*/
console.log(buildFunctVar);

/**0
 * 1
 * 2
 * Array3
 */
console.log(buildFunctVar());

/**elérhető az arr tartalma a 
 * consolra de lefut a 3 belső consol.log is
 * 0
 * 1
 * 2
 * undefined
*/
console.log( buildFunctVar()[0] );


/**nem lehet végrehajtani a functiont mert az arr[]-nak 3 udefined értéke van */
 //   buildFunctVar()[0]();        


    
var fs = buildFunctVar(); //buildFunctVar : (3) [f, f, f]

/**nem végrehajthatóak, csak console.loggal */
fs[0];    //undefined
fs[1];    //undefined
fs[2];    //undefined
