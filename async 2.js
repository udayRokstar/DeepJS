console.log("First console message here");


async function test() {
    await new Promise((resolve) => {
        setTimeout(()=> {
            console.log("Inside the test middle call")
            resolve()
        }, 5000)
    })
}

await test()

console.log("End here");



