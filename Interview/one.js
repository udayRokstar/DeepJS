function reverseString(str) {

    // return str.split("").reverse().join("");
    // let b= str.split("").reverse();
    // console.log(b, "ss")

    // return str.split(/(\s+)/)
    return str.split(/(\s+)/)
    .map(part => {
        return part.trim()? part.split('').reverse().join(''):part;
    }).join('')

}

console.log(reverseString("Test World  "))