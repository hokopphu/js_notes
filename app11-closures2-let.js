/**...Closures2b...Let...
 * mivel a let block válltozó, ezért a for ciklusban van a scopeja mindig
 *  egy új jön létre
 */

function buildFunctLet(){
    var arr = [];
    for (let i = 0; i<3; i++){
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
    buildFunctLet()[0] //log: f(){ console.log(i)}
    );
/**végrehajtani a functiont  */
    buildFunctLet()[0]();        //0


    
var fs = buildFunctLet(); //buildFunctLet : (3) [f, f, f]

fs[0]();    //0
fs[1]();    //1
fs[2]();    //2
/**  fs : (3) [f, f, f]
 *   fs[0] : f (){
 *          conole.log(i)
 *      }
 * ...mivel a buildFunctLet már lefutott,
 * ezért a closureban az i értékei maradtak meg,
 * ami 0,1,2 a for ciklusban alkalmazott let miatt
 * ami minden egyes lefutáskori értékét megőrizte a closure miatt
 * és az arr[f0,f1,f2] értéke
*/