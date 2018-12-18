var person ={
    firstname: 'John',
    lasname: 'Doe',
    getFullName: function(){
        var fullname = this.firstname + ' ' + this.lasname;
        return fullname;
    }
}

/**ha ezt meghívjuk hibát jelez, mert a this a global objectre mutat */
var logName = function(lang1, lang2){
    console.log('Logged: '+ this.getFullName());
}

/**.bind használja a function-t mint egy object-et,
 * nem hasznéljuk a ()-mert az visszadna egy értéket,
 * fucnName.bind(something)
 * a .bind visszaad egy új másolatot, az eredeti function-ról,
 * ezért a this értéke a something paraméter lesz, itt a person
 */
var logPersonName= logName.bind(person);

logPersonName();

/**vagy 
 * itt a this egyből a person lesz
*/
var logName = function(lang1, lang2){
    console.log('Logged: '+ this.getFullName());
}.bind(person);

logName();
