console.log("First line console here..!");

async function wait() {
    // await new Promise(resolve => {
        // await  setTimeout(() => {
        //     console.log("Here the wait function");
        //     // resolve();
        // }, 2000);

        await new Promise(resolve => {
            setTimeout(() => {
                console.log("Inside the Promise..!");
                resolve()
            },5000)
        })

        const res = await fetch('https://dummyjson.com/products/1').then(res=> {
            return res;
        }).catch(err=> {
            console.log(err)
        })
    };


// async function main() {
//     await wait();
//     console.log("End of file");
// }

// main();

await wait();
console.log("end of file");

