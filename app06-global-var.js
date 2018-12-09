/**Így el lehet érni globális azonos nevű válltozót
 *  egy másik execution contexből */
(function(){
    let local = 'local';
    let global = 'local';
    window.global = 'global'; //így vagy létrehozza, 
    console.log(local);       //ha már van új értéket ad neki
    console.log(global);
    console.log(window.global);
}());
console.log(global);
