'use strict';


const anagram = words => {
    if (!Array.isArray(words)) {
        return;
    }
    for (const word of words) {
        if (typeof word !== 'string') {
            return;
        }
    }

    const anagrams = new Map();
    words.forEach(function (word) {
        const key = word.toLowerCase().split('').sort().join('');
        if (anagrams.has(key)) {
            anagrams.get(key).push(word);
        } else {
            anagrams.set(key, [word])
        }
    });

    const result = [];
    for (const group of anagrams.values()) {
        if (group.length >= 2) {
            result.push(group.sort());
        }
    }

    return result.sort();
};
