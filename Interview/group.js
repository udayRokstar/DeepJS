// function groupBy(arr, key) {
//     const result = {}
//     for(const item of arr) {
//         // console.log(item)
//         const keyvalue = item[key]
//         // console.log(keyvalue)
//         if (!result.hasOwnProperty(keyvalue)) {
//             result[keyvalue] = []
//         }
//         result[keyvalue].push(item)
//     }

//     return result
// }


function groupBy(arr, key) {
    const result = {}

    for(const item of arr) {
        const keyValue = item[key];
        if(!result.hasOwnProperty(keyValue)) {
            result[keyValue] = []
        }
        result[keyValue].push(item)
    }
    return result;
}

const users = [
    {name: 'Alice', age: 23 },
    {name: 'max', age: 26 },
    {name: 'shiv', age: 23 },
]

console.log(groupBy(users, 'age'))