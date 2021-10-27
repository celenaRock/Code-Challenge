function uniqueCharacters(str)
{
     
    // If at any time we encounter 2
    // same characters, return false
    for(let i = 0; i < str.length; i++){
        for(let j = i + 1; j < str.length; j++){
            if (str[i] == str[j]){
                return false;
            } else {
 
    // If no duplicate characters
    // encountered, return true
    return true;
            }
        }
    }

}
console.log(uniqueCharacters("Moonday"))