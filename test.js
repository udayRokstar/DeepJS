function salutation() {
    // let name = name;

    function greet(name) {
        console.log(`Hello ${name}!`);
    }
    return greet;
}

let wish = salutation();
console.log(wish); // [Function: greet]
wish("First");



wish("Last")