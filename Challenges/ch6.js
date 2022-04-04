function uniqueChar(string) {
    const chars = string
        .split('')
        .sort();
    
    for (let i = 0; i < chars.length; i++) {
        const current = chars[i];
        const prev = chars[i - 1];
        const next = chars[i + 1];

        if (current !== prev && current !== next) 
        return current;
    }

    return '_';
}

console.log(uniqueChar('abdacabad'));
console.log(uniqueChar('abacabaabacaba'));
console.log(uniqueChar('abacabad'));
