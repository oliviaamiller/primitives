function anagrams(wordOne, wordTwo) {
    // find length of two words, are they equal?
    // look for matching letters
    // return true or false
    
    const wordOneArray = wordOne
        .split('')
        .sort()
        .join('');

    const wordTwoArray = wordTwo
        .split('')
        .sort()
        .join('');

  return wordOneArray === wordTwoArray ? true : false;
}


console.log(anagrams('superintended', 'unpredestined'));
console.log(anagrams('pictorialness', 'documentarily'));