const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
var a = 0;
var b = 0;
// readline.question('Enter the first value?', value => {
//     a = value;
//     console.log(`${a}`);
//     readline.close();
// });
readline.question("Enter the first number ? ", function(val1) {
    a = val1;
    readline.question("Enter the second number ? ", function(val2) {
        b = val2;
        console.log(`${parseInt(a)+parseInt(b)}`);
        readline.close();
    });
});


// readline.question('Enter the first value?', value => {
//     b = value;
//     console.log(`${b}`);
//     readline.close();
// });

