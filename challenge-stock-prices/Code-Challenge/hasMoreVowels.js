const hasMoreVowels = word => {
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let vowelCount = 0
    let vowelsNeeded = word.length / 2
    let wordSplit = word.toLowerCase().split('')
  
    for (let i = 0; i < wordSplit.length; i++) {
      let letter = wordSplit[i]
  
      if (vowels.includes(letter)) {
        vowelCount++
      }
  
      if (vowelCount > vowelsNeeded) {
        return true
      }
    }
  
    return false
  }

  hasMoreVowels("moose")