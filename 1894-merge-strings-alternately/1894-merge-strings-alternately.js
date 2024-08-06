/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    mergedWord = ""
    wordSize1 = word1.length
    wordSize2 = word2.length
    wordAtual = 1

    for (let i = 0; i < word1.length || i < word2.length; i++) {
        if (wordAtual === 1 && wordSize1 > 0) {
            mergedWord += word1[i]
            wordSize1--
            if (wordSize2 > 0) {
                wordAtual = 2
            }
        }

        if (wordAtual === 2) {
            mergedWord += word2[i]
            wordSize2--
            if (wordSize1 > 0) {
                wordAtual = 1
            }
        }
    }

    return mergedWord
};