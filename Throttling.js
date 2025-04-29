// function throttle(func, delay) {
//     let lastcall = 0;
//      return function(...args) {
//         const now = new Date().getTime();
//         console.log(now - lastcall, ">", delay)

//         if(now - lastcall > delay) {
//     console.log("Last call variable value", now - lastcall)

//             lastcall = now;
//             func.apply(this, args)
//         }
//      }
// }

// function test(num) {
//     console.log("Test function console", num)
// }

// const ping = throttle(test, 2000)

// // ping(44)
// // ping(444)

// setInterval(() => {
// ping(4)
    
// }, 1000);


function test() {
    let a = 0;

    return function () {
        console.log(a)
        a++;
    }
}

const b = test();
b()
b()
b()