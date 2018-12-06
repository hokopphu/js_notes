/**functions and objects 
 * app1-this-funct-objs
*/

var anonimusGreet= function(){
    console.log('hi');
}
anonimusGreet();
var copy = anonimusGreet;

copy();

anonimusGreet = function(){
    console.log('by');
}
 anonimusGreet();

 copy();

 var c = {greeting:'hi'}
 var d;
 d=c;
 console.log(d);
 c={greeting: 'by'}
 console.log(d);
 console.log(c);

 c.greeting='by';
 console.log(c);
 console.log(d);

 var e={
     greeting:'valami'
 }
 function th(){
     console.log(this);
     function th(){
         console.log(this);
     }
     th();
 }
 th();
/** objektumoknál más a this */

/**itt this f-re mutat */
 var f ={
     name: 'the f object',
     log: function(){
         console.log(this);
     }
 }
 f.log();
/**itt this g-re mutat, ezért saját magára tud hatni */
 var g ={
    name: 'the g object',
    log: function(){
        this.name= 'updated g object';
        console.log(this);
    }
}
g.log();

/**itt this i-re mutat, amikor az első szinten van
 * de a windowra, amikor a funcionon belüli functionban van
 */
var i ={
    name: 'the i object',
    log: function(){
        this.name= 'updated i object';
        console.log(this);
        var setname= function(newname){
            this.name= newname;
            /**így ez a this a windowra mutat... ott állít name key-t */
        }
        setname('Updated i again!');
        console.log(this);
    }
}
i.log();

/**itt a functionban átadtuk this-t selfnek, így self mindig a j re mutat */
var j ={
    name: 'the j object',
    log: function(){
        var self=this; /**itt self nek adtuk a this-t így thisre mutat */

        self.name= 'updated j object';
        console.log(self);

        var setname= function(newname){
            self.name= newname;
            /**így ez a self a j objektumra mutat... itt állít be name key-t */
        }
        setname('Updated j again!');
        console.log(self);
    }
}
j.log();

