
// function isPalindrome(word) {
//     let wordArr = new Set([])
//     for (let i = 0; i < word.length; i++) {
//       wordArr.add(word[i])
      
//     }
//     return wordArr.length[i] === word.length[i]
    
//   }
  
//   console.log(isPalindrome("Panama"))

function isPalindrome(word) {
    let j = word.length - 1
    for (let i = 0; i < (word.length - 1) / 2; i++) {
      if (word[i] !== word[j]) {
        return false
      }
      j--
    }
    return true
  }
  console.log(isPalindrome("hannah"))