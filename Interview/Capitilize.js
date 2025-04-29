function caps(sentence) {
    const a = sentence.trim().split(" ")
    console.log(a)
    const b =  a.map(element => {
        // console.log(element)
        return element.charAt(0).toUpperCase() + element.slice(1);
    });
    // console.log(b.join(" "), "He")
    return b.join( " ");
}

console.log(caps("hello world my name is uday ss"));