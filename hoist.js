function test() {
    let a =0;
    return function() {
        console.log("number of time called",a)
        a++;
    }
}

const main = test();

main();
main();
main();