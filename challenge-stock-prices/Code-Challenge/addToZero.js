// Starting array
let array = [28, 43, -12, 30, 4, 0, 12]

// Write your solution below:
let numZero = false
// let result = true;
for (let i = 0; i < array.length; i++) {
    for(let x= 0; x < array.length; x++){
        if(array[i] + array[x] === 0){
            numZero = true
        }
        if(array[i] + array[i] === 0){
            numZero = false
        }
    }
}
console.log(numZero);
//     if (numbers[i] <= 0) {
//         result = false;
//         break;
//     }
// }
// console.log(result);