/**...Closures... 
 * létrehozunk egy functiont, ami visszaad egy functiont
*/

function greet(mitmondjak = 'csocsi'){
    return function(name = 'paprika'){
        console.log(mitmondjak +' '+ name)
    }
}
/**...ha nem adok meg ()-t, visszaadja a tartalmát...
 * ƒ greet(mitmondjak = 'csocsi'){
    return function(name = 'paprika'){
        console.log(mitmondjak +' '+ name)
    }
} */
greet;

/** ... ha csak egy zárójelet adok meg, akkor 
 * visszadja a return function tartalmát...
 * ƒ (name = 'paprika'){
        console.log(mitmondjak +' '+ name)
    }*/
greet();
greet('uborka');


/**... ha mindkét()()-t megadom, akkor működik csak...
 * a második ()el hívom meg a return functiont
 * csocsi paprika
 * uborka paprika
 * uborka béla
 */
greet()();
greet('uborka')();
greet('uborka')('béla');

/**...a greet function már lefutott, de a memóriában
 * elérhetőek a benne lévő változók értékei a benne meghívott functionnak
 * az execution context már lefutott, de a válltozók referencét
 * átadta a következő functionnak, mint outer reference-et
 */

/**csocsi pipi */
let csocsizo = greet();
csocsizo('pipi');

/**pápá paprika */
let papazo = greet('pápá');
papazo();