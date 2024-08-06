/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let sLen = s.length
    let tLen = t.length

    if (s === "") return true
    if (sLen > tLen) return false

    j = 0
    for(let i = 0; i < tLen; i++) {
        if (t[i] === s[j]) {
            if (j === sLen-1) {
                return true
            } else {
                j++
            }
        }
    }
    return false
};