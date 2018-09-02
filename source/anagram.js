'use strict';


const anagram = words => {
    if (!Array.isArray(words)) {
        return;
    }

    let anagrams = {};
    words.forEach(function (word) {
        const key = word.toLowerCase().split('').sort().join('');
        if (key in anagrams) {
            anagrams[key].push(word);
        } else {
            anagrams[key] = [word]
        }
    });

    let result = [];
    for (const key in anagrams) {
        if (anagrams[key].length >= 2) {
            result.push(anagrams[key].sort());
        }
    }

    return result.sort();
};
