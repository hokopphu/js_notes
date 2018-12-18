/** .bind with arguments*/

var person ={
    firstname: 'John',
    lasname: 'Doe',
    getFullName: function(){
        var fullname = this.firstname + ' ' + this.lasname;
        return fullname;
    }
}

var logName = function(lang1, lang2){
    console.log('Logged: '+ this.getFullName());
    console.log('Arguments: ' + lang1 + ' ' + lang2);
    console.log('--------------');
}

var logPersonName= logName.bind(person);

logPersonName();
/**
 * Logged: John Doe
 * Arguments: undefined undefined
 * --------------
 */
logPersonName('en');
/**
 * Logged: John Doe
 * Arguments: en undefined
 * --------------
 */
