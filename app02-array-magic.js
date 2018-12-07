/**array mágia
 * app2-array-magic
*/

var arr = [
    1,
    false,
    {
        name: 'Kopi',
        address: 'lakcím'
    },
    function(name){
        var greeting = 'Hello ';
        console.log(greeting + name);
    },
    "valami szöveg",
    [1,2,3]
];

/**mágia */
arr[3](arr[2].name);
/**
Hello Kopi
 */