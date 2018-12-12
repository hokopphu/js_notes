/**...Closures2...var... */

function buildFunctVar(){
    var arr = [];
    for (var i = 0; i<3; i++){
        arr.push(
            function(){
                console.log(i);
            }
        )
    }
    return arr;
}

/**elérhető az arr tartalma: 
 * consolra
*/
console.log(
    buildFunctVar()[0] //log: f(){ console.log(i)}
    );
/**végrehajtani a functiont  */
    buildFunctVar()[0]();        //3


    
var fs = buildFunctVar(); //buildFunctVar : (3) [f, f, f]

fs[0]();    //3
fs[1]();    //3
fs[2]();    //3
/**  fs : (3) [f, f, f]
 *   fs[0] : f (){
 *          conole.log(i)
 *      }
 * ...mivel a buildFunctVar már lefutott,
 * ezért a closureban az i értéke maradt meg,
 * ami 3--- a for ciklus miatt és az arr[f0,f1,f2] értéke
*/