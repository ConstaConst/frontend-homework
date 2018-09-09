'use strict';


const anagram = words => {
    if (!Array.isArray(words) ||
        words.some(word => { return typeof word !== 'string'; })) {
        return;
    }

    const anagrams = {};
    words.forEach(word => {
        const key = word.toLowerCase().split('').sort().join('');
        anagrams[key] = (anagrams[key] || []).concat(word);
    });

    const result = [];
    Object.values(anagrams).forEach(group => {
        if (group.length >= 2) {
            result.push(group.sort());
        }
    });

    return result.sort();
};
