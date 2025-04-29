function thorttle(fn, delay) {
    let call = 0;

    return function(...arg) {
        let now = Date.now();

        if(now - call > delay) {
            call = now;
            fn.apply(this,arg)
        }
    }
}

const sayHello = (name) => {
    console.log("This is call function called after sometime", name)
}
 
const throttleFun = thorttle(sayHello, 0);

throttleFun("Uday");
throttleFun();
throttleFun();

setTimeout(() => {
    throttleFun("inside")
}, 2500)

throttleFun("Last");
