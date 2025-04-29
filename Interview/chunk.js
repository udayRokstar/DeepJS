// function chunkArray(array, n) {

//     let result = [];
//     for(let i =0; i< array.length; i += n) {
//         result.push(array.slice(i, i+ n))
//     }
//     return result;

// }

// const result = chunkArray([1,2,3,4,5,6,7], 2)
// console.log(result)


// function anagram(a, b) {

//     console.log("This", a.toLowerCase().split('').sort().join(''), b.toLowerCase().split('').sort().join(''))
//   if(a.toLowerCase().split('').sort().join('') === b.toLowerCase().split('').sort().join('')){
//     return true
//   }
//   return false
// }

// console.log(anagram("Triangle", "Integral"));


// ------------------------------------Missing value in array -------------------------------------------//

// function findMissingNumber(nums) {
//     // Your implementation
//   const n = nums.length;
//   const expectedSum = (n * (n + 1)) / 2;
//   const actual = nums.reduce((acc, num) => acc + num);
//   return expectedSum - actual;
// }
// //    let a =  arr.filter(val=> {
// //         return !arr.includes(val)
// //     })
// //     console.log(a)


// console.log(findMissingNumber([0,1,2,4,5]));


// -------------------------------------------- Owels ---------------------------------------------------//

// function countOw(str) {
//     // return str.includes(['a','e','i','o','u']);

//     let arr = str.toLowerCase().split('');
//     let count = 0;
//     console.log(arr)
//     for(let i=0; i< str.length; i++) {
//         if((['a','e','i','o','u'].includes(arr[i]))){
//             count ++;
//         }
//     }
//     return count;
// }

// console.log(countOw("AEIOU"))