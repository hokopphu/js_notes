/**closures and callbacks
 * sayHiLater elindítja a setTimeout-ot
 * sayHayLater véget ér,
 * setTimeout fut 3 mp-ig, majd meghívja (CALLBACK)a benne lévő anonim functiont,
 * az keresi a greeting válltozót, ami egy closureba van zárva 
 */

function sayHiLater(){

    var greeting = 'Hi!';

    setTimeout(function(){

        console.log(greeting);

    }, 3000);
}
sayHiLater();
/**Callback egy functionnak egy másik function-t adunk, hogy
 * meghívja, amint végzett
 */
/**itt deklaráljuk a fő functiont */
function tellMeWhenDone(callback){
    /**itt valami egyébb elvégzendő munka van */

    callback();   //azt a function-t futtatja, amit adunk neki,meghíváskor
        
}

/**itt meghívjuk a fő functiont és
 * adunk neki callback function-t
 */
tellMeWhenDone(function(){
    console.log('Done!');
});

tellMeWhenDone(function(){
    alert('Done!');
});