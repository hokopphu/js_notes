/**...Closures2a...var...
 * 
 * új execution contextet hozunk létre
 * minden egyes i értéknek, úgy hogy functionba zárjuk j ként
 */

 //egy IIFE-be zárzuk, majd i-t j be töltjük, így meglesz 
 //a reference az különböző j-k hez
 function buildFunctVar(){
    var arr = [];
    for (var i = 0; i<3; i++){
        arr.push(
            (function(j){           
                return function(){
                    console.log(j);
                }
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
                return function(){
                    console.log(j);
                }
            }(i))
        )
    }

*/
console.log(buildFunctVar);

/**
 * (3) [ƒ, ƒ, ƒ]
 */
console.log(buildFunctVar());

/**elérhető az arr tartalma a 
ƒ (){
        console.log(j);
    }
*/
console.log( buildFunctVar()[0] );


/**meghívhatók az arr ban tárolt functionok
 * 0
 * 1
 * 2
 */
 buildFunctVar()[0]();        
 buildFunctVar()[1]();
 buildFunctVar()[2]();
    
var fs = buildFunctVar(); //buildFunctVar : (3) [f, f, f]

/**végrehajthatóak */
fs[0]();    //0
fs[1]();    //1
fs[2]();    //2
