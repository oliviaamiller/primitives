function anagrams(wordOne, wordTwo) {
    
    const wordOneArray = wordOne
    // turn the string into an array of letters
        .split('')
    // put those letters in alphabetical order
        .sort()
    // join the array back into a string
        .join('');

    const wordTwoArray = wordTwo
        .split('')
        .sort()
        .join('');

  return wordOneArray === wordTwoArray ? true : false;
}


console.log(anagrams('superintended', 'unpredestined'));
console.log(anagrams('pictorialness', 'documentarily'));