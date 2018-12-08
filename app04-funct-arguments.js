/**
 * app4-funct-arguments
 */

function greet(firstname, lastname, language){

    if(arguments.length===0){
        console.log('missing patameters');
        console.log('.....next......');
        return;
    }

    console.log(firstname);
    console.log(lastname);
    console.log(language);
    console.log('.....next......');

}
function greet2a(firstname, lastname, language){

    if(arguments.length===0){
        console.log('missing patameters');
        console.log('.....next......');
        return;
    }

    firstname= firstname || 'miska';
    lastname = lastname || 'kugli';
    language = language || 'böszörmény';

    console.log(firstname);
    console.log(lastname);
    console.log(language);
    console.log('.....next......');
}
function greet2b(firstname, lastname, language){


    firstname= firstname || 'miska';
    lastname = lastname || 'kugli';
    language = language || 'böszörmény';

    if(arguments.length===0){
        console.log('missing patameters');
        console.log('.....next......');
        return;
    }

    console.log(firstname);
    console.log(lastname);
    console.log(language);
    console.log('.....next......');
}
function greet3(firstname='istuka', lastname='krumpli', language='jász'){

    if(arguments.length===0){
        console.log('missing patameters');
        console.log('.....next......');
        return;
    }

    console.log(firstname);
    console.log(lastname);
    console.log(language);
    console.log('.....next......');

}
greet();
/**
 missing parameters
 .....next.....*/

 greet2a();
 /**
 missing parameters
 .....next.....*/

 greet2b();
 /**
 missing parameters
 .....next.....*/

greet3();
/**
 missing parameters
 .....next.....*/