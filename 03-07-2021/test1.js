const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
var a = 0;
var b = 0;

readline.question("Enter the first number ? ", function(val1) {
    a = parseInt(val1);
    readline.question("Enter the second number ? ", function(val2) {
        b = parseInt(val2);
        // a = a+b;
        // b = a-b;
        // a = a-b;
        // console.log(`${a},${b}`);

        for (var i=a;i <= b;i++) {
            console.log(`${i}\n`);
        }
        readline.close();
    });
});

/*
0 1 1 2 3 5 8 13 21 34 55 89 144 233 377
*/