// let luckyNums = function(n){
//     let arr = [];
//     let randNum = Math.floor(Math.random() *10)
//     for (let i; i < n; i++){
//         arr.push(randNum)
//     }
//     return arr
// }
// console.log(luckyNums(4))

function luckyNumbers(n) {
    let array  =[];
    for (let i = 0; i < n; i++){
    array.push(Math.floor(Math.random() * 10) +1)
  
    }
    return array;
  }
  
  console.log(luckyNumbers(4))
  